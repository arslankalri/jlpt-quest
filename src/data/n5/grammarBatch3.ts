// ============================================================
// JLPT Quest — N5 Grammar Data (Batch 3: Points 26–35)
// Source: JLPT-aligned references
// Verification: manually curated
// ============================================================

import type { GrammarPoint } from '../types';

export const n5GrammarBatch3: GrammarPoint[] = [
  {
    id: 'n5-g-026',
    pattern: 'Verb1[た-form]り + Verb2[た-form]り + します',
    title: '〜たり〜たりします (tari tari shimasu) — Doing Things Like A and B',
    titleShort: '〜たり〜たり',
    level: 'N5',
    explanationSimple:
      'Want to list a few examples of what you did without listing every single thing? Use 〜たり〜たりします!\n\nほんを よんだり、おんがくを きいたり しました = I did things like reading books and listening to music.',
    explanationFull:
      '〜たり〜たりする lists representative activities from a broader set of actions. Unlike 〜て, which implies a chronological sequence, 〜たり implies non-exhaustive listing in no particular order. The tense is determined by the final する/します verb.',
    analogy:
      'Think of opening a photo album and pointing at two sample snapshots from your weekend, rather than showing a full video recording.',
    structure: 'Verb1[た-form]り + Verb2[た-form]り + します / しました',
    examples: [
      {
        japanese: '休みの日は、掃除をしたり買い物をしたりします。',
        annotated: {
          segments: [
            { text: '休', reading: 'やす' },
            { text: 'みの' },
            { text: '日', reading: 'ひ' },
            { text: 'は、' },
            { text: '掃除', reading: 'そうじ' },
            { text: 'をしたり' },
            { text: '買い物', reading: 'かいもの' },
            { text: 'をしたりします。' },
          ],
          romaji: 'Yasumi no hi wa, souji wo shitari kaimono wo shitari shimasu.',
          english: 'On days off, I do things like cleaning and shopping.',
        },
      },
      {
        japanese: '昨日はテレビを見たり本を読んだりしました。',
        annotated: {
          segments: [
            { text: '昨日', reading: 'きのう' },
            { text: 'はテレビを' },
            { text: '見', reading: 'み' },
            { text: 'たり' },
            { text: '本', reading: 'ほん' },
            { text: 'を' },
            { text: '読', reading: 'よ' },
            { text: 'んだりしました。' },
          ],
          romaji: 'Kinou wa terebi wo mitari hon wo yondari shimashita.',
          english: 'Yesterday I did things like watching TV and reading books.',
        },
      },
    ],
    commonMistake:
      'Do not forget the final します / しました! A sentence cannot end on 〜たり alone in formal Japanese.',
    miniConversation: [
      {
        japanese: 'A: 日曜日は何をしましたか？',
        annotated: {
          segments: [
            { text: 'A: 日曜日', reading: 'にちようび' },
            { text: 'は' },
            { text: '何', reading: 'なに' },
            { text: 'をしましたか？' },
          ],
          romaji: 'A: Nichiyoubi wa nani wo shimashita ka?',
          english: 'A: What did you do on Sunday?',
        },
      },
      {
        japanese: 'B: 散歩したり映画を見たりしました。',
        annotated: {
          segments: [
            { text: 'B: 散歩', reading: 'さんぽ' },
            { text: 'したり' },
            { text: '映画', reading: 'えいが' },
            { text: 'を' },
            { text: '見', reading: 'み' },
            { text: 'たりしました。' },
          ],
          romaji: 'B: Sanpo shitari eiga wo mitari shimashita.',
          english: 'B: I did things like taking a walk and watching a movie.',
        },
      },
    ],
    relatedGrammar: ['n5-g-007'],
    tags: ['listing', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 26,
  },
  {
    id: 'n5-g-027',
    pattern: 'Noun/な-adj + になる / い-adj[〜く] + なる',
    title: '〜になる / 〜くなる (ni naru / ku naru) — To Become / Turn Into',
    titleShort: '〜になる / 〜くなる',
    level: 'N5',
    explanationSimple:
      'To say something CHANGES or BECOMES something else, use なる (to become)!\n\nさむい (cold) → さむくなります (it becomes cold / gets cold).\nいしゃ (doctor) → いしゃになります (becomes a doctor).',
    explanationFull:
      'なる denotes a change of state. For い-adjectives, drop the final い and append くなる. For な-adjectives and nouns, append になる.',
    analogy:
      'Think of a caterpillar turning into a butterfly. It transforms and BECOMES (なる).',
    structure: 'い-adj: [Stem] + くなる  |  な-adj / Noun: [Word] + になる',
    examples: [
      {
        japanese: '暗くなりましたから、帰りましょう。',
        annotated: {
          segments: [
            { text: '暗', reading: 'くら' },
            { text: 'くなりましたから、' },
            { text: '帰', reading: 'かえ' },
            { text: 'りましょう。' },
          ],
          romaji: 'Kuraku narimashita kara, kaerimashou.',
          english: 'It has gotten dark, so let\'s head home.',
        },
      },
      {
        japanese: '将来、医者になりたいです。',
        annotated: {
          segments: [
            { text: '将来', reading: 'しょうらい' },
            { text: '、' },
            { text: '医者', reading: 'いしゃ' },
            { text: 'になりたいです。' },
          ],
          romaji: 'Shourai, isha ni naritai desu.',
          english: 'I want to become a doctor in the future.',
        },
      },
    ],
    commonMistake:
      'Do not say 医者をなる or 寒いにる. Remember: い-adjective drops い for く, nouns take に!',
    relatedGrammar: ['n5-g-006'],
    tags: ['change', 'transformation', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 27,
  },
  {
    id: 'n5-g-028',
    pattern: 'Verb[ます-stem] / Adj[stem] + すぎる',
    title: '〜すぎる (sugiru) — Too Much / Excessive',
    titleShort: '〜すぎる',
    level: 'N5',
    explanationSimple:
      'Did you eat too much? Or is something too expensive? Drop ます or い and add すぎる!\n\nたべます → たべすぎる (eat too much / overeat).\nたかい → たかすぎる (too expensive!).',
    explanationFull:
      '〜すぎる indicates that an action or state has exceeded normal bounds or desirable limits. It acts as an ichidan (ru) verb and conjugates as すぎます, すぎた, etc.',
    analogy:
      'Think of filling a cup with juice until it overflows over the rim. That\'s すぎる!',
    structure: 'Verb[stem] + すぎる  |  い-adj[drop い] + すぎる  |  な-adj[stem] + すぎる',
    examples: [
      {
        japanese: '昨日、お酒を飲みすぎました。',
        annotated: {
          segments: [
            { text: '昨日', reading: 'きのう' },
            { text: '、お' },
            { text: '酒', reading: 'さけ' },
            { text: 'を' },
            { text: '飲', reading: 'の' },
            { text: 'みすぎました。' },
          ],
          romaji: 'Kinou, osake wo nomisugimashita.',
          english: 'Yesterday, I drank too much alcohol.',
        },
      },
      {
        japanese: 'この問題は難しすぎます。',
        annotated: {
          segments: [
            { text: 'この' },
            { text: '問題', reading: 'もんだい' },
            { text: 'は' },
            { text: '難', reading: 'むずか' },
            { text: 'しすぎます。' },
          ],
          romaji: 'Kono mondai wa muzukashisugimasu.',
          english: 'This problem is too difficult.',
        },
      },
    ],
    commonMistake:
      'Do not keep the い in い-adjectives! Say 高すぎる, NOT 高いすぎる.',
    relatedGrammar: ['n5-g-006'],
    tags: ['excess', 'verb-form', 'adjective', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 28,
  },
  {
    id: 'n5-g-029',
    pattern: 'Verb[stem] / Adj[stem] + そうです (conjecture)',
    title: '〜そうです (sou desu) — Looks Like / Appears To Be',
    titleShort: '〜そうです (Conjecture)',
    level: 'N5',
    explanationSimple:
      'When something LOOKS like it\'s about to happen or looks a certain way just by looking at it, use そうです!\n\nあめが ふりそうです = It looks like it\'s about to rain!\nおいしそうです = It looks delicious!',
    explanationFull:
      '〜そうです expresses visual conjecture based on immediate impression or direct observation. With verbs, it means "looks about to do". With adjectives, it means "looks [adjective]". Exception: いい (good) becomes よさそう.',
    analogy:
      'Looking through a window and seeing dark storm clouds: you predict "It looks like rain!" without looking at a weather report.',
    structure: 'Verb[ます-stem] + そうです  |  い-adj[drop い] + そうです  |  な-adj[stem] + そうです',
    examples: [
      {
        japanese: '今にも雨が降りそうです。',
        annotated: {
          segments: [
            { text: '今', reading: 'いま' },
            { text: 'にも' },
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'りそうです。' },
          ],
          romaji: 'Ima ni mo ame ga furisou desu.',
          english: 'It looks like it will start raining at any moment.',
        },
      },
      {
        japanese: 'このケーキはとてもおいしそうです！',
        annotated: {
          segments: [
            { text: 'このケーキはとてもおいしそうです！' },
          ],
          romaji: 'Kono keeki wa totemo oishisou desu!',
          english: 'This cake looks very delicious!',
        },
      },
    ],
    commonMistake:
      'Drop い before adding そうです! おいしいそうです means "I heard it is delicious" (hearsay), whereas おいしそうです means "It looks delicious" (conjecture).',
    relatedGrammar: ['n5-g-001'],
    tags: ['conjecture', 'perception', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 29,
  },
  {
    id: 'n5-g-030',
    pattern: 'Verb[plain form] + つもりです',
    title: '〜つもりです (tsumori desu) — Plan To / Intend To',
    titleShort: '〜つもりです',
    level: 'N5',
    explanationSimple:
      'To state your PLAN or INTENTION to do something, add つもりです after the dictionary form of the verb!\n\nらいねん にほんへ いく つもりです = I plan to go to Japan next year.',
    explanationFull:
      '〜つもりです expresses the speaker\'s premeditated intention or plan. It connects to the plain affirmative (dictionary form) or plain negative (ない-form) of verbs.',
    analogy:
      'Think of writing an item in your calendar or planner: this is your intention to do it.',
    structure: 'Verb[dictionary form] + つもりです (plan to)  |  Verb[ない-form] + つもりです (plan not to)',
    examples: [
      {
        japanese: '来年、日本へ留学するつもりです。',
        annotated: {
          segments: [
            { text: '来年', reading: 'らいねん' },
            { text: '、' },
            { text: '日本', reading: 'にほん' },
            { text: 'へ' },
            { text: '留学', reading: 'りゅうがく' },
            { text: 'するつもりです。' },
          ],
          romaji: 'Rainen, Nihon e ryuugaku suru tsumori desu.',
          english: 'I intend to study abroad in Japan next year.',
        },
      },
      {
        japanese: '明日はどこにも行かないつもりです。',
        annotated: {
          segments: [
            { text: '明日', reading: 'あした' },
            { text: 'はどこにも' },
            { text: '行', reading: 'い' },
            { text: 'かないつもりです。' },
          ],
          romaji: 'Ashita wa doko ni mo ikanai tsumori desu.',
          english: 'I plan not to go anywhere tomorrow.',
        },
      },
    ],
    commonMistake:
      'Do not use つもりです to ask a superior about their plans, as it can sound presumptuous. Use passive/honorific forms or 予定 (yotei) instead.',
    relatedGrammar: ['n5-g-006'],
    tags: ['intention', 'plans', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 30,
  },
  {
    id: 'n5-g-031',
    pattern: 'Plain form + かもしれません',
    title: '〜かもしれません (kamoshiremasen) — Might / Maybe / Perhaps',
    titleShort: '〜かもしれません',
    level: 'N5',
    explanationSimple:
      'When you are not 100% sure, but something MIGHT happen, add かもしれません!\n\nあしたは あめが ふる かもしれません = It might rain tomorrow.',
    explanationFull:
      '〜かもしれません expresses a possibility of roughly 50% or lower ("might, may, perhaps"). In casual speech, it is often shortened to 〜かもしれない or 〜かも.',
    analogy:
      'Tossing a coin in the air—heads it happens, tails it doesn\'t. That 50/50 chance is かもしれません.',
    structure: 'Verb[plain] / い-adj / な-adj[stem] / Noun + かもしれません',
    examples: [
      {
        japanese: '明日は雨が降るかもしれません。',
        annotated: {
          segments: [
            { text: '明日', reading: 'あした' },
            { text: 'は' },
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'るかもしれません。' },
          ],
          romaji: 'Ashita wa ame ga furu kamoshiremasen.',
          english: 'It might rain tomorrow.',
        },
      },
      {
        japanese: '電車が遅れるかもしれません。',
        annotated: {
          segments: [
            { text: '電車', reading: 'でんしゃ' },
            { text: 'が' },
            { text: '遅', reading: 'おく' },
            { text: 'れるかもしれません。' },
          ],
          romaji: 'Densha ga okureru kamoshiremasen.',
          english: 'The train might be delayed.',
        },
      },
    ],
    commonMistake:
      'Do not put だ after nouns or な-adjectives before かもしれません! Say 雨かもしれません, NOT 雨だかもしれません.',
    relatedGrammar: ['n5-g-001'],
    tags: ['possibility', 'modality', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 31,
  },
  {
    id: 'n5-g-032',
    pattern: 'Verb[た-form] ほうがいいです / Verb[ない-form] ほうがいいです',
    title: '〜ほうがいいです (hou ga ii desu) — Had Better / Should',
    titleShort: '〜ほうがいいです',
    level: 'N5',
    explanationSimple:
      'Giving advice? Use:\n- [た-form] ほうがいいです = You SHOULD do it.\n- [ない-form] ほうがいいです = You SHOULD NOT do it.\n\nくすりを のんだ ほうがいいです = You should take medicine.',
    explanationFull:
      '〜ほうがいいです gives strong advice or recommendations ("it would be better if you..."). When advising someone TO DO something, use the past た-form. When advising NOT to do something, use the negative ない-form.',
    analogy:
      'Think of pointing at a fork in the road and telling your friend: "Take this path, it\'s much safer!"',
    structure: 'Verb[た-form] + ほうがいいです  |  Verb[ない-form] + ほうがいいです',
    examples: [
      {
        japanese: '早く寝たほうがいいですよ。',
        annotated: {
          segments: [
            { text: '早', reading: 'はや' },
            { text: 'く' },
            { text: '寝', reading: 'ね' },
            { text: 'たほうがいいですよ。' },
          ],
          romaji: 'Hayaku neta hou ga ii desu yo.',
          english: 'You had better go to sleep early.',
        },
      },
      {
        japanese: '甘い物を食べすぎないほうがいいです。',
        annotated: {
          segments: [
            { text: '甘', reading: 'あま' },
            { text: 'い' },
            { text: '物', reading: 'もの' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べすぎないほうがいいです。' },
          ],
          romaji: 'Amai mono wo tabesuginai hou ga ii desu.',
          english: 'You should not eat too many sweets.',
        },
      },
    ],
    commonMistake:
      'Beginners often try to use the present form (寝るほうがいい), but the past た-form (寝たほうがいい) is standard and idiomatic in Japanese for positive advice.',
    relatedGrammar: ['n5-g-022'],
    tags: ['advice', 'recommendation', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 32,
  },
  {
    id: 'n5-g-033',
    pattern: 'Plain form + でしょう / だろう',
    title: '〜でしょう (deshou) — Probably / Right?',
    titleShort: '〜でしょう',
    level: 'N5',
    explanationSimple:
      'Use でしょう to make a gentle prediction ("probably") or ask for agreement with rising intonation ("right?").\n\nあしたは はれるでしょう = Tomorrow will probably be sunny.\nおいしいでしょう？ = It\'s delicious, isn\'t it?',
    explanationFull:
      'でしょう (casual だろう) expresses probability ("probably, I suppose"). With rising intonation (でしょう？), it seeks confirmation or agreement from the listener, similar to English tag questions.',
    analogy:
      'Weather forecasters on Japanese TV constantly use でしょう when reporting tomorrow\'s forecast!',
    structure: 'Verb[plain] / い-adj / な-adj[stem] / Noun + でしょう',
    examples: [
      {
        japanese: '明日はいい天気になるでしょう。',
        annotated: {
          segments: [
            { text: '明日', reading: 'あした' },
            { text: 'はいい' },
            { text: '天気', reading: 'てんき' },
            { text: 'になるでしょう。' },
          ],
          romaji: 'Ashita wa ii tenki ni naru deshou.',
          english: 'Tomorrow will probably be good weather.',
        },
      },
      {
        japanese: 'この映画は面白かったでしょう？',
        annotated: {
          segments: [
            { text: 'この' },
            { text: '映画', reading: 'えいが' },
            { text: 'は' },
            { text: '面白', reading: 'おもしろ' },
            { text: 'かったでしょう？' },
          ],
          romaji: 'Kono eiga wa omoshirokatta deshou?',
          english: 'This movie was interesting, wasn\'t it?',
        },
      },
    ],
    commonMistake:
      'Do not include だ with nouns or な-adjectives before でしょう (say 学生でしょう, not 学生だでしょう).',
    relatedGrammar: ['n5-g-001'],
    tags: ['conjecture', 'confirmation', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 33,
  },
  {
    id: 'n5-g-034',
    pattern: 'Verb[ます-stem] + 方 (かた)',
    title: '〜方 (kata) — How to Do / Way of Doing',
    titleShort: '〜方 (かた)',
    level: 'N5',
    explanationSimple:
      'Want to say "how to do" something? Take the verb, drop ます, and add かた (方)!\n\nつかいます (to use) → つかいかた (how to use / way of using)!\nよみます (to read) → よみかた (how to read).',
    explanationFull:
      'When 方 (かた) attaches to the ます-stem of a verb, it creates a noun meaning "way of doing" or "how to [verb]". Note that particles before the verb change to の: [Noun] を 使う → [Noun] の 使い方.',
    analogy:
      'Think of an instruction manual or recipe title: "HOW TO COOK", "HOW TO USE". That is 方 (かた)!',
    structure: 'Verb[ます-stem] + 方 (かた)  |  Object + の + Verb[stem] + 方',
    examples: [
      {
        japanese: 'この漢字の読み方を教えてください。',
        annotated: {
          segments: [
            { text: 'この' },
            { text: '漢字', reading: 'かんじ' },
            { text: 'の' },
            { text: '読', reading: 'よ' },
            { text: 'み' },
            { text: '方', reading: 'かた' },
            { text: 'を' },
            { text: '教', reading: 'おし' },
            { text: 'えてください。' },
          ],
          romaji: 'Kono kanji no yomikata wo oshiete kudasai.',
          english: 'Please tell me how to read this kanji.',
        },
      },
      {
        japanese: '箸の使い方を知っていますか？',
        annotated: {
          segments: [
            { text: '箸', reading: 'はし' },
            { text: 'の' },
            { text: '使', reading: 'つか' },
            { text: 'い' },
            { text: '方', reading: 'かた' },
            { text: 'を' },
            { text: '知', reading: 'し' },
            { text: 'っていますか？' },
          ],
          romaji: 'Hashi no tsukaikata wo shitte imasu ka?',
          english: 'Do you know how to use chopsticks?',
        },
      },
    ],
    commonMistake:
      'Remember that the original direct object takes の, NOT を! It is 漢字の読み方, not 漢字を読み方.',
    relatedGrammar: ['n5-g-004'],
    tags: ['noun-forming', 'practical', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 34,
  },
  {
    id: 'n5-g-035',
    pattern: 'Verb1[ます-stem] + ながら + Verb2',
    title: '〜ながら (nagara) — While Doing',
    titleShort: '〜ながら',
    level: 'N5',
    explanationSimple:
      'Doing TWO things at the exact same time? Drop ます from the first action and add ながら!\n\nおんがくを ききながら、べんきょうします = I study WHILE listening to music.',
    explanationFull:
      '〜ながら connects two actions performed simultaneously by the SAME subject. The primary action is placed in the second clause (Verb 2), while the background secondary action is attached to ながら.',
    analogy:
      'Like juggling two balls at once: Action 1 in your left hand WHILE you do Action 2 in your right hand!',
    structure: 'Verb1[ます-stem] + ながら、+ Verb2',
    examples: [
      {
        japanese: '音楽を聞きながら宿題をします。',
        annotated: {
          segments: [
            { text: '音楽', reading: 'おんがく' },
            { text: 'を' },
            { text: '聞', reading: 'き' },
            { text: 'きながら' },
            { text: '宿題', reading: 'しゅくだい' },
            { text: 'をします。' },
          ],
          romaji: 'Ongaku wo kikinagara shukudai wo shimasu.',
          english: 'I do my homework while listening to music.',
        },
      },
      {
        japanese: '歩きながらスマホを見ないでください。',
        annotated: {
          segments: [
            { text: '歩', reading: 'ある' },
            { text: 'きながらスマホを' },
            { text: '見', reading: 'み' },
            { text: 'ないでください。' },
          ],
          romaji: 'Arukinagara sumaho wo minaide kudasai.',
          english: 'Please do not look at your smartphone while walking.',
        },
        note: 'Super common warning announcement in Japanese train stations!',
      },
    ],
    commonMistake:
      'Both actions must be done by the same person! You cannot use ながら if person A does one thing while person B does another (use 間/あいだ instead).',
    relatedGrammar: ['n5-g-018', 'n5-g-019'],
    tags: ['simultaneous', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 35,
  },
];
