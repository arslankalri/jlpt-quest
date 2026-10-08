'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { KanjiStroke } from '@/data/types';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface StrokeAnimationProps {
  strokes: KanjiStroke[];
  character: string;
  size?: number;
  speed?: number; // 0.5, 1, 1.5, 2
  onComplete?: () => void;
}

export const StrokeAnimation: React.FC<StrokeAnimationProps> = ({
  strokes,
  character,
  size = 200,
  speed = 1,
  onComplete,
}) => {
  const [currentStroke, setCurrentStroke] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(speed);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Stroke color styling for differentiation
  const strokeColors = [
    '#e63946', // Primary Red
    '#2a9d8f', // Teal
    '#e76f51', // Coral
    '#457b9d', // Blue
    '#f4a261', // Orange
    '#9d4edd', // Purple
  ];

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalMs = 1000 / playbackSpeed;
    timerRef.current = setInterval(() => {
      setCurrentStroke((prev) => {
        if (prev >= strokes.length) {
          if (onComplete) onComplete();
          return prev; // hold finished state
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, strokes.length, onComplete]);

  const handlePlayPause = () => {
    if (currentStroke >= strokes.length) {
      setCurrentStroke(1);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setCurrentStroke(0);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 rounded-2xl shadow-sm">
      <div className="relative border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-xl bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-2">
        {/* Grid guidelines for authentic calligraphy proportion */}
        <div className="absolute inset-0 pointer-events-none flex">
          <div className="w-1/2 h-full border-r border-stone-200 dark:border-stone-800" />
          <div className="w-1/2 h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none flex flex-col">
          <div className="h-1/2 w-full border-b border-stone-200 dark:border-stone-800" />
          <div className="h-1/2 w-full" />
        </div>

        {/* SVG Kanji Stroke Canvas */}
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className="relative z-10"
        >
          {/* Background outline/ghost character */}
          <text
            x="50"
            y="75"
            textAnchor="middle"
            className="text-[68px] font-bold fill-stone-200 dark:fill-stone-800 select-none pointer-events-none jp-serif"
          >
            {character}
          </text>

          {/* Render individual strokes up to current index */}
          {strokes.map((stroke, index) => {
            const isVisible = index < currentStroke;
            if (!isVisible) return null;

            const strokeColor = strokeColors[index % strokeColors.length];
            const isLatest = index === currentStroke - 1;

            return (
              <g key={stroke.order}>
                <path
                  d={stroke.path}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isLatest ? 'transition-all duration-300' : ''}
                />
                {/* Stroke number badge at starting point */}
                <circle
                  cx={stroke.path.split(' ')[1]?.split(',')[0] || 50}
                  cy={stroke.path.split(' ')[1]?.split(',')[1] || 50}
                  r="3.5"
                  fill="#ffffff"
                  stroke={strokeColor}
                  strokeWidth="1.5"
                />
                <text
                  x={stroke.path.split(' ')[1]?.split(',')[0] || 50}
                  y={(Number(stroke.path.split(' ')[1]?.split(',')[1]) || 50) + 1.2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="3"
                  fontWeight="bold"
                  fill={strokeColor}
                >
                  {stroke.order}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Stroke counter indicator */}
      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 font-medium">
        <span>Stroke:</span>
        <span className="font-bold text-red-600 dark:text-red-400 text-base">
          {Math.min(currentStroke, strokes.length)}
        </span>
        <span>/ {strokes.length}</span>
      </div>

      {/* Animation Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePlayPause}
          className="p-2.5 rounded-full bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-950 dark:hover:bg-red-900 transition-colors"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying && currentStroke < strokes.length ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={handleReset}
          className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-300 transition-colors"
          title="Replay"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {/* Speed toggle pills */}
        <div className="flex bg-stone-100 dark:bg-stone-800 p-1 rounded-full ml-2 text-xs font-semibold">
          {[0.5, 1, 1.5].map((s) => (
            <button
              key={s}
              onClick={() => setPlaybackSpeed(s)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                playbackSpeed === s
                  ? 'bg-white dark:bg-stone-900 text-red-600 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
