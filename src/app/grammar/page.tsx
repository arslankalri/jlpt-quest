'use client';

import React, { useState } from 'react';
import { n5Grammar } from '@/data/n5/grammar';
import { GrammarCard } from '@/components/grammar/GrammarCard';
import { Layers } from 'lucide-react';

export default function GrammarPage() {
  const [selectedGrammarId, setSelectedGrammarId] = useState<string>(n5Grammar[0].id);

  const currentGrammar = n5Grammar.find((g) => g.id === selectedGrammarId) || n5Grammar[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Layers className="w-7 h-7 text-purple-600" />
          JLPT N5 Grammar Quest
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Master essential sentence structures with simple visual analogies and common mistake alerts.
        </p>
      </div>

      {/* Grammar Points Selection Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {n5Grammar.map((g) => {
          const isSelected = g.id === selectedGrammarId;
          return (
            <button
              key={g.id}
              onClick={() => setSelectedGrammarId(g.id)}
              className={`px-4 py-2.5 rounded-2xl border-2 text-xs font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 shadow-xs'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-purple-300'
              }`}
            >
              {g.titleShort} ({g.pattern.split('+')[1]?.trim() || g.titleShort})
            </button>
          );
        })}
      </div>

      {/* Active Grammar Detail */}
      <GrammarCard grammar={currentGrammar} />
    </div>
  );
}
