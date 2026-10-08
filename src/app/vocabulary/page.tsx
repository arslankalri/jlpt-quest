'use client';

import React, { useState, useMemo } from 'react';
import { n5Vocabulary } from '@/data/n5/vocabulary';
import { VocabCard } from '@/components/vocabulary/VocabCard';
import { BookOpen, Search, ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { useUserStore } from '@/lib/store/useUserStore';

const ITEMS_PER_PAGE_OPTIONS = [24, 48, 96];

export default function VocabularyPage() {
  const [search, setSearch] = useState('');
  const [filterPos, setFilterPos] = useState<string>('all');
  const [filterMastery, setFilterMastery] = useState<'all' | 'mastered' | 'unmastered'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  const vocabMastered = useUserStore((s) => s.progress.vocabMastered);

  // Filtered vocabulary
  const filtered = useMemo(() => {
    return n5Vocabulary.filter((v) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        v.japanese.toLowerCase().includes(q) ||
        v.kana.toLowerCase().includes(q) ||
        v.romaji.toLowerCase().includes(q) ||
        v.meanings.some((m) => m.toLowerCase().includes(q));

      const matchesPos =
        filterPos === 'all' ||
        (filterPos === 'verb' && v.partOfSpeech.startsWith('verb')) ||
        (filterPos === 'i-adjective' && v.partOfSpeech === 'i-adjective') ||
        (filterPos === 'na-adjective' && v.partOfSpeech === 'na-adjective') ||
        (filterPos === 'noun' && v.partOfSpeech === 'noun') ||
        (filterPos === 'adverb' && v.partOfSpeech === 'adverb') ||
        (filterPos === 'counter' && v.partOfSpeech === 'counter') ||
        (filterPos === 'suffix' && v.partOfSpeech === 'suffix') ||
        (filterPos === 'expression' && v.partOfSpeech === 'expression');

      const isMastered = vocabMastered.includes(v.id);
      const matchesMastery =
        filterMastery === 'all' ||
        (filterMastery === 'mastered' && isMastered) ||
        (filterMastery === 'unmastered' && !isMastered);

      return matchesSearch && matchesPos && matchesMastery;
    });
  }, [search, filterPos, filterMastery, vocabMastered]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filtered.length);
  const currentItems = useMemo(
    () => filtered.slice(startIndex, endIndex),
    [filtered, startIndex, endIndex]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handlePosChange = (pos: string) => {
    setFilterPos(pos);
    setCurrentPage(1);
  };

  const handleMasteryChange = (status: 'all' | 'mastered' | 'unmastered') => {
    setFilterMastery(status);
    setCurrentPage(1);
  };

  // Pos filter options with counts
  const posOptions = [
    { id: 'all', label: 'All (802)' },
    { id: 'noun', label: 'Nouns' },
    { id: 'verb', label: 'Verbs' },
    { id: 'i-adjective', label: 'い-Adjectives' },
    { id: 'na-adjective', label: 'な-Adjectives' },
    { id: 'adverb', label: 'Adverbs' },
    { id: 'counter', label: 'Counters' },
    { id: 'suffix', label: 'Suffixes' },
    { id: 'expression', label: 'Expressions & Greetings' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide backdrop-blur-xs w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete MLC JLPT N5 Official List</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3">
            <BookOpen className="w-8 h-8 md:w-9 md:h-9" />
            JLPT N5 Vocabulary Quest
          </h1>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl">
            Master all 802 official Meguro Language Center N5 words with natural furigana ruby, native audio, romaji, and authentic example sentences.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shrink-0">
          <div className="flex flex-col">
            <span className="text-xs uppercase font-semibold text-blue-200">Progress</span>
            <span className="text-2xl font-black">{vocabMastered.length} / 802</span>
            <span className="text-xs text-blue-200">
              {Math.round((vocabMastered.length / 802) * 100)}% Mastered
            </span>
          </div>
          <div className="w-14 h-14 rounded-full border-4 border-white/30 border-t-white flex items-center justify-center font-bold text-sm">
            {Math.round((vocabMastered.length / 802) * 100)}%
          </div>
        </div>
      </div>

      {/* Filter / Search Controls */}
      <div className="flex flex-col gap-4 bg-white dark:bg-stone-900 p-5 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs">
        {/* Search input + Items per page */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by Kanji, Kana (たべる), Romaji (taberu), or English (eat)..."
              className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all"
            />
            {search && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 whitespace-nowrap">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 focus:outline-none cursor-pointer"
            >
              {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} / page
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Part of Speech Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {posOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handlePosChange(opt.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterPos === opt.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Status Filter + Active Result Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>Filter Status:</span>
            <button
              onClick={() => handleMasteryChange('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                filterMastery === 'all'
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                  : 'hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleMasteryChange('mastered')}
              className={`px-2.5 py-1 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                filterMastery === 'mastered'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Mastered ({vocabMastered.length})
            </button>
            <button
              onClick={() => handleMasteryChange('unmastered')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                filterMastery === 'unmastered'
                  ? 'bg-blue-600 text-white'
                  : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30'
              }`}
            >
              To Learn ({802 - vocabMastered.length})
            </button>
          </div>

          <div className="font-medium text-stone-600 dark:text-stone-400">
            Showing {filtered.length === 0 ? 0 : startIndex + 1}–{endIndex} of {filtered.length} words
          </div>
        </div>
      </div>

      {/* Grid of Vocab Cards */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-12 text-center flex flex-col items-center gap-4">
          <BookOpen className="w-12 h-12 text-stone-300 dark:text-stone-700" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">No vocabulary found</h3>
            <p className="text-sm text-stone-500">
              No words match your current search query or active filter settings.
            </p>
          </div>
          <button
            onClick={() => {
              setSearch('');
              setFilterPos('all');
              setFilterMastery('all');
              setCurrentPage(1);
            }}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.map((vocab) => (
            <VocabCard key={vocab.id} vocab={vocab} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 mt-2">
          <div className="text-xs font-medium text-stone-500">
            Page {validPage} of {totalPages}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePageChange(Math.max(1, validPage - 1))}
              disabled={validPage === 1}
              className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page number buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - validPage) <= 2)
              .reduce<(number | string)[]>((acc, p, idx, arr) => {
                if (idx > 0 && p - (arr[idx - 1] as number) > 1) {
                  acc.push('...');
                }
                acc.push(p);
                return acc;
              }, [])
              .map((item, idx) =>
                typeof item === 'string' ? (
                  <span key={`dots-${idx}`} className="px-2 text-xs text-stone-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => handlePageChange(item)}
                    className={`min-w-8 h-8 px-2 rounded-xl text-xs font-bold transition-colors ${
                      validPage === item
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, validPage + 1))}
              disabled={validPage === totalPages}
              className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
