'use client';

import React, { useState } from 'react';
import { n5RealLifeScenarios } from '@/data/n5/realLife';
import { FuriganaText } from '@/components/furigana/FuriganaText';
import { MapPin, Volume2 } from 'lucide-react';

export default function RealLifePage() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(n5RealLifeScenarios[0].id);

  const currentScenario =
    n5RealLifeScenarios.find((s) => s.id === selectedScenarioId) || n5RealLifeScenarios[0];

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-red-600" />
          Japanese You&apos;ll Actually Use in Japan
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Survival dialogues and phrases for convenience stores, restaurants, train stations, and more.
        </p>
      </div>

      {/* Scenario Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {n5RealLifeScenarios.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioId(sc.id)}
              className={`p-5 rounded-3xl border-2 text-left transition-all flex items-start gap-4 ${
                isSelected
                  ? 'border-red-600 bg-red-50/40 dark:bg-red-950/20 shadow-xs'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-red-300'
              }`}
            >
              <span className="text-3xl">{sc.icon}</span>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  {sc.title}
                </h3>
                <span className="text-xs text-red-600 dark:text-red-400 font-medium jp">
                  {sc.titleJP}
                </span>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                  {sc.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Details */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-8 shadow-xs">
        <div className="flex items-center gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
          <span className="text-4xl">{currentScenario.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {currentScenario.title} ({currentScenario.titleJP})
            </h2>
            <p className="text-sm text-stone-500">{currentScenario.description}</p>
          </div>
        </div>

        {/* Essential Phrases */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">
            Key Phrases to Remember
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScenario.phrases.map((phrase) => (
              <div
                key={phrase.id}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-start justify-between gap-3"
              >
                <FuriganaText sentence={phrase.annotated} />
                <button
                  onClick={() => playAudio(phrase.japanese)}
                  className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors shrink-0"
                  title="Play audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic Mini Dialogue */}
        {currentScenario.miniDialogue.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">
              Realistic Dialogue
            </h3>
            <div className="p-6 rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col gap-4">
              {currentScenario.miniDialogue.map((dialogue) => (
                <div key={dialogue.id} className="flex items-start justify-between gap-4">
                  <FuriganaText sentence={dialogue.annotated} />
                  <button
                    onClick={() => playAudio(dialogue.japanese)}
                    className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors shrink-0 mt-1"
                    title="Play audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
