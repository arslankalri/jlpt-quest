'use client';

import React, { useState } from 'react';
import { n5ReadingPassages } from '@/data/n5/reading';
import { FuriganaText } from '@/components/furigana/FuriganaText';
import { BookOpen, Volume2, CheckCircle2, HelpCircle } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

export default function ReadingPage() {
  const [selectedId, setSelectedId] = useState(n5ReadingPassages[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const addXP = useUserStore((s) => s.addXP);

  const currentPassage =
    n5ReadingPassages.find((p) => p.id === selectedId) || n5ReadingPassages[0];

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      window.speechSynthesis.speak(u);
    }
  };

  const handleSelectAnswer = (qId: string, opt: string) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const handleCheck = () => {
    setShowResults(true);
    let correct = 0;
    currentPassage.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) correct++;
    });
    addXP(correct * 20);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-emerald-600" />
          JLPT N5 Reading Comprehension
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Read beginner Japanese texts with clickable audio, interactive furigana ruby, and comprehension checks.
        </p>
      </div>

      {/* Passage Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {n5ReadingPassages.map((p) => {
          const isSelected = p.id === selectedId;
          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedId(p.id);
                setSelectedAnswers({});
                setShowResults(false);
              }}
              className={`px-5 py-3 rounded-2xl border-2 text-left transition-all shrink-0 ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 shadow-xs'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-emerald-300'
              }`}
            >
              <div className="text-xs font-bold">{p.title}</div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium jp">
                {p.titleJP}
              </div>
            </button>
          );
        })}
      </div>

      {/* Reading Passage Presentation */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {currentPassage.title} ({currentPassage.titleJP})
            </h2>
            <span className="text-xs text-stone-400 font-medium">Level: {currentPassage.level}</span>
          </div>
          <button
            onClick={() => playAudio(currentPassage.text)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-semibold transition-colors"
          >
            <Volume2 className="w-4 h-4" /> Listen to Passage
          </button>
        </div>

        {/* Text Paragraphs with Ruby */}
        <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800/60 flex flex-col gap-4">
          {currentPassage.annotatedText.map((sentence, idx) => (
            <div key={idx} className="flex items-start justify-between gap-4">
              <FuriganaText sentence={sentence} className="text-base" />
              <button
                onClick={() =>
                  playAudio(sentence.segments.map((s) => s.reading || s.text).join(''))
                }
                className="p-1 rounded-full text-stone-400 hover:text-emerald-600 transition-colors shrink-0 mt-1"
                title="Listen"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Reading Comprehension Questions */}
        <div className="flex flex-col gap-5 pt-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" /> Comprehension Questions
          </h3>

          <div className="flex flex-col gap-4">
            {currentPassage.questions.map((q, qIdx) => (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col gap-3"
              >
                <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {qIdx + 1}. {q.prompt}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options?.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === opt;
                    const isCorrect = opt === q.correctAnswer;

                    let btnStyle = 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-emerald-300';

                    if (showResults) {
                      if (isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'border-red-500 bg-red-50/50 dark:bg-red-950/30 text-red-800 dark:text-red-300';
                      } else {
                        btnStyle = 'opacity-50 border-stone-200 dark:border-stone-800';
                      }
                    } else if (isSelected) {
                      btnStyle = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(q.id, opt)}
                        className={`p-3 rounded-xl border-2 text-left text-xs transition-all ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showResults && (
                  <div className="mt-1 text-xs text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900 p-3 rounded-xl border border-stone-200 dark:border-stone-800">
                    <span className="font-bold block mb-0.5">Explanation:</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showResults && (
            <button
              onClick={handleCheck}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="mt-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-sm transition-colors shadow-xs"
            >
              Check Answers (+20 XP per correct)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
