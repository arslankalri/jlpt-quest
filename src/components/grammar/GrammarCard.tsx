'use client';

import React, { useState } from 'react';
import type { GrammarPoint } from '@/data/types';
import { FuriganaText } from '../furigana/FuriganaText';
import { Sparkles, AlertCircle, MessageCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

interface GrammarCardProps {
  grammar: GrammarPoint;
  onMastered?: () => void;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({ grammar, onMastered }) => {
  const [eli5Mode, setEli5Mode] = useState(true);
  const markGrammarMastered = useUserStore((s) => s.markGrammarMastered);
  const addXP = useUserStore((s) => s.addXP);
  const isMastered = useUserStore((s) => s.progress.grammarMastered.includes(grammar.id));

  const handleMastered = () => {
    markGrammarMastered(grammar.id);
    addXP(40);
    if (onMastered) onMastered();
  };

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm overflow-hidden max-w-2xl w-full mx-auto p-6 sm:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
            {grammar.level}
          </span>
          <span className="text-xs text-stone-500 font-medium">Grammar #{grammar.order}</span>
        </div>

        <button
          onClick={() => setEli5Mode(!eli5Mode)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
            eli5Mode
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Explain Like I&apos;m 5
        </button>
      </div>

      {/* Grammar Title & Pattern */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100">
          {grammar.title}
        </h2>
        <div className="p-3 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 font-mono text-sm font-semibold text-red-600 dark:text-red-400">
          {grammar.pattern}
        </div>
      </div>

      {/* ELI5 Explanation / Analogy */}
      <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <span>Think of it like this:</span>
        </div>
        <p className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed whitespace-pre-line">
          {eli5Mode ? grammar.analogy : grammar.explanationFull}
        </p>
      </div>

      {/* Examples with Furigana */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Realistic Examples
        </span>
        {grammar.examples.map((ex, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col gap-2"
          >
            <FuriganaText sentence={ex.annotated} />
            {ex.note && (
              <span className="text-xs text-stone-500 italic mt-1">{ex.note}</span>
            )}
          </div>
        ))}
      </div>

      {/* Common Mistake Alert */}
      {grammar.commonMistake && (
        <div className="p-4 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-bold text-red-900 dark:text-red-300">
              Watch Out: Common Beginner Mistake
            </span>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              {grammar.commonMistake}
            </p>
          </div>
        </div>
      )}

      {/* Mini Conversation */}
      {grammar.miniConversation && grammar.miniConversation.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-stone-500" /> Mini Dialogue
          </span>
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col gap-3">
            {grammar.miniConversation.map((line, idx) => (
              <FuriganaText key={idx} sentence={line.annotated} />
            ))}
          </div>
        </div>
      )}

      {/* Action Footer */}
      {!isMastered && (
        <button
          onClick={handleMastered}
          className="w-full mt-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <CheckCircle className="w-4 h-4" /> Got this pattern! (+40 XP)
        </button>
      )}
    </div>
  );
};
