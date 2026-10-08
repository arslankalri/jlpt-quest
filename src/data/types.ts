// ============================================================
// JLPT Quest — Core Data Types
// Designed to scale from N5 → N1 without architectural changes
// ============================================================

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export type VerificationStatus = 'verified' | 'needs_review' | 'draft';
export type MasteryStatus = 'new' | 'learning' | 'familiar' | 'mastered' | 'needs_review';
export type PartOfSpeech =
  | 'noun'
  | 'verb-u'
  | 'verb-ru'
  | 'verb-irregular'
  | 'i-adjective'
  | 'na-adjective'
  | 'adverb'
  | 'particle'
  | 'conjunction'
  | 'interjection'
  | 'counter'
  | 'expression'
  | 'prefix'
  | 'suffix';

// ─── Furigana / Ruby ─────────────────────────────────────────

/** A segment of text that may have furigana (ruby) annotation */
export interface RubySegment {
  text: string;       // The base text (kanji or kana)
  reading?: string;   // Furigana reading (only present for kanji segments)
}

/** A sentence broken into ruby segments for smart rendering */
export interface AnnotatedSentence {
  segments: RubySegment[];
  romaji: string;
  english: string;
}

// ─── Example Sentence ────────────────────────────────────────

export interface ExampleSentence {
  id: string;
  japanese: string;           // Full Japanese sentence
  annotated: AnnotatedSentence;
  level: JLPTLevel;
  source?: string;
  verificationStatus: VerificationStatus;
}

// ─── Kanji ───────────────────────────────────────────────────

export interface KanjiReading {
  reading: string;            // e.g. 'やす.む' (dot separates okurigana)
  type: 'onyomi' | 'kunyomi';
  romaji: string;
  isCommon: boolean;
}

export interface KanjiComponent {
  character: string;          // e.g. '人'
  meaning: string;            // e.g. 'person'
  role?: string;              // e.g. 'meaning component'
}

export interface KanjiStroke {
  path: string;               // SVG path data
  order: number;              // 1-indexed stroke order
}

export interface KanjiVocabItem {
  word: string;               // e.g. '休み'
  reading: string;            // e.g. 'やすみ'
  romaji: string;             // e.g. 'yasumi'
  meaning: string;            // e.g. 'rest, holiday'
  exampleSentence?: ExampleSentence;
}

export interface Kanji {
  id: string;
  character: string;          // e.g. '休'
  level: JLPTLevel;
  meaningEN: string;          // e.g. 'rest, vacation, holiday'
  meaningSimple: string;      // ELI5: e.g. 'taking a break'
  strokeCount: number;
  readings: KanjiReading[];
  strokes: KanjiStroke[];     // SVG path data for animation
  components: KanjiComponent[];
  mnemonic: string;           // e.g. 'A person leaning against a tree...'
  mnemonicNote: string;       // 'This is a memory aid, not etymology'
  realLifeContexts: string[]; // e.g. ['train station', 'work schedule']
  vocabulary: KanjiVocabItem[];
  exampleSentences: ExampleSentence[];
  tags: string[];
  source: string;
  verificationStatus: VerificationStatus;
  lastReviewed?: string;
  order: number;              // Learning order within level
}

// ─── Vocabulary ──────────────────────────────────────────────

export interface Vocabulary {
  id: string;
  japanese: string;           // Full word with kanji: '食べる'
  kana: string;               // Kana only: 'たべる'
  romaji: string;             // Romaji: 'taberu'
  meanings: string[];         // ['to eat']
  partOfSpeech: PartOfSpeech;
  level: JLPTLevel;
  kanjiIds: string[];         // IDs of kanji components
  exampleSentences: ExampleSentence[];
  relatedWords: string[];     // IDs of related vocab
  antonyms: string[];         // IDs of antonyms
  memoryTrick?: string;
  imageUrl?: string;
  tags: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  isCommon: boolean;
  source: string;
  verificationStatus: VerificationStatus;
  order: number;
}

// ─── Grammar ─────────────────────────────────────────────────

export interface GrammarExample {
  japanese: string;
  annotated: AnnotatedSentence;
  note?: string;
}

export interface GrammarPoint {
  id: string;
  pattern: string;            // e.g. 'Noun + は + ... + です'
  title: string;              // e.g. 'は (wa) — Topic Marker'
  titleShort: string;         // e.g. 'は'
  level: JLPTLevel;
  explanationSimple: string;  // ELI5 explanation
  explanationFull: string;    // More complete explanation
  analogy: string;            // 'Think of は like a spotlight...'
  structure: string;          // Pattern breakdown
  examples: GrammarExample[];
  commonMistake: string;
  commonMistakeExample?: GrammarExample;
  miniConversation?: GrammarExample[];
  relatedGrammar: string[];   // IDs of related grammar points
  tags: string[];
  source: string;
  verificationStatus: VerificationStatus;
  order: number;
}

// ─── Lesson / Course Structure ────────────────────────────────

export type LessonCardType =
  | 'intro'
  | 'kanji-reveal'
  | 'stroke-animation'
  | 'writing-practice'
  | 'mnemonic'
  | 'vocab-reveal'
  | 'example-sentence'
  | 'listen'
  | 'quiz-multiple-choice'
  | 'quiz-fill-blank'
  | 'quiz-sentence-order'
  | 'quiz-listen-choose'
  | 'summary';

