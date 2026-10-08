'use client';

import React, { useState } from 'react';
import type { Kanji } from '@/data/types';
import { StrokeAnimation } from './StrokeAnimation';
import { WritingCanvas } from './WritingCanvas';
import { FuriganaText } from '../furigana/FuriganaText';
import { Volume2, Sparkles, BookOpen, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

interface KanjiCardProps {
  kanji: Kanji;
  onMastered?: () => void;
}

export const KanjiCard: React.FC<KanjiCardProps> = ({ kanji, onMastered }) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'strokes' | 'write' | 'vocab'>('learn');
  const [eli5Mode, setEli5Mode] = useState<boolean>(true);
  const markKanjiMastered = useUserStore((s) => s.markKanjiMastered);
  const addXP = useUserStore((s) => s.addXP);
  const isMastered = useUserStore((s) => s.progress.kanjiMastered.includes(kanji.id));

  const handleCompletePractice = () => {
    markKanjiMastered(kanji.id);
    addXP(30);
    if (onMastered) onMastered();
  };

  const playAudio = (text: string) => {
    // Web Speech API fallback for instant audio
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm overflow-hidden max-w-2xl w-full mx-auto">
      {/* Top Banner / Level Tag */}
      <div className="px-6 py-4 bg-stone-50 dark:bg-stone-950 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            {kanji.level}
          </span>
          <span className="text-xs text-stone-500 font-medium">Kanji #{kanji.order}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* ELI5 Toggle */}
          <button
            onClick={() => setEli5Mode(!eli5Mode)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              eli5Mode
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            ELI5 Mode
          </button>

          {isMastered && (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" /> Mastered
            </span>
          )}
        </div>
      </div>

      {/* Hero Kanji Header */}
      <div className="p-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-b border-stone-100 dark:border-stone-800 bg-gradient-to-b from-stone-50/50 to-white dark:from-stone-950/50 dark:to-stone-900">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/60 flex items-center justify-center shadow-inner">
            <span className="text-7xl font-bold text-stone-900 dark:text-stone-50 jp-serif">
              {kanji.character}
            </span>
          </div>

          <div className="flex flex-col gap-1 text-left">
            <h2 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 capitalize">
              {kanji.meaningEN}
            </h2>
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              {eli5Mode ? `"${kanji.meaningSimple}"` : `Stroke count: ${kanji.strokeCount}`}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => playAudio(kanji.readings[0]?.reading.replace('.', '') || kanji.character)}
                className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-red-50 text-stone-700 dark:text-stone-300 hover:text-red-600 transition-colors"
                title="Play Audio"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-500 font-mono">
                {kanji.readings.map((r) => r.reading).join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {!isMastered && (
          <button
            onClick={handleCompletePractice}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Mark Mastered (+30 XP)
          </button>
        )}
      </div>

      {/* Tabs Bar */}
      <div className="flex border-b border-stone-200 dark:border-stone-800 px-6 gap-6 bg-stone-50/50 dark:bg-stone-950/50 text-sm font-semibold">
        {[
          { key: 'learn', label: 'Memory & Story', icon: Sparkles },
          { key: 'strokes', label: 'Stroke Order', icon: BookOpen },
          { key: 'write', label: 'Handwriting', icon: ArrowRight },
          { key: 'vocab', label: 'Real Life & Words', icon: MapPin },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`flex items-center gap-2 py-3.5 border-b-2 transition-all ${
              activeTab === key
                ? 'border-red-600 text-red-600 dark:text-red-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-6">
        {activeTab === 'learn' && (
          <div className="flex flex-col gap-6">
            {/* Visual Mnemonic Section */}
            <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold mb-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Visual Memory Mnemonic</span>
              </div>
              <p className="text-stone-800 dark:text-stone-200 text-base leading-relaxed">
                {kanji.mnemonic}
              </p>
              <div className="mt-3 text-xs text-amber-700/80 dark:text-amber-400/80 italic">
                Note: {kanji.mnemonicNote}
              </div>
            </div>

            {/* Readings breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  On&apos;yomi (Chinese reading)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {kanji.readings
                    .filter((r) => r.type === 'onyomi')
                    .map((r, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 font-mono text-sm font-semibold"
                      >
                        {r.reading} ({r.romaji})
                      </span>
                    ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Kun&apos;yomi (Japanese reading)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {kanji.readings
                    .filter((r) => r.type === 'kunyomi')
                    .map((r, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 font-mono text-sm font-semibold"
                      >
                        {r.reading} ({r.romaji})
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'strokes' && (
          <div className="flex justify-center py-4">
            <StrokeAnimation strokes={kanji.strokes} character={kanji.character} />
          </div>
        )}

        {activeTab === 'write' && (
          <div className="flex justify-center py-4">
            <WritingCanvas
              character={kanji.character}
              expectedStrokes={kanji.strokeCount}
              onSuccess={handleCompletePractice}
            />
          </div>
        )}

        {activeTab === 'vocab' && (
          <div className="flex flex-col gap-6">
            {/* Real Life Where You Encounter It */}
            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" /> Real Life in Japan:
              </span>
              <div className="flex flex-wrap gap-2">
                {kanji.realLifeContexts.map((ctx, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-900/40"
                  >
                    {ctx}
                  </span>
                ))}
              </div>
            </div>

            {/* Kanji Vocabulary List */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-stone-700 dark:text-stone-300">
                Core Vocabulary with {kanji.character}:
              </h3>
              {kanji.vocabulary.map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex flex-col gap-2 hover:border-red-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-stone-900 dark:text-stone-100 jp">
                        {v.word}
                      </span>
                      <span className="text-xs text-red-600 dark:text-red-400 font-mono">
                        {v.reading}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">({v.romaji})</span>
                    </div>
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {v.meaning}
                    </span>
                  </div>

                  {v.exampleSentence && (
                    <div className="mt-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                      <FuriganaText sentence={v.exampleSentence.annotated} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
