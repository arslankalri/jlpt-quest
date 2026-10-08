'use client';

import React from 'react';
import type { AnnotatedSentence, RubySegment } from '@/data/types';
import { useSettings, useUserStore } from '@/lib/store/useUserStore';
import { containsKanji, isKanji } from '@/lib/furigana/resolver';

interface FuriganaTextProps {
  sentence?: AnnotatedSentence;
  text?: string;
  className?: string;
  rubyClassName?: string;
  rtClassName?: string;
  forceShowFurigana?: boolean;
  forceShowRomaji?: boolean;
  forceShowEnglish?: boolean;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({
  sentence,
  text,
  className = '',
  rubyClassName = '',
  rtClassName = '',
  forceShowFurigana,
  forceShowRomaji,
  forceShowEnglish,
}) => {
  const settings = useSettings();
  const kanjiMastered = useUserStore((s) => s.progress.kanjiMastered);

  const showFurigana = forceShowFurigana ?? settings.showFurigana;
  const showRomaji = forceShowRomaji ?? settings.showRomaji;
  const showEnglish = forceShowEnglish ?? settings.showEnglish;

  // Simple string fallback if annotated sentence not provided
  if (!sentence && text) {
    return <span className={`jp ${className}`}>{text}</span>;
  }

  if (!sentence) return null;

  return (
    <div className={`flex flex-col gap-1 items-start ${className}`}>
      {/* Japanese line with Ruby */}
      <div className="furigana-text text-gray-900 dark:text-gray-100 flex flex-wrap items-baseline gap-x-0.5">
        {sentence.segments.map((seg, idx) => {
          if (!seg.reading || !showFurigana) {
            return (
              <span key={idx} className="inline-block">
                {seg.text}
              </span>
            );
          }

          return (
            <ruby key={idx} className={`inline-block px-0.5 ${rubyClassName}`}>
              {seg.text}
              <rt className={`text-[0.55em] font-medium text-red-600 dark:text-red-400 select-none ${rtClassName}`}>
                {seg.reading}
              </rt>
            </ruby>
          );
        })}
      </div>

      {/* Romaji */}
      {showRomaji && sentence.romaji && (
        <span className="text-xs text-amber-700 dark:text-amber-400 font-mono tracking-wide">
          {sentence.romaji}
        </span>
      )}

      {/* English translation */}
      {showEnglish && sentence.english && (
        <span className="text-sm text-gray-600 dark:text-gray-300 font-sans italic">
          {sentence.english}
        </span>
      )}
    </div>
  );
};
