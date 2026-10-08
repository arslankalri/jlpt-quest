// ============================================================
// JLPT Quest — N5 Grammar Data (Batch 2: Points 18–25)
// Source: JLPT-aligned references
// Verification: manually curated
// ============================================================

import type { GrammarPoint } from '../types';

export const n5GrammarBatch2: GrammarPoint[] = [
  {
    id: 'n5-g-018',
    pattern: 'Verb[て-form] + います',
    title: '〜ています (te imasu) — Ongoing Action & Continuous State',
    titleShort: '〜ています',
    level: 'N5',
    explanationSimple:
      'To say you are DOING something right now (like English "-ing"), or that something is in an ongoing state (like being married or living somewhere), use ています!\n\nたべています = I am eating right now!',
    explanationFull:
      'The 〜ている/〜ています construction has two primary meanings depending on the verb type:\n1. Ongoing progressive action for durative action verbs (e.g. 今本を読んでいます = I am currently reading a book).\n2. Resultant continuing state for instantaneous/punctual verbs (e.g. 結婚しています = is married, 知っています = know).',
    analogy:
      'Think of it like a video camera that is currently recording the action LIVE on screen.',
    structure: 'Verb[て-form] + います (polite) / いる (casual)',
    examples: [
      {
        japanese: '今、日本語を勉強しています。',
        annotated: {
          segments: [
            { text: '今', reading: 'いま' },
            { text: '、' },
            { text: '日本語', reading: 'にほんご' },
            { text: 'を' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'しています。' },
          ],
          romaji: 'Ima, Nihongo wo benkyou shite imasu.',
          english: 'I am studying Japanese right now.',
        },
        note: 'Ongoing action in progress right this moment.',
      },
      {
        japanese: '雨が降っています。',
        annotated: {
          segments: [
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'っています。' },
          ],
          romaji: 'Ame ga futte imasu.',
          english: 'It is raining.',
        },
      },
      {
        japanese: '東京に住んでいます。',
        annotated: {
          segments: [
            { text: '東京', reading: 'とうきょう' },
            { text: 'に' },
            { text: '住', reading: 'す' },
            { text: 'んでいます。' },
          ],
          romaji: 'Toukyou ni sunde imasu.',
          english: 'I live in Tokyo. (Continuous state)',
        },
        note: 'Resultant state: living in a place.',
      },
    ],
    commonMistake:
      'Do not say 行っています when you mean "I am going right now" (use 行きます or 行くところです). 行っています means "has gone and is still there".',
    miniConversation: [
      {
        japanese: 'A: 今何をしているんですか？',
        annotated: {
          segments: [
            { text: 'A: 今', reading: 'いま' },
            { text: '何', reading: 'なに' },
            { text: 'をしているんですか？' },
          ],
          romaji: 'A: Ima nani wo shite iru n desu ka?',
          english: 'A: What are you doing right now?',
        },
      },
      {
        japanese: 'B: テレビを見ています。',
        annotated: {
          segments: [
            { text: 'B: テレビを' },
            { text: '見', reading: 'み' },
            { text: 'ています。' },
          ],
          romaji: 'B: Terebi wo mite imasu.',
          english: 'B: I am watching TV.',
        },
      },
    ],
    relatedGrammar: ['n5-g-007'],
    tags: ['progressive', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 18,
  },
  {
    id: 'n5-g-019',
    pattern: 'Verb[ない-form] + でください',
    title: '〜ないでください (naide kudasai) — Please Don\'t Do',
    titleShort: '〜ないでください',
    level: 'N5',
    explanationSimple:
      'Want to politely ask someone NOT to do something? Take the negative ない-form and add でください!\n\nたべない (don\'t eat) + でください = たべないでください (Please don\'t eat this).',
    explanationFull:
      '〜ないでください is the polite negative counterpart to 〜てください. It is used when requesting, instructing, or warning someone not to perform an action.',
    analogy:
      'Think of it like a gentle red traffic light: "Please hold on, don\'t cross here!"',
    structure: 'Verb[ない-form] + でください',
    examples: [
      {
        japanese: 'ここで写真を撮らないでください。',
        annotated: {
          segments: [
            { text: 'ここで' },
            { text: '写真', reading: 'しゃしん' },
            { text: 'を' },
            { text: '撮', reading: 'と' },
            { text: 'らないでください。' },
          ],
          romaji: 'Koko de shashin wo toranaide kudasai.',
          english: 'Please do not take photos here.',
        },
        note: 'Very common on museum and shrine signs!',
      },
      {
        japanese: '心配しないでください。',
        annotated: {
          segments: [
            { text: '心配', reading: 'しんぱい' },
            { text: 'しないでください。' },
          ],
          romaji: 'Shinpai shinaide kudasai.',
          english: 'Please don\'t worry.',
        },
      },
    ],
    commonMistake:
      'Make sure you conjugate the verb to the ない-form before adding でください. Never say 書くでください or 書かないてください.',
    relatedGrammar: ['n5-g-007'],
    tags: ['request', 'negative', 'polite', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 19,
  },
  {
    id: 'n5-g-020',
    pattern: 'Verb[dictionary form] + ことができます',
    title: '〜ことができます (koto ga dekimasu) — Can Do / Able To',
    titleShort: '〜ことができます',
    level: 'N5',
    explanationSimple:
      'To say you CAN do something, take the regular dictionary form of the verb, add ことができます (literally "the act of doing is possible").\n\nにほんごを はなす ことができます = I can speak Japanese!',
    explanationFull:
      '〜ことができる expresses ability or situational possibility. The verb in plain dictionary form is nominalized with こと ("thing / act"), followed by the potential verb できる ("to be possible / can do").',
    analogy:
      'Think of こと as turning the action into a solid "badge", and できます as saying "I have unlocked this badge!"',
    structure: 'Verb[dictionary form] + ことができます / できない',
    examples: [
      {
        japanese: '漢字を少し読むことができます。',
        annotated: {
          segments: [
            { text: '漢字', reading: 'かんじ' },
            { text: 'を' },
            { text: '少', reading: 'すこ' },
            { text: 'し' },
            { text: '読', reading: 'よ' },
            { text: 'むことができます。' },
          ],
          romaji: 'Kanji wo sukoshi yomu koto ga dekimasu.',
          english: 'I can read a little kanji.',
        },
      },
      {
        japanese: 'ここでクレジットカードを使うことができますか？',
        annotated: {
          segments: [
            { text: 'ここでクレジットカードを' },
            { text: '使', reading: 'つか' },
            { text: 'うことができますか？' },
          ],
          romaji: 'Koko de kurejitto kaado wo tsukau koto ga dekimasu ka?',
          english: 'Can I use a credit card here?',
        },
        note: 'Super useful phrase at shops and restaurants in Japan!',
      },
    ],
    commonMistake:
      'Always use the dictionary (plain) form of the verb before ことができます, NOT the ます-form (e.g. 読みますことができます is wrong; 読むことができます is correct).',
    relatedGrammar: ['n5-g-002'],
    tags: ['potential', 'ability', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 20,
  },
  {
    id: 'n5-g-021',
    pattern: 'Verb[dictionary form] + のが 好き / 上手 / 下手 です',
    title: '〜のが好き・上手・下手です — Liking / Being Good At Doing',
    titleShort: '〜のが好きです',
    level: 'N5',
    explanationSimple:
      'In Japanese, adjectives like 好き (like), 上手 (good at), and 下手 (bad at) need a NOUN. If you want to say you like an ACTION (like "I like eating"), add の to turn the verb into a noun!\n\nたべる (to eat) + のがすきです = I like eating!',
    explanationFull:
      'The particle の nominalizes a plain verb (turning "to do" into "the act of doing"). When followed by descriptions of preference (好き/嫌い) or skill (上手/下手/得意/苦手), the nominalized clause takes the particle が.',
    analogy:
      'Think of の like packing your verb into a neat gift box with a tag, so you can point at it with が and say "I like this!"',
    structure: 'Verb[dictionary form] + のが + [好き / 上手 / 下手] です',
    examples: [
      {
        japanese: '料理を作るのが好きです。',
        annotated: {
          segments: [
            { text: '料理', reading: 'りょうり' },
            { text: 'を' },
            { text: '作', reading: 'つく' },
            { text: 'るのが' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          romaji: 'Ryouri wo tsukuru no ga suki desu.',
          english: 'I like cooking (making food).',
        },
      },
      {
        japanese: '田中さんは歌を歌うのが上手です。',
        annotated: {
          segments: [
            { text: '田中', reading: 'たなか' },
            { text: 'さんは' },
            { text: '歌', reading: 'うた' },
            { text: 'を' },
            { text: '歌', reading: 'うた' },
            { text: 'うのが' },
            { text: '上手', reading: 'じょうず' },
            { text: 'です。' },
          ],
          romaji: 'Tanaka-san wa uta wo utau no ga jouzu desu.',
          english: 'Tanaka-san is good at singing songs.',
        },
      },
    ],
    commonMistake:
      'Do not say 料理を作ることが好きです in casual conversation (の is much more natural with sensory preferences). Also, never use 上手です about yourself—it sounds boastful in Japanese!',
    relatedGrammar: ['n5-g-002'],
    tags: ['nominalizer', 'preference', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 21,
  },
  {
    id: 'n5-g-022',
    pattern: 'A より B のほうが [Adjective] です',
    title: 'AよりBのほうが〜 (A yori B no hou ga) — Comparison',
    titleShort: '〜より〜のほうが',
    level: 'N5',
    explanationSimple:
      'Comparing two things? Use より for "than" and のほうが for "is more...":\n\nA より B のほうが おおきいです = B is bigger than A!',
    explanationFull:
      'より marks the standard of comparison ("than A"). のほう ( literally "the direction/side of") marks the side that possesses more of the property. The sentence structure is: [Standard] より [Chosen] のほうが [Adjective] です.',
    analogy:
      'Imagine a balance scale: より is the reference weight on one side, and のほうが tips down with more weight on the other side.',
    structure: 'A より B のほうが + [Adjective] です',
    examples: [
      {
        japanese: '電車より新幹線のほうが速いです。',
        annotated: {
          segments: [
            { text: '電車', reading: 'でんしゃ' },
            { text: 'より' },
            { text: '新幹線', reading: 'しんかんせん' },
            { text: 'のほうが' },
            { text: '速', reading: 'はや' },
            { text: 'いです。' },
          ],
          romaji: 'Densha yori shinkansen no hou ga hayai desu.',
          english: 'The Shinkansen is faster than local trains.',
        },
      },
      {
        japanese: 'バスより電車のほうが安いです。',
        annotated: {
          segments: [
            { text: 'バスより' },
            { text: '電車', reading: 'でんしゃ' },
            { text: 'のほうが' },
            { text: '安', reading: 'やす' },
            { text: 'いです。' },
          ],
          romaji: 'Basu yori densha no hou ga yasui desu.',
          english: 'The train is cheaper than the bus.',
        },
      },
    ],
    commonMistake:
      'Mixing up which is which! Remember: the thing right before より is "THAN...". So A より means "than A".',
    relatedGrammar: ['n5-g-002'],
    tags: ['comparison', 'adjective', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 22,
  },
  {
    id: 'n5-g-023',
    pattern: '[Category] の中で [Item] が 一番 [Adjective] です',
    title: '〜の中で〜が一番 (no naka de ~ ga ichiban) — Superlative (The Most / Best)',
    titleShort: '〜の中で一番',
    level: 'N5',
    explanationSimple:
      'Want to say something is the NUMBER ONE / THE MOST in a group? Use 〜のなかで (among...) and いちばん (number 1):\n\nくだもののなかで りんごが いちばん すきです = Among fruits, I like apples the best!',
    explanationFull:
      'の中で defines the category or group of comparison. 一番 (ichiban, literally "number one") is placed directly before the adjective or predicate to indicate the superlative degree ("the most / best").',
    analogy:
      'Think of standing on the 1st place gold medal podium (一番) inside a group circle (の中で).',
    structure: '[Group] の中で + [Item] が + 一番 (いちばん) + [Adjective] です',
    examples: [
      {
        japanese: '一年の中で夏が一番好きです。',
        annotated: {
          segments: [
            { text: '一年', reading: 'いちねん' },
            { text: 'の' },
            { text: '中', reading: 'なか' },
            { text: 'で' },
            { text: '夏', reading: 'なつ' },
            { text: 'が' },
            { text: '一番', reading: 'いちばん' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          romaji: 'Ichinen no naka de natsu ga ichiban suki desu.',
          english: 'Of the whole year, I like summer the best.',
        },
      },
      {
        japanese: 'スポーツの中で何が一番面白いですか？',
        annotated: {
          segments: [
            { text: 'スポーツの' },
            { text: '中', reading: 'なか' },
            { text: 'で' },
            { text: '何', reading: 'なに' },
            { text: 'が' },
            { text: '一番', reading: 'いちばん' },
            { text: '面白', reading: 'おもしろ' },
            { text: 'いですか？' },
          ],
          romaji: 'Supootsu no naka de nani ga ichiban omoshiroi desu ka?',
          english: 'Among sports, what is the most interesting?',
        },
      },
    ],
    commonMistake:
      'Don\'t forget の中で when specifying a field or group of 3 or more items. If comparing only 2 items, use the comparative AよりBのほうが instead.',
    relatedGrammar: ['n5-g-022'],
    tags: ['superlative', 'comparison', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 23,
  },
  {
    id: 'n5-g-024',
    pattern: 'Verb[ます-stem] + に 行きます / 来ます',
    title: '〜に行きます・来ます (ni ikimasu) — Purpose of Movement',
    titleShort: '〜に行きます',
    level: 'N5',
    explanationSimple:
      'Going somewhere TO DO something? Just drop ます from the verb and add に いきます:\n\nたべます (eat) → たべ に いきます = I go to eat!\n買いものをします (shopping) → 買いもの に いきます = I go shopping!',
    explanationFull:
      'This pattern expresses the purpose of going, coming, or returning. It attaches to the ます-stem of verbs or to action verbal nouns (like 勉強, 買い物, 散歩), followed by the directional particle に and a movement verb (行く, 来る, 帰る).',
    analogy:
      'Think of に as an arrow pointing straight at your mission goal: "Destination ➔ [Purpose] ➔ Go!"',
    structure: '[Place] へ/に + Verb[ます-stem] + に + 行きます / 来ます / 帰ります',
    examples: [
      {
        japanese: 'デパートへ服を買いに行きます。',
        annotated: {
          segments: [
            { text: 'デパートへ' },
            { text: '服', reading: 'ふく' },
            { text: 'を' },
            { text: '買', reading: 'か' },
            { text: 'いに' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          romaji: 'Depaato e fuku wo kai ni ikimasu.',
          english: 'I am going to the department store to buy clothes.',
        },
      },
      {
        japanese: '日本へ友達に会いに来ました。',
        annotated: {
          segments: [
            { text: '日本', reading: 'にほん' },
            { text: 'へ' },
            { text: '友達', reading: 'ともだち' },
            { text: 'に' },
            { text: '会', reading: 'あ' },
            { text: 'いに' },
            { text: '来', reading: 'き' },
            { text: 'ました。' },
          ],
          romaji: 'Nihon e tomodachi ni ai ni kimashita.',
          english: 'I came to Japan to meet my friend.',
        },
      },
    ],
    commonMistake:
      'Be sure to use the ます-stem (e.g. 買い, 食べ, 見), NOT the dictionary form (買うに行きます is incorrect).',
    relatedGrammar: ['n5-g-008', 'n5-g-010'],
    tags: ['purpose', 'movement', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 24,
  },
  {
    id: 'n5-g-025',
    pattern: 'Noun + だけ / Noun + しか ... ません',
    title: 'だけ / しか〜ない (dake / shika...nai) — "Only" & "Nothing But"',
    titleShort: 'だけ・しか',
    level: 'N5',
    explanationSimple:
      'Two ways to say "ONLY":\n\n1. だけ works with positive sentences: 一つだけ あります (I have only one).\n2. しか MUST be followed by a NEGATIVE verb: 一つしか ありません (I have nothing but one / only one). しか emphasizes that you wish there were more!',
    explanationFull:
      'だけ ("only, just") can be used with both positive and negative predicates and conveys neutral limitation. しか ("only, nothing other than") obligatorily pairs with negative verbs, expressing limitation with a nuance of insufficiency or scarcity.',
    analogy:
      'だけ is a neutral fence: "Just these." しか...ない is an empty pantry: "There is NOTHING except this tiny crumb!"',
    structure: '[Noun] + だけ + [Positive Verb]  vs.  [Noun] + しか + [Negative Verb]',
    examples: [
      {
        japanese: '千円だけ持っています。',
        annotated: {
          segments: [
            { text: '千円', reading: 'せんえん' },
            { text: 'だけ' },
            { text: '持', reading: 'も' },
            { text: 'っています。' },
          ],
          romaji: 'Sen\'en dake motte imasu.',
          english: 'I have only 1,000 yen (neutral statement).',
        },
      },
      {
        japanese: '百円しかありません。',
        annotated: {
          segments: [
            { text: '百円', reading: 'ひゃくえん' },
            { text: 'しかありません。' },
          ],
          romaji: 'Hyaku\'en shika arimasen.',
          english: 'I have only 100 yen (and that is not enough!).',
        },
        note: 'Notice ありません (negative) is required with しか.',
      },
    ],
    commonMistake:
      'Never use a positive verb after しか! 百円しかあります is grammatically incorrect.',
    relatedGrammar: ['n5-g-001', 'n5-g-002'],
    tags: ['limitation', 'particles', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 25,
  },
];
