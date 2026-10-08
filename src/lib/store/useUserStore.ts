// ============================================================
// JLPT Quest — User State Store (Zustand)
// Persisted to localStorage for offline-first experience
// ============================================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserProgress,
  UserSettings,
  SRSCardState,
  JLPTLevel,
  DailyMission,
  Achievement,
  DisplayMode,
} from '@/data/types';
import {
  createNewCard,
  reviewCard,
  getDueCount,
  type UserFeedback,
} from '@/lib/srs/sm2';

// ─── Default Settings ────────────────────────────────────────

const DEFAULT_SETTINGS: UserSettings = {
  displayMode: 'japanese-furigana-romaji-english',
  showFurigana: true,
  showRomaji: true,
  showEnglish: true,
  textSize: 'medium',
  autoPlayAudio: false,
  strokeAnimationSpeed: 1,
  darkMode: false,
  dailyGoalMinutes: 15,
};

const DEFAULT_DAILY_MISSIONS: DailyMission[] = [
  {
    id: 'daily-vocab-5',
    description: 'Learn 5 new words',
    target: 5,
    progress: 0,
    xpReward: 50,
    completed: false,
    icon: '📚',
  },
  {
    id: 'daily-kanji-2',
    description: 'Learn 2 kanji',
    target: 2,
    progress: 0,
    xpReward: 40,
    completed: false,
    icon: '漢',
  },
  {
    id: 'daily-grammar-1',
    description: 'Complete 1 grammar lesson',
    target: 1,
    progress: 0,
    xpReward: 60,
    completed: false,
    icon: '✏️',
  },
  {
    id: 'daily-review-10',
    description: 'Review 10 cards',
    target: 10,
    progress: 0,
    xpReward: 30,
    completed: false,
    icon: '🔁',
  },
];

// ─── Store Interface ──────────────────────────────────────────

interface UserStore {
  // State
  progress: UserProgress;
  isLoaded: boolean;

  // Settings actions
  updateSettings: (settings: Partial<UserSettings>) => void;
  setDisplayMode: (mode: DisplayMode) => void;
  toggleFurigana: () => void;
  toggleRomaji: () => void;
  toggleEnglish: () => void;

  // XP & Gamification
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  unlockAchievement: (achievement: Achievement) => void;
  updateDailyMission: (missionId: string, progress: number) => void;
  resetDailyMissions: () => void;

  // Learning Progress
  markLessonComplete: (lessonId: string) => void;
  markKanjiMastered: (kanjiId: string) => void;
  markVocabMastered: (vocabId: string) => void;
  markGrammarMastered: (grammarId: string) => void;

  // SRS
  initCard: (itemId: string, itemType: 'kanji' | 'vocabulary' | 'grammar') => void;
  reviewCardById: (itemId: string, feedback: UserFeedback, responseTimeMs: number) => void;
  getCardByItemId: (itemId: string) => SRSCardState | undefined;
  getDueCardCount: () => number;

  // Level
  setLevel: (level: JLPTLevel) => void;
}

// ─── Initial State ─────────────────────────────────────────────

const initialProgress: UserProgress = {
  userId: 'local-user',
  level: 'N5',
  xp: 0,
  streak: 0,
  lastActiveDate: new Date().toISOString(),
  kanjiMastered: [],
  vocabMastered: [],
  grammarMastered: [],
  lessonsCompleted: [],
  srsCards: [],
  dailyMissions: DEFAULT_DAILY_MISSIONS,
  achievements: [],
  settings: DEFAULT_SETTINGS,
};

