'use client';

import React, { useState } from 'react';
import type { QuizQuestion } from '@/data/types';
import { Volume2, Check, X, ArrowRight, RotateCcw } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

interface QuizEngineProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const addXP = useUserStore((s) => s.addXP);

  const currentQ = questions[currentIndex];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      addXP(15);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (onComplete) onComplete(score, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      window.speechSynthesis.speak(u);
    }
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 max-w-md w-full mx-auto text-center flex flex-col items-center gap-6 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-3xl font-extrabold text-red-600 dark:text-red-400">
          {percentage}%
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
            Quiz Completed!
          </h2>
          <p className="text-stone-500 text-sm">
            You scored {score} out of {questions.length} questions correctly.
          </p>
        </div>

        <div className="w-full bg-stone-50 dark:bg-stone-950 p-4 rounded-2xl border border-stone-100 dark:border-stone-800 flex justify-around text-center">
          <div>
            <div className="text-xs text-stone-400 font-semibold uppercase">Earned XP</div>
            <div className="text-lg font-bold text-amber-600">+{score * 15} XP</div>
          </div>
          <div className="border-r border-stone-200 dark:border-stone-800" />
          <div>
            <div className="text-xs text-stone-400 font-semibold uppercase">Accuracy</div>
            <div className="text-lg font-bold text-emerald-600">{percentage}%</div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-sm transition-all"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full mx-auto shadow-sm flex flex-col gap-6">
      {/* Quiz Progress Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-xs font-bold text-red-600 dark:text-red-400">
          Score: {score}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Prompt */}
      <div className="flex flex-col gap-3 py-2">
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
          {currentQ.prompt}
        </h3>

        {currentQ.promptJP && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
            <span className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 jp">
              {currentQ.promptJP}
            </span>
            <button
              onClick={() => playAudio(currentQ.promptJP!)}
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors"
              title="Play audio"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {currentQ.options?.map((opt, i) => {
          let btnStyle = 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-red-400';

          if (isAnswered) {
            if (opt === currentQ.correctAnswer) {
              btnStyle = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-bold';
            } else if (opt === selectedAnswer) {
              btnStyle = 'border-red-500 bg-red-50/50 dark:bg-red-950/30 text-red-800 dark:text-red-300 font-medium';
            } else {
              btnStyle = 'opacity-50 border-stone-200 dark:border-stone-800';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              disabled={isAnswered}
              className={`p-4 rounded-xl border-2 text-left text-sm transition-all flex items-center justify-between ${btnStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && opt === currentQ.correctAnswer && (
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {isAnswered && opt === selectedAnswer && opt !== currentQ.correctAnswer && (
                <X className="w-5 h-5 text-red-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback & Next Button */}
      {isAnswered && (
        <div className="flex flex-col gap-4 pt-2 border-t border-stone-100 dark:border-stone-800 animate-fade-in">
          <p className="text-xs text-stone-600 dark:text-stone-300 bg-stone-50 dark:bg-stone-950 p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 leading-relaxed">
            <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">
              Explanation:
            </span>
            {currentQ.explanation}
          </p>
          <button
            onClick={handleNext}
            className="w-full py-3.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-red-600 dark:hover:bg-red-600 text-white dark:text-stone-900 hover:text-white dark:hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Next Question <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