export interface LessonCard {
  type: LessonCardType;
  title?: string;
  content?: string;
  targetId?: string;          // ID of kanji/vocab/grammar being shown
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  level: JLPTLevel;
  category: 'kanji' | 'vocabulary' | 'grammar' | 'reading' | 'listening' | 'culture';
  cards: LessonCard[];
  xpReward: number;
  estimatedMinutes: number;
  prerequisiteIds: string[];
  order: number;
}

// ─── Spaced Repetition ───────────────────────────────────────

export interface SRSCardState {
  itemId: string;
  itemType: 'kanji' | 'vocabulary' | 'grammar';
  status: MasteryStatus;
  interval: number;           // days until next review
  easeFactor: number;         // SM-2 ease factor (1.3 – 2.5)
  repetitions: number;        // number of successful reviews
  dueDate: string;            // ISO date string
  lastReview: string;
  correctCount: number;
  incorrectCount: number;
  avgResponseTime: number;    // ms
}

// ─── User Progress ───────────────────────────────────────────

export interface DailyMission {
  id: string;
  description: string;
  target: number;
  progress: number;
  xpReward: number;
  completed: boolean;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: string;
}

export interface UserProgress {
  userId: string;
  level: JLPTLevel;
  xp: number;
  streak: number;
  lastActiveDate: string;
  kanjiMastered: string[];
  vocabMastered: string[];
  grammarMastered: string[];
  lessonsCompleted: string[];
  srsCards: SRSCardState[];
  dailyMissions: DailyMission[];
  achievements: Achievement[];
  settings: UserSettings;
}

// ─── Settings ────────────────────────────────────────────────

export type DisplayMode =
  | 'japanese-only'
  | 'japanese-furigana'
  | 'japanese-romaji'
  | 'japanese-furigana-english'
  | 'japanese-furigana-romaji-english';

export interface UserSettings {
  displayMode: DisplayMode;
  showFurigana: boolean;
  showRomaji: boolean;
  showEnglish: boolean;
  textSize: 'small' | 'medium' | 'large';
  autoPlayAudio: boolean;
  strokeAnimationSpeed: 0.5 | 1 | 1.5 | 2;
  darkMode: boolean;
  dailyGoalMinutes: number;
}

// ─── Real-Life Japan ─────────────────────────────────────────

export interface RealLifeScenario {
  id: string;
  title: string;
  titleJP: string;
  category: string;
  icon: string;
  description: string;
  vocabulary: Vocabulary[];
  phrases: ExampleSentence[];
  miniDialogue: ExampleSentence[];
  level: JLPTLevel;
  order: number;
}

// ─── Quiz ─────────────────────────────────────────────────────

export type QuizType =
  | 'recognition'
  | 'reading'
  | 'kanji-select'
  | 'listen-choose'
  | 'sentence-order'
  | 'fill-blank'
  | 'translate-to-english'
  | 'translate-to-japanese'
  | 'context-choice'
  | 'conversation';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  level: JLPTLevel;
  prompt: string;
  promptJP?: string;
  promptAudio?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  relatedItemId?: string;
  relatedItemType?: 'kanji' | 'vocabulary' | 'grammar';
}

// ─── Reading Passage ─────────────────────────────────────────

export interface ReadingPassage {
  id: string;
  title: string;
  titleJP: string;
  level: JLPTLevel;
  text: string;                 // Full text
  annotatedText: AnnotatedSentence[];
  vocabulary: string[];         // Vocab IDs used
  questions: QuizQuestion[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  source: string;
  verificationStatus: VerificationStatus;
}

// ─── JLPT Level Config ────────────────────────────────────────

export interface LevelConfig {
  level: JLPTLevel;
  name: string;
  description: string;
  kanjiCount: number;
  vocabCount: number;
  grammarCount: number;
  isUnlocked: boolean;
  color: string;
  bgColor: string;
}

export const LEVEL_CONFIGS: LevelConfig[] = [
  {
    level: 'N5',
    name: 'N5 Beginner',
    description: 'Start your Japanese journey',
    kanjiCount: 80,
    vocabCount: 800,
    grammarCount: 65,
    isUnlocked: true,
    color: '#10b981',   // green
    bgColor: '#d1fae5',
  },
  {
    level: 'N4',
    name: 'N4 Elementary',
    description: 'Build on the basics',
    kanjiCount: 300,
    vocabCount: 1500,
    grammarCount: 100,
    isUnlocked: false,
    color: '#3b82f6',   // blue
    bgColor: '#dbeafe',
  },
  {
    level: 'N3',
    name: 'N3 Intermediate',
    description: 'Bridge to fluency',
    kanjiCount: 650,
    vocabCount: 3000,
    grammarCount: 180,
    isUnlocked: false,
    color: '#8b5cf6',   // purple
    bgColor: '#ede9fe',
  },
  {
    level: 'N2',
    name: 'N2 Upper Intermediate',
    description: 'Near professional level',
    kanjiCount: 1000,
    vocabCount: 6000,
    grammarCount: 220,
    isUnlocked: false,
    color: '#f59e0b',   // amber
    bgColor: '#fef3c7',
  },
  {
    level: 'N1',
    name: 'N1 Advanced',
    description: 'Full Japanese mastery',
    kanjiCount: 2000,
    vocabCount: 10000,
    grammarCount: 280,
    isUnlocked: false,
    color: '#ef4444',   // red
    bgColor: '#fee2e2',
  },
];
