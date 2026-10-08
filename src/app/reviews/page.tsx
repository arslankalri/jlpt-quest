'use client';

import React from 'react';
import { SRSReviewSession } from '@/components/spaced-repetition/SRSReviewSession';
import { Award } from 'lucide-react';

export default function ReviewsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Award className="w-7 h-7 text-amber-500" />
          Spaced Repetition Review Deck
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Review kanji, vocabulary, and grammar items right before you forget them with the SM-2 algorithm.
        </p>
      </div>

      <div className="py-6">
        <SRSReviewSession />
      </div>
    </div>
  );
}
