// ============================================================
// JLPT Quest — Spaced Repetition System (SM-2 Algorithm)
// Based on the SuperMemo SM-2 algorithm
// ============================================================

import type { SRSCardState, MasteryStatus } from '@/data/types';

// SM-2 quality ratings (0-5)
export type SM2Quality = 0 | 1 | 2 | 3 | 4 | 5;

// ─── Quality Mapping ─────────────────────────────────────────

/**
 * Maps simple user feedback to SM-2 quality ratings:
 * - 'again' (wrong): 0-1
 * - 'hard': 2-3
 * - 'good': 4
 * - 'easy': 5
 */
export type UserFeedback = 'again' | 'hard' | 'good' | 'easy';

export function feedbackToQuality(feedback: UserFeedback): SM2Quality {
  switch (feedback) {
    case 'again': return 1;
    case 'hard': return 2;
    case 'good': return 4;
    case 'easy': return 5;
  }
}

// ─── SM-2 Core Algorithm ──────────────────────────────────────

export interface SM2Result {
  interval: number;       // days until next review
  easeFactor: number;     // updated ease factor
  repetitions: number;    // updated repetition count
  dueDate: string;        // ISO date string
  status: MasteryStatus;
}

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

/**
 * Calculate the next review state using SM-2 algorithm.
 * @param card - Current card state
 * @param quality - SM-2 quality rating (0-5)
 */
export function calculateNextReview(
  card: Partial<SRSCardState>,
  quality: SM2Quality,
): SM2Result {
  const currentRepetitions = card.repetitions ?? 0;
  const currentEaseFactor = card.easeFactor ?? DEFAULT_EASE_FACTOR;
  const currentInterval = card.interval ?? 0;

  let newInterval: number;
  let newRepetitions: number;
  let newEaseFactor: number;

  if (quality < 3) {
    // Incorrect or very hard — reset
    newRepetitions = 0;
    newInterval = 1;
    newEaseFactor = currentEaseFactor; // keep ease factor on failure
  } else {
    // Correct response
    newRepetitions = currentRepetitions + 1;

    if (newRepetitions === 1) {
      newInterval = 1;
    } else if (newRepetitions === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(currentInterval * currentEaseFactor);
    }

    // Update ease factor: EF = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    newEaseFactor = currentEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    newEaseFactor = Math.max(MIN_EASE_FACTOR, newEaseFactor);
  }

  // Cap max interval at 180 days for JLPT purposes
  newInterval = Math.min(newInterval, 180);

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + newInterval);

  const status = qualityToMasteryStatus(quality, newRepetitions, newInterval);

  return {
    interval: newInterval,
    easeFactor: newEaseFactor,
    repetitions: newRepetitions,
    dueDate: dueDate.toISOString(),
    status,
  };
}

// ─── Status Determination ─────────────────────────────────────

function qualityToMasteryStatus(
  quality: SM2Quality,
  repetitions: number,
  interval: number,
): MasteryStatus {
  if (quality < 3) return 'learning';
  if (repetitions <= 1) return 'learning';
  if (interval < 7) return 'learning';
  if (interval < 21) return 'familiar';
  return 'mastered';
}

// ─── Card Initialization ─────────────────────────────────────

export function createNewCard(
  itemId: string,
  itemType: 'kanji' | 'vocabulary' | 'grammar',
): SRSCardState {
  return {
    itemId,
    itemType,
    status: 'new',
    interval: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    repetitions: 0,
    dueDate: new Date().toISOString(),
    lastReview: new Date().toISOString(),
    correctCount: 0,
    incorrectCount: 0,
    avgResponseTime: 0,
  };
}

// ─── Due Card Selection ───────────────────────────────────────

/**
 * Return cards that are due for review today.
 * Sorts: overdue cards first, then by due date.
 */
export function getDueCards(cards: SRSCardState[], nowMs?: number): SRSCardState[] {
  const now = nowMs ? new Date(nowMs) : new Date();
  return cards
    .filter(card => {
      if (card.status === 'new') return true;
      return new Date(card.dueDate) <= now;
    })
    .sort((a, b) => {
      // New cards after overdue cards
      if (a.status === 'new' && b.status !== 'new') return 1;
      if (b.status === 'new' && a.status !== 'new') return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
}

/**
 * Get count of cards due today.
 */
export function getDueCount(cards: SRSCardState[]): number {
  return getDueCards(cards).length;
}

/**
 * Get statistics about a collection of SRS cards.
 */
export function getCardStats(cards: SRSCardState[]) {
  return {
    total: cards.length,
    new: cards.filter(c => c.status === 'new').length,
    learning: cards.filter(c => c.status === 'learning').length,
    familiar: cards.filter(c => c.status === 'familiar').length,
    mastered: cards.filter(c => c.status === 'mastered').length,
    needsReview: cards.filter(c => c.status === 'needs_review').length,
    due: getDueCount(cards),
    masteryPercent: cards.length > 0
      ? Math.round((cards.filter(c => c.status === 'mastered').length / cards.length) * 100)
      : 0,
  };
}

// ─── Performance Tracking ─────────────────────────────────────

/**
 * Update a card after a review session.
 */
export function reviewCard(
  card: SRSCardState,
  feedback: UserFeedback,
  responseTimeMs: number,
): SRSCardState {
  const quality = feedbackToQuality(feedback);
  const result = calculateNextReview(card, quality);

  const isCorrect = quality >= 3;
  const newCorrectCount = isCorrect ? card.correctCount + 1 : card.correctCount;
  const newIncorrectCount = isCorrect ? card.incorrectCount : card.incorrectCount + 1;

  // Running average of response time
  const totalReviews = card.correctCount + card.incorrectCount;
  const newAvgTime = totalReviews > 0
    ? (card.avgResponseTime * totalReviews + responseTimeMs) / (totalReviews + 1)
    : responseTimeMs;

  return {
    ...card,
    ...result,
    lastReview: new Date().toISOString(),
    correctCount: newCorrectCount,
    incorrectCount: newIncorrectCount,
    avgResponseTime: Math.round(newAvgTime),
  };
}