// ─── Store ──────────────────────────────────────────────────

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      isLoaded: false,

      // ─── Settings ────────────────────────────────────────

      updateSettings: (settings) =>
        set((state) => ({
          progress: {
            ...state.progress,
            settings: { ...state.progress.settings, ...settings },
          },
        })),

      setDisplayMode: (mode) => {
        const showFurigana = mode.includes('furigana');
        const showRomaji = mode.includes('romaji');
        const showEnglish = mode.includes('english');
        set((state) => ({
          progress: {
            ...state.progress,
            settings: {
              ...state.progress.settings,
              displayMode: mode,
              showFurigana,
              showRomaji,
              showEnglish,
            },
          },
        }));
      },

      toggleFurigana: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            settings: {
              ...state.progress.settings,
              showFurigana: !state.progress.settings.showFurigana,
            },
          },
        })),

      toggleRomaji: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            settings: {
              ...state.progress.settings,
              showRomaji: !state.progress.settings.showRomaji,
            },
          },
        })),

      toggleEnglish: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            settings: {
              ...state.progress.settings,
              showEnglish: !state.progress.settings.showEnglish,
            },
          },
        })),

      // ─── XP & Gamification ───────────────────────────────────

      addXP: (amount) =>
        set((state) => ({
          progress: {
            ...state.progress,
            xp: state.progress.xp + amount,
          },
        })),

      incrementStreak: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            streak: state.progress.streak + 1,
            lastActiveDate: new Date().toISOString(),
          },
        })),

      resetStreak: () =>
        set((state) => ({
          progress: { ...state.progress, streak: 0 },
        })),

      unlockAchievement: (achievement) =>
        set((state) => {
          const alreadyUnlocked = state.progress.achievements.some(
            (a) => a.id === achievement.id,
          );
          if (alreadyUnlocked) return state;
          return {
            progress: {
              ...state.progress,
              achievements: [
                ...state.progress.achievements,
                { ...achievement, unlockedAt: new Date().toISOString() },
              ],
              xp: state.progress.xp + achievement.xpReward,
            },
          };
        }),

      updateDailyMission: (missionId, progress) =>
        set((state) => ({
          progress: {
            ...state.progress,
            dailyMissions: state.progress.dailyMissions.map((m) =>
              m.id === missionId
                ? {
                    ...m,
                    progress: Math.min(progress, m.target),
                    completed: progress >= m.target,
                  }
                : m,
            ),
          },
        })),

      resetDailyMissions: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            dailyMissions: DEFAULT_DAILY_MISSIONS,
          },
        })),

      // ─── Learning Progress ────────────────────────────────────

      markLessonComplete: (lessonId) =>
        set((state) => {
          if (state.progress.lessonsCompleted.includes(lessonId)) return state;
          return {
            progress: {
              ...state.progress,
              lessonsCompleted: [...state.progress.lessonsCompleted, lessonId],
            },
          };
        }),

      markKanjiMastered: (kanjiId) =>
        set((state) => {
          if (state.progress.kanjiMastered.includes(kanjiId)) return state;
          return {
            progress: {
              ...state.progress,
              kanjiMastered: [...state.progress.kanjiMastered, kanjiId],
            },
          };
        }),

      markVocabMastered: (vocabId) =>
        set((state) => {
          if (state.progress.vocabMastered.includes(vocabId)) return state;
          return {
            progress: {
              ...state.progress,
              vocabMastered: [...state.progress.vocabMastered, vocabId],
            },
          };
        }),

      markGrammarMastered: (grammarId) =>
        set((state) => {
          if (state.progress.grammarMastered.includes(grammarId)) return state;
          return {
            progress: {
              ...state.progress,
              grammarMastered: [...state.progress.grammarMastered, grammarId],
            },
          };
        }),

      // ─── SRS ──────────────────────────────────────────────────

      initCard: (itemId, itemType) =>
        set((state) => {
          const exists = state.progress.srsCards.some((c) => c.itemId === itemId);
          if (exists) return state;
          return {
            progress: {
              ...state.progress,
              srsCards: [
                ...state.progress.srsCards,
                createNewCard(itemId, itemType),
              ],
            },
          };
        }),

      reviewCardById: (itemId, feedback, responseTimeMs) =>
        set((state) => {
          const card = state.progress.srsCards.find((c) => c.itemId === itemId);
          if (!card) return state;
          const updatedCard = reviewCard(card, feedback, responseTimeMs);
          return {
            progress: {
              ...state.progress,
              srsCards: state.progress.srsCards.map((c) =>
                c.itemId === itemId ? updatedCard : c,
              ),
            },
          };
        }),

      getCardByItemId: (itemId) =>
        get().progress.srsCards.find((c) => c.itemId === itemId),

      getDueCardCount: () =>
        getDueCount(get().progress.srsCards),

      // ─── Level ────────────────────────────────────────────────

      setLevel: (level) =>
        set((state) => ({
          progress: { ...state.progress, level },
        })),
    }),
    {
      name: 'jlpt-quest-user-progress',
      version: 1,
      onRehydrateStorage: () => (state) => {
        if (state) state.isLoaded = true;
      },
    },
  ),
);

// ─── Selectors ────────────────────────────────────────────────

export const useSettings = () => useUserStore((s) => s.progress.settings);
export const useXP = () => useUserStore((s) => s.progress.xp);
export const useStreak = () => useUserStore((s) => s.progress.streak);
export const useDailyMissions = () => useUserStore((s) => s.progress.dailyMissions);
export const useAchievements = () => useUserStore((s) => s.progress.achievements);
export const useSRSCards = () => useUserStore((s) => s.progress.srsCards);
export const useCurrentLevel = () => useUserStore((s) => s.progress.level);

// Derived mastery percentages
export const useMasteryStats = () => {
  const { kanjiMastered, vocabMastered, grammarMastered } = useUserStore(
    (s) => s.progress,
  );
  // N5 targets (scaled to current implemented curriculum)
  const N5_KANJI_TOTAL = 105;
  const N5_VOCAB_TOTAL = 802;
  const N5_GRAMMAR_TOTAL = 45;

  return {
    kanjiPercent: Math.round((kanjiMastered.length / N5_KANJI_TOTAL) * 100),
    vocabPercent: Math.round((vocabMastered.length / N5_VOCAB_TOTAL) * 100),
    grammarPercent: Math.round((grammarMastered.length / N5_GRAMMAR_TOTAL) * 100),
    kanjiMastered: kanjiMastered.length,
    vocabMastered: vocabMastered.length,
    grammarMastered: grammarMastered.length,
  };
};
