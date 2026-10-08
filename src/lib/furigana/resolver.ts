// ============================================================
// JLPT Quest — Furigana Resolver
// Context-aware furigana for smart Japanese text rendering
// ============================================================

import type { RubySegment, AnnotatedSentence } from '@/data/types';

// ─── Known Word Reading Map ───────────────────────────────────

/**
 * Critical rule from spec section 6:
 * Furigana must use WORD-LEVEL readings, not character-by-character.
 * 今日 => きょう (NOT 今いま + 日ひ)
 * 日本語 => にほんご (NOT 日にち + 本ほん + 語ご)
 */
const WORD_READINGS: Record<string, string> = {
  // Time
  '今日': 'きょう',
  '明日': 'あした',
  '昨日': 'きのう',
  '毎日': 'まいにち',
  '今年': 'ことし',
  '来年': 'らいねん',
  '去年': 'きょねん',
  '今月': 'このつき',
  '来月': 'らいげつ',
  '先月': 'せんげつ',
  '今週': 'こんしゅう',
  '来週': 'らいしゅう',
  '先週': 'せんしゅう',
  // Countries & Places
  '日本': 'にほん',
  '日本語': 'にほんご',
  '日本人': 'にほんじん',
  '外国': 'がいこく',
  '外国人': 'がいこくじん',
  '中国': 'ちゅうごく',
  '韓国': 'かんこく',
  '米国': 'べいこく',
  '英国': 'えいこく',
  // People & Relations
  '先生': 'せんせい',
  '学生': 'がくせい',
  '友達': 'ともだち',
  '山田': 'やまだ',
  '田中': 'たなか',
  '山本': 'やまもと',
  '子ども': 'こども',
  // School & Study
  '学校': 'がっこう',
  '大学': 'だいがく',
  '小学校': 'しょうがっこう',
  '中学校': 'ちゅうがっこう',
  '高校': 'こうこう',
  '勉強': 'べんきょう',
  '試験': 'しけん',
  '本棚': 'ほんだな',
  // Food
  '食べ物': 'たべもの',
  '飲め物': 'のみもの',
  // Body
  '名前': 'なまえ',
  // Transport
  '電車': 'でんしゃ',
  '電車道': 'でんしゃどう',
  // Nature
  '天気': 'てんき',
  '富士山': 'ふじさん',
  // Numbers used in words
  '一月': 'いちがつ',
  '二月': 'にがつ',
  '三月': 'さんがつ',
  '四月': 'しがつ',
  '五月': 'ごがつ',
  '六月': 'ろくがつ',
  '七月': 'しちがつ',
  '八月': 'はちがつ',
  '九月': 'くがつ',
  '十月': 'じゅうがつ',
  '十一月': 'じゅういちがつ',
  '十二月': 'じゅうにがつ',
  '一日': 'いちにち',
  '二日': 'ふつか',
  '三日': 'みっか',
  '四日': 'よっか',
  '五日': 'いつか',
  '六日': 'むいか',
  '七日': 'なのか',
  '八日': 'ようか',
  '九日': 'ここのか',
  '十日': 'とおか',
  '二十日': 'はつか',
  '二十一日': 'にじゅういちにち',
  // Days of week
  '日曜日': 'にちようび',
  '月曜日': 'げつようび',
  '火曜日': 'かようび',
  '水曜日': 'すいようび',
  '木曜日': 'もくようび',
  '金曜日': 'きんようび',
  '土曜日': 'どようび',
  // Common verbs with kanji
  '勉強する': 'べんきょうする',
  // Parks & public places
  '公園': 'こうえん',
  '図書館': 'としょかん',
  '音楽': 'おんがく',
  // Work, Travel & Society
  '会社': 'かいしゃ',
  '社員': 'しゃいん',
  '会社員': 'かいしゃいん',
  '神社': 'じんじゃ',
  '会話': 'かいわ',
  '駅前': 'えきまえ',
  '駅員': 'えきいん',
  '東京駅': 'とうきょうえき',
  '北海道': 'ほっかいどう',
  '歩道': 'ほどう',
  '車道': 'しゃどう',
  '家族': 'かぞく',
  '友人': 'ゆうじん',
  'お父さん': 'おとうさん',
  'お母さん': 'おかあさん',
  '父母': 'ふぼ',
  '外出': 'がいしゅつ',
  '午前': 'ごぜん',
  '午後': 'ごご',
  '正午': 'しょうご',
  '安心': 'あんしん',
  '安全': 'あんぜん',
  '新聞': 'しんぶん',
  '新幹線': 'しんかんせん',
  '新年': 'しんねん',
  '古本': 'ふるほん',
  '中古': 'ちゅうこ',
  '社長': 'しゃちょう',
  '校長': 'こうちょう',
  '多分': 'たぶん',
  '少女': 'しょうじょ',
  '言葉': 'ことば',
  '大雨': 'おおあめ',
  '空港': 'くうこう',
  '空気': 'くうき',
  '花火': 'はなび',
  '花見': 'はなみ',
  '花屋': 'はなや',
  '魚屋': 'さかなや',
  '金魚': 'きんぎょ',
  // Daily Life & Grammar Contexts
  '毎朝': 'まいあさ',
  '写真': 'しゃしん',
  '漢字': 'かんじ',
  '料理': 'りょうり',
  '手料理': 'てりょうり',
  '歌': 'うた',
  '雲': 'くも',
  '春': 'はる',
  '夏': 'なつ',
  '秋': 'あき',
  '冬': 'ふゆ',
  '夏休み': 'なつやすみ',
  '傘': 'かさ',
  '服': 'ふく',
  '散歩': 'さんぽ',
  '心配': 'しんぱい',
  '運転': 'うんてん',
  '時計': 'とけい',
  '遊園地': 'ゆうえんち',
  '電話': 'でんわ',
  '電気': 'でんき',
  '部屋': 'へや',
  '病院': 'びょういん',
  '銀行': 'ぎんこう',
  '郵便局': 'ゆうびんきょく',
  '切手': 'きって',
  '辞書': 'じしょ',
  '靴': 'くつ',
  '玄関': 'げんかん',
  '机': 'つくえ',
  '椅子': 'いす',
  '映画': 'えいが',
  '旅行': 'りょこう',
  '掃除': 'そうじ',
  '荷物': 'にもつ',
  '妹': 'いもうと',
  '将来': 'しょうらい',
  '医者': 'いしゃ',
  '問題': 'もんだい',
  '留学': 'りゅうがく',
  '宿題': 'しゅくだい',
  '箸': 'はし',
  '晩ごはん': 'ばんごはん',
  '朝ごはん': 'あさごはん',
  'お昼ごはん': 'おひるごはん',
  // House
  '家': 'いえ',
};

