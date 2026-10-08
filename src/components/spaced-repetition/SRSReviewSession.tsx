'use client';

import React, { useState, useEffect } from 'react';
import type { SRSCardState } from '@/data/types';
import { useUserStore } from '@/lib/store/useUserStore';
import { getDueCards, type UserFeedback } from '@/lib/srs/sm2';
import { n5Kanji } from '@/data/n5/kanji';
import { n5Vocabulary } from '@/data/n5/vocabulary';
import { n5Grammar } from '@/data/n5/grammar';
import { RotateCw, CheckCircle2, Flame, Award } from 'lucide-react';

export const SRSReviewSession: React.FC = () => {
  const srsCards = useUserStore((s) => s.progress.srsCards);
  const reviewCardById = useUserStore((s) => s.reviewCardById);
  const addXP = useUserStore((s) => s.addXP);

  const [dueCards, setDueCards] = useState<SRSCardState[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [reviewsDone, setReviewsDone] = useState(0);

  useEffect(() => {
    setDueCards(getDueCards(srsCards));
    setStartTime(Date.now());
  }, [srsCards]);

  const currentCard = dueCards[currentIndex];

  // Resolve card item details
  const getItemDetails = (card?: SRSCardState) => {
    if (!card) return null;
    if (card.itemType === 'kanji') {
      const k = n5Kanji.find((x) => x.id === card.itemId);
      return {
        front: k?.character || '?',
        readings: k?.readings.map((r) => r.reading).join(', '),
        back: k?.meaningEN || '',
        mnemonic: k?.mnemonic,
      };
    } else if (card.itemType === 'vocabulary') {
      const v = n5Vocabulary.find((x) => x.id === card.itemId);
      return {
        front: v?.japanese || '?',
        readings: `${v?.kana} (${v?.romaji})`,
        back: v?.meanings.join(', ') || '',
        mnemonic: v?.memoryTrick,
      };
    } else {
      const g = n5Grammar.find((x) => x.id === card.itemId);
      return {
        front: g?.title || '?',
        readings: g?.pattern,
        back: g?.explanationSimple || '',
        mnemonic: g?.analogy,
      };
    }
  };

  const itemData = getItemDetails(currentCard);

  const handleRating = (feedback: UserFeedback) => {
    if (!currentCard) return;
    const responseTime = Date.now() - startTime;
    reviewCardById(currentCard.itemId, feedback, responseTime);

    setReviewsDone((prev) => prev + 1);
    addXP(10);

    if (currentIndex + 1 < dueCards.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setStartTime(Date.now());
    } else {
      setSessionCompleted(true);
    }
  };

  if (dueCards.length === 0 || sessionCompleted) {
    return (
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 max-w-md w-full mx-auto text-center flex flex-col items-center gap-6 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
            All Reviews Complete!
          </h2>
          <p className="text-stone-500 text-sm">
            {reviewsDone > 0
              ? `Great job! You reviewed ${reviewsDone} items today.`
              : 'You have no reviews due right now. Explore new lessons to add more items to your deck.'}
          </p>
        </div>
        {reviewsDone > 0 && (
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm bg-amber-50 dark:bg-amber-950/50 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-900/40">
            <Award className="w-4 h-4" /> +{reviewsDone * 10} XP Earned
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full mx-auto shadow-sm flex flex-col gap-6">
      {/* Session Progress Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Review Card {currentIndex + 1} of {dueCards.length}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full font-semibold uppercase bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
          {currentCard?.itemType}
        </span>
      </div>

      {/* Spaced Repetition Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="min-h-[260px] p-8 rounded-2xl border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-red-300 relative select-none"
      >
        <span className="text-5xl font-black text-stone-900 dark:text-stone-100 jp-serif mb-3">
          {itemData?.front}
        </span>

        {itemData?.readings && (
          <span className="text-sm font-mono text-red-600 dark:text-red-400 mb-2">
            {itemData.readings}
          </span>
        )}

        {isFlipped ? (
          <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 w-full animate-fade-in flex flex-col gap-2">
            <span className="text-xl font-bold text-stone-800 dark:text-stone-200">
              {itemData?.back}
            </span>
            {itemData?.mnemonic && (
              <span className="text-xs text-stone-500 italic mt-1">
                {itemData.mnemonic}
              </span>
            )}
          </div>
        ) : (
          <span className="text-xs text-stone-400 font-medium mt-6">
            Tap card to flip
          </span>
        )}
      </div>

      {/* SM-2 Feedback Buttons */}
      {isFlipped ? (
        <div className="grid grid-cols-4 gap-2 pt-2 animate-slide-up">
          <button
            onClick={() => handleRating('again')}
            className="py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 dark:bg-red-950 dark:hover:bg-red-900 dark:text-red-300 font-bold text-xs flex flex-col items-center gap-1 transition-colors"
          >
            <span>Again</span>
            <span className="text-[10px] font-normal opacity-70">&lt; 1d</span>
          </button>
          <button
            onClick={() => handleRating('hard')}
            className="py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 dark:bg-amber-950 dark:hover:bg-amber-900 dark:text-amber-300 font-bold text-xs flex flex-col items-center gap-1 transition-colors"
          >
            <span>Hard</span>
            <span className="text-[10px] font-normal opacity-70">1d</span>
          </button>
          <button
            onClick={() => handleRating('good')}
            className="py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-blue-300 font-bold text-xs flex flex-col items-center gap-1 transition-colors"
          >
            <span>Good</span>
            <span className="text-[10px] font-normal opacity-70">6d</span>
          </button>
          <button
            onClick={() => handleRating('easy')}
            className="py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:hover:bg-emerald-900 dark:text-emerald-300 font-bold text-xs flex flex-col items-center gap-1 transition-colors"
          >
            <span>Easy</span>
            <span className="text-[10px] font-normal opacity-70">14d</span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsFlipped(true)}
          className="w-full py-3.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white font-semibold text-sm transition-colors"
        >
          Show Answer
        </button>
      )}
    </div>
  );
};
