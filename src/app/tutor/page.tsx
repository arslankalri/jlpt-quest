'use client';

import React from 'react';
import { AITutorChat } from '@/components/tutor/AITutorChat';
import { Bot } from 'lucide-react';

export default function TutorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Bot className="w-7 h-7 text-red-600" />
          Sensei AI Japanese Tutor
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Ask questions, get 5-year-old style analogies, sentence corrections, and N5 practice dialogues.
        </p>
      </div>

      <div className="py-2">
        <AITutorChat />
      </div>
    </div>
  );
}
