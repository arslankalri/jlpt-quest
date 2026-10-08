'use client';

import React from 'react';
import Link from 'next/link';
import {
  useXP,
  useStreak,
  useMasteryStats,
  useDailyMissions,
  useUserStore,
} from '@/lib/store/useUserStore';
import { getDueCards } from '@/lib/srs/sm2';
import { LEVEL_CONFIGS } from '@/data/types';
import {
  Sparkles,
  Flame,
  Award,
  Layers,
  BookOpen,
  ArrowRight,
  Lock,
  CheckCircle2,
  Calendar,
  Compass,
} from 'lucide-react';

export default function DashboardPage() {
  const xp = useXP();
  const streak = useStreak();
  const missions = useDailyMissions();
  const stats = useMasteryStats();
  const srsCards = useUserStore((s) => s.progress.srsCards);
  const [dueCount, setDueCount] = React.useState(0);

  React.useEffect(() => {
    setDueCount(getDueCards(srsCards).length);
  }, [srsCards]);

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Hero Welcome & Top Stats */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Welcome to JLPT Quest
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100">
            Let&apos;s Conquer <span className="text-red-600">JLPT N5</span> Today!
          </h1>
          <p className="text-sm text-stone-500">
            Learn through seeing, hearing, writing, and spaced repetition.
          </p>
        </div>

        {/* Gamification Pills */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
          {/* XP Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40">
            <Award className="w-5 h-5 text-amber-500" />
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">Experience</div>
              <div className="text-base font-extrabold text-amber-700 dark:text-amber-300">
                {xp} XP
              </div>
            </div>
          </div>

          {/* Streak Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40">
            <Flame className="w-5 h-5 text-red-500" />
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">Streak</div>
              <div className="text-base font-extrabold text-red-700 dark:text-red-300">
                {streak} Days
              </div>
            </div>
          </div>

          {/* Due Reviews Alert */}
          <Link
            href="/reviews"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 hover:border-blue-400 transition-colors"
          >
            <Calendar className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">SRS Reviews</div>
              <div className="text-base font-extrabold text-blue-700 dark:text-blue-300">
                {dueCount} Due
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Progress Circles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Kanji Progress Card */}
        <Link
          href="/kanji"
          className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-red-300 shadow-xs transition-all flex flex-col gap-4 group"
        >
          <div className="flex items-center justify-between">
            <span className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-stone-400 group-hover:text-red-600 transition-colors flex items-center gap-1">
              Study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {stats.kanjiMastered} / 80
            </div>
            <div className="text-xs text-stone-500">N5 Kanji Mastered</div>
          </div>
          <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all"
              style={{ width: `${Math.min(100, (stats.kanjiMastered / 80) * 100)}%` }}
            />
          </div>
        </Link>

        {/* Vocabulary Progress Card */}
        <Link
          href="/vocabulary"
          className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-blue-300 shadow-xs transition-all flex flex-col gap-4 group"
        >
          <div className="flex items-center justify-between">
            <span className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-stone-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
              Study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {stats.vocabMastered} / 800
            </div>
            <div className="text-xs text-stone-500">N5 Vocabulary Mastered</div>
          </div>
          <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${Math.min(100, (stats.vocabMastered / 800) * 100)}%` }}
            />
          </div>
        </Link>

        {/* Grammar Progress Card */}
        <Link
          href="/grammar"
          className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-purple-300 shadow-xs transition-all flex flex-col gap-4 group"
        >
          <div className="flex items-center justify-between">
            <span className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
              <Layers className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-stone-400 group-hover:text-purple-600 transition-colors flex items-center gap-1">
              Study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {stats.grammarMastered} / 65
            </div>
            <div className="text-xs text-stone-500">N5 Grammar Points Mastered</div>
          </div>
          <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all"
              style={{ width: `${Math.min(100, (stats.grammarMastered / 65) * 100)}%` }}
            />
          </div>
        </Link>
      </div>

      {/* Daily Missions & Quest Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Mission Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100 text-sm">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span>Today&apos;s Missions</span>
            </div>
            <span className="text-[11px] font-bold text-amber-600">Daily Rewards</span>
          </div>

          <div className="flex flex-col gap-3">
            {missions.map((m) => (
              <div
                key={m.id}
                className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800/70 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{m.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      {m.description}
                    </div>
                    <div className="text-[10px] text-stone-400">
                      {m.progress} / {m.target} completed
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-600">+{m.xpReward} XP</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Roadmap & Level Picker (N5 active, N4-N1 locked) */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100 text-sm">
              <Compass className="w-4 h-4 text-red-500" />
              <span>JLPT Levels & Progression</span>
            </div>
            <span className="text-[11px] text-stone-400">Arch-scalable N5 → N1</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {LEVEL_CONFIGS.map((lvl) => (
              <div
                key={lvl.level}
                className={`p-4 rounded-2xl border flex flex-col justify-between min-h-[140px] relative transition-all ${
                  lvl.isUnlocked
                    ? 'border-emerald-300 bg-emerald-50/40 dark:bg-emerald-950/20 dark:border-emerald-800/60 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                        lvl.isUnlocked
                          ? 'bg-emerald-200 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100'
                          : 'bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-400'
                      }`}
                    >
                      {lvl.level}
                    </span>
                    {!lvl.isUnlocked && <Lock className="w-3.5 h-3.5 text-stone-400" />}
                  </div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200">
                    {lvl.name}
                  </div>
                </div>

                <div className="text-[10px] text-stone-500 font-medium mt-2">
                  {lvl.isUnlocked ? (
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      ● Active Level
                    </span>
                  ) : (
                    <span>Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Action Bar */}
          <div className="mt-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                  Ready for a quick 5-minute challenge?
                </div>
                <div className="text-[11px] text-stone-500">
                  Try the interactive N5 quiz or converse with Sensei AI.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/quiz"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                Take N5 Quiz
              </Link>
              <Link
                href="/tutor"
                className="px-4 py-2 rounded-xl bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs transition-colors"
              >
                Ask Sensei
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