// ─── Helper: is this character a kanji? ───────────────────────────

export function isKanji(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 0x4e00 && code <= 0x9fff) || // CJK Unified Ideographs
    (code >= 0x3400 && code <= 0x4dbf) || // CJK Extension A
    (code >= 0xf900 && code <= 0xfaff)    // CJK Compatibility
  );
}

export function isHiragana(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= 0x3040 && code <= 0x309f;
}

export function isKatakana(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= 0x30a0 && code <= 0x30ff;
}

export function containsKanji(text: string): boolean {
  return text.split('').some(isKanji);
}

// ─── Word-level Furigana Resolution ───────────────────────────

/**
 * Resolve furigana for a word.
 * Prefers word-level readings over character-level.
 */
export function resolveWordReading(word: string): string | undefined {
  // Direct lookup first (word-level is always preferred)
  if (WORD_READINGS[word]) {
    return WORD_READINGS[word];
  }
  // Try trimming trailing particles/okurigana for compound lookup
  // (simplified: just return undefined if not found)
  return undefined;
}

// ─── Text Segmentation ─────────────────────────────────────

/**
 * Segment a text into RubySegments for rendering.
 * Uses pre-annotated data if available, falls back to character-level splitting.
 */
export function segmentText(text: string, providedSegments?: RubySegment[]): RubySegment[] {
  if (providedSegments && providedSegments.length > 0) {
    return providedSegments;
  }

  // Fallback: simple character-level split — groups runs of kanji vs. non-kanji
  const segments: RubySegment[] = [];
  let current = '';
  let currentIsKanji = false;

  for (const char of text) {
    const charIsKanji = isKanji(char);
    if (charIsKanji !== currentIsKanji && current) {
      segments.push({ text: current });
      current = '';
    }
    current += char;
    currentIsKanji = charIsKanji;
  }

  if (current) {
    segments.push({ text: current });
  }

  return segments;
}

// ─── Furigana Visibility based on User Level ─────────────────────

/**
 * Determine whether furigana should be shown for a kanji ID.
 * Hides furigana for kanji the learner has mastered.
 */
export function shouldShowFurigana(
  text: string,
  masteredKanjiIds: string[],
  allKanjiMap: Record<string, string>, // char -> id
  showFurigana: boolean,
): boolean {
  if (!showFurigana) return false;
  if (!containsKanji(text)) return false;

  // If ALL kanji in the word are mastered, don\'t show furigana
  const kanjiChars = text.split('').filter(isKanji);
  if (kanjiChars.length === 0) return false;

  const allMastered = kanjiChars.every((char) => {
    const id = allKanjiMap[char];
    return id && masteredKanjiIds.includes(id);
  });

  return !allMastered;
}

// ─── Annotated Sentence Builder ─────────────────────────────────

/**
 * Build an AnnotatedSentence from raw text using the word reading map.
 * Used for content that doesn\'t have pre-annotated segments.
 * 
 * NOTE: For production, this would integrate a proper Japanese tokenizer
 * (kuromoji, Sudachi, etc.). For now we use a greedy longest-match approach.
 */
export function buildAnnotatedSentence(
  japanese: string,
  romaji: string,
  english: string,
): AnnotatedSentence {
  const segments = greedySegment(japanese);
  return { segments, romaji, english };
}

function greedySegment(text: string): RubySegment[] {
  const segments: RubySegment[] = [];
  let i = 0;

  while (i < text.length) {
    // Try longest match first (up to 6 chars)
    let matched = false;
    for (let len = Math.min(6, text.length - i); len >= 1; len--) {
      const slice = text.slice(i, i + len);
      const reading = WORD_READINGS[slice];
      if (reading && containsKanji(slice)) {
        segments.push({ text: slice, reading });
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Add single character as plain text
      const last = segments[segments.length - 1];
      if (last && !last.reading) {
        last.text += text[i];
      } else {
        segments.push({ text: text[i] });
      }
      i++;
    }
  }

  return segments;
}
