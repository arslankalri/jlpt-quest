// ============================================================
// JLPT Quest — N5 Vocabulary Data (Full 802 Words)
// Source: MLC Meguro Language Center JLPT N5 Vocabulary List
// Verification: complete 802 words with furigana, romaji & audio
// ============================================================

import type { Vocabulary } from '../types';
import { n5VocabBatch1 } from './vocabBatch1';
import { n5VocabBatch2 } from './vocabBatch2';
import { n5VocabBatch3 } from './vocabBatch3';
import { n5VocabBatch4 } from './vocabBatch4';
import { n5VocabBatch5 } from './vocabBatch5';
import { n5VocabBatch6 } from './vocabBatch6';
import { n5VocabBatch7 } from './vocabBatch7';
import { n5VocabBatch8 } from './vocabBatch8';

export const n5Vocabulary: Vocabulary[] = [
  ...n5VocabBatch1,
  ...n5VocabBatch2,
  ...n5VocabBatch3,
  ...n5VocabBatch4,
  ...n5VocabBatch5,
  ...n5VocabBatch6,
  ...n5VocabBatch7,
  ...n5VocabBatch8,
];

export const getVocabById = (id: string): Vocabulary | undefined =>
  n5Vocabulary.find(v => v.id === id);

export const getVocabByWord = (word: string): Vocabulary | undefined =>
  n5Vocabulary.find(v => v.japanese === word || v.kana === word);
