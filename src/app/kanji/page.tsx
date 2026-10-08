'use client';

import React, { useState } from 'react';
import { n5Kanji } from '@/data/n5/kanji';
import { KanjiCard } from '@/components/kanji/KanjiCard';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

export default function KanjiPage() {
  const [selectedKanjiId, setSelectedKanjiId] = useState<string>(n5Kanji[0].id);
  const kanjiMastered = useUserStore((s) => s.progress.kanjiMastered);

  const currentKanji = n5Kanji.find((k) => k.id === selectedKanjiId) || n5Kanji[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-red-600" />
            JLPT N5 Kanji Quest
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Master stroke orders, calligraphy writing, visual mnemonics, and real-life usage.
          </p>
        </div>
      </div>

      {/* Kanji Picker Horizontal Scroll / Grid */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {n5Kanji.map((k) => {
          const isSelected = k.id === selectedKanjiId;
          const isMastered = kanjiMastered.includes(k.id);

          return (
            <button
              key={k.id}
              onClick={() => setSelectedKanjiId(k.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl min-w-[70px] h-[86px] border-2 transition-all shrink-0 ${
                isSelected
                  ? 'border-red-600 bg-red-50/50 dark:bg-red-950/40 text-red-600 shadow-xs'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:border-red-300'
              }`}
            >
              <span className="text-3xl font-black jp-serif">{k.character}</span>
              <span className="text-[10px] font-semibold mt-1 truncate max-w-[55px]">
                {k.meaningEN}
              </span>
              {isMastered && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 absolute top-1.5 right-1.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Kanji Interactive Detail Card */}
      <KanjiCard kanji={currentKanji} />
    </div>
  );
}
