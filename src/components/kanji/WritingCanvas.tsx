'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Check, Undo2 } from 'lucide-react';

interface WritingCanvasProps {
  character: string;
  expectedStrokes: number;
  onSuccess?: () => void;
}

export const WritingCanvas: React.FC<WritingCanvasProps> = ({
  character,
  expectedStrokes,
  onSuccess,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeCount, setStrokeCount] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; isError?: boolean } | null>(null);
  const [history, setHistory] = useState<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas setup
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1c1917';

    // Save empty state
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save snapshot to history
    setHistory((prev) => [...prev, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    const newCount = strokeCount + 1;
    setStrokeCount(newCount);

    if (newCount === expectedStrokes) {
      setFeedback({ message: 'Nice job! Stroke count matches!' });
      if (onSuccess) onSuccess();
    } else if (newCount > expectedStrokes) {
      setFeedback({
        message: `Too many strokes! ${character} takes ${expectedStrokes} strokes.`,
        isError: true,
      });
    } else {
      setFeedback({ message: `Stroke ${newCount} complete. Keep going!` });
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeCount(0);
    setFeedback(null);
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  const undoLastStroke = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = history.slice(0, -1);
    const prevImage = newHistory[newHistory.length - 1];
    ctx.putImageData(prevImage, 0, 0);
    setHistory(newHistory);
    setStrokeCount((prev) => Math.max(0, prev - 1));
    setFeedback(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 rounded-2xl shadow-sm max-w-sm w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
          Handwriting Practice: <span className="text-red-600 dark:text-red-400 font-bold">{character}</span>
        </span>
        <span className="text-xs bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded text-stone-500 font-mono">
          {strokeCount} / {expectedStrokes} strokes
        </span>
      </div>

      <div className="relative border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-xl bg-stone-50 dark:bg-stone-950 overflow-hidden shadow-inner">
        {/* Ghost character guide */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
          <span className="text-9xl jp-serif font-black text-stone-950 dark:text-stone-50">
            {character}
          </span>
        </div>

        {/* Calligraphy guidelines */}
        <div className="absolute inset-0 pointer-events-none flex">
          <div className="w-1/2 h-full border-r border-dashed border-stone-300 dark:border-stone-800" />
          <div className="w-1/2 h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none flex flex-col">
          <div className="h-1/2 w-full border-b border-dashed border-stone-300 dark:border-stone-800" />
          <div className="h-1/2 w-full" />
        </div>

        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="relative z-10 cursor-crosshair touch-none"
        />
      </div>

      {feedback && (
        <div
          className={`text-xs px-3 py-1.5 rounded-full font-medium ${
            feedback.isError
              ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300'
              : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
          }`}
        >
          {feedback.message}
        </div>
      )}

      {/* Toolbar actions */}
      <div className="flex items-center gap-2 w-full justify-center">
        <button
          onClick={undoLastStroke}
          disabled={strokeCount === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold disabled:opacity-40 transition-colors"
        >
          <Undo2 className="w-4 h-4" /> Undo
        </button>
        <button
          onClick={clearCanvas}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors"
        >
          <Eraser className="w-4 h-4" /> Clear
        </button>
        {strokeCount === expectedStrokes && (
          <button
            onClick={() => {
              if (onSuccess) onSuccess();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Check className="w-4 h-4" /> Check
          </button>
        )}
      </div>
    </div>
  );
};
