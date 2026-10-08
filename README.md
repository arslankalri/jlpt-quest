# 🌸 JLPT Quest (JLPT N5 Edition)

An interactive, modern, full-featured web application designed to help learners master the **Japanese Language Proficiency Test (JLPT N5)** through visual analogies, spaced repetition, authentic audio, and AI tutoring.

---

## ✨ Features

- **漢 105 N5 Kanji**:
  - Full coverage of all 103 kanji from the official JLPT list + textbook essentials (家, 音).
  - Full animated stroke order paths (SVG vector curves).
  - Interactive stroke writing canvas for active recall.
  - ELI5 mnemonics, kun'yomi, on'yomi, and real-life context tags.
- **📚 802 Meguro Language Center (MLC) Vocabulary Words**:
  - Complete official 802-word list extracted from Meguro Language Center.
  - High-performance paginated interface (24/48/96 items/page) with instant multi-attribute search.
  - Native browser audio speech synthesis (`SpeechSynthesisUtterance`).
  - Context-aware furigana ruby rendering with Hepburn romaji and English definitions.
  - Filter by part of speech (Nouns, Verbs, い-Adjectives, な-Adjectives, Counters, Suffixes, Expressions).
- **✏️ 45 Complete N5 Grammar Lessons**:
  - Comprehensive coverage of the full Genki I & Minna no Nihongo I curricula.
  - ELI5 analogies (e.g. *は is the spotlight on the topic, が is the pointing finger*).
  - Formulas, typical beginner pitfalls, and natural dialogues.
- **🗾 Real-Life Japanese Scenarios**:
  - Convenience Store (*Konbini*), Ramen Restaurant, Train Station, Hotel & Directions.
  - Cultural survival tips, essential phrases, and sample dialogues.
- **🔁 Spaced Repetition System (SRS)**:
  - SuperMemo SM-2 spaced repetition algorithm for long-term retention.
  - Dynamic mastery states: *New*, *Learning*, *Familiar*, *Mastered*.
  - Offline-first persistence via Zustand + `localStorage`.
- **🤖 Sensei AI Japanese Tutor**:
  - Powered by Google Gemini (`gemini-2.5-flash` / `@google/genai`).
  - Dual API key support: configure via `.env.local` or directly through the web UI settings drawer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (with `localStorage` persistence)
- **AI SDK**: [`@google/genai`](https://www.npmjs.com/package/@google/genai)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/arslankalri/jlpt-quest.git
cd jlpt-quest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your Google Gemini API key to `.env.local` (get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey)):

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

*(Note: You can also enter your Gemini API key directly in the web app UI on the Sensei AI page!)*

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
jlpt-quest/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/tutor/       # Gemini AI tutor endpoint
│   │   ├── kanji/           # Kanji browser & canvas practice
│   │   ├── vocabulary/      # 802 MLC vocabulary browser
│   │   ├── grammar/         # 35 grammar lessons
│   │   ├── reading/         # Reading comprehension passages
│   │   ├── real-life/       # Real-world Japan scenarios
│   │   ├── reviews/         # SRS review session
│   │   ├── quiz/            # Comprehensive challenge quiz
│   │   └── tutor/           # Sensei AI interactive chat
│   ├── components/          # Reusable UI components
│   ├── data/
│   │   └── n5/              # Modular N5 Kanji, Vocab, Grammar data
│   └── lib/
│       ├── furigana/        # Word-level ruby furigana resolver
│       ├── srs/             # SM-2 algorithm implementation
│       └── store/           # Zustand user progress store
├── .env.example             # Environment template
└── package.json
```

---

## 📄 License

MIT
