'use client';

import React, { useState } from 'react';
import type { Vocabulary } from '@/data/types';
import { FuriganaText } from '../furigana/FuriganaText';
import { Volume2, Sparkles, CheckCircle, Lightbulb } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

interface VocabCardProps {
  vocab: Vocabulary;
  onMastered?: () => void;
}

export const VocabCard: React.FC<VocabCardProps> = ({ vocab, onMastered }) => {
  const markVocabMastered = useUserStore((s) => s.markVocabMastered);
  const addXP = useUserStore((s) => s.addXP);
  const isMastered = useUserStore((s) => s.progress.vocabMastered.includes(vocab.id));
  const [showDetails, setShowDetails] = useState(false);

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMastered = () => {
    markVocabMastered(vocab.id);
    addXP(20);
    if (onMastered) onMastered();
  };

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm overflow-hidden max-w-xl w-full mx-auto p-6 flex flex-col gap-5">
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            {vocab.level}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 capitalize">
            {vocab.partOfSpeech.replace('-', ' ')}
          </span>
        </div>

        {isMastered && (
          <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="w-4 h-4" /> Mastered
          </span>
        )}
      </div>

      {/* Main Vocab Presentation */}
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-3">
            <h2 className="text-4xl font-extrabold text-stone-900 dark:text-stone-100 jp">
              {vocab.japanese}
            </h2>
            <button
              onClick={() => playAudio(vocab.kana)}
              className="p-2 rounded-full bg-stone-100 hover:bg-red-50 text-stone-600 hover:text-red-600 dark:bg-stone-800 dark:text-stone-300 transition-colors"
              title="Play Audio"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-sm">
            <span>{vocab.kana}</span>
            <span>•</span>
            <span className="text-amber-700 dark:text-amber-400">{vocab.romaji}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold text-stone-800 dark:text-stone-200">
            {vocab.meanings.join(', ')}
          </div>
        </div>
      </div>

      {/* Memory Trick / Visual association */}
      {vocab.memoryTrick && (
        <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
            <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">
              Memory Trick
            </span>
            {vocab.memoryTrick}
          </div>
        </div>
      )}

      {/* Example Sentences */}
      <div className="flex flex-col gap-3 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Example Sentences
        </span>
        {vocab.exampleSentences.map((ex, i) => (
          <div
            key={i}
            className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-start justify-between gap-4"
          >
            <FuriganaText sentence={ex.annotated} />
            <button
              onClick={() => playAudio(ex.japanese)}
              className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors shrink-0 mt-1"
              title="Listen to sentence"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      {!isMastered && (
        <button
          onClick={handleMastered}
          className="w-full mt-2 py-3 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-red-600 dark:hover:bg-red-600 text-white dark:text-stone-900 hover:text-white dark:hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <CheckCircle className="w-4 h-4" /> Got it! (+20 XP)
        </button>
      )}
    </div>
  );
};
