// ============================================================
// JLPT Quest — N5 Grammar Data
// Source: JLPT-aligned references
// Verification: manually curated
// ============================================================

import type { GrammarPoint } from '../types';
import { n5GrammarBatch2 } from './grammarBatch2';
import { n5GrammarBatch3 } from './grammarBatch3';

const n5GrammarBatch1: GrammarPoint[] = [
  {
    id: 'n5-g-001',
    pattern: 'Noun + は + ... + です',
    title: 'は (wa) — Topic Marker',
    titleShort: 'は',
    level: 'N5',
    explanationSimple:
      'は tells us what we are talking about. It puts a spotlight on the topic.\n\nThink of は like saying "As for...". You\'re setting the stage for what you\'re about to say.',
    explanationFull:
      'は is a particle that marks the topic of the sentence. The topic is what the rest of the sentence is about. It can mark the subject, but it has a broader role of establishing context and contrast.',
    analogy:
      'Imagine you\'re on stage and you point a spotlight at something: "それは…" (As for that...). は is your spotlight. Whatever it shines on becomes the topic.',
    structure: '[Topic] + は + [Comment]',
    examples: [
      {
        japanese: 'わたしは学生です。',
        annotated: {
          segments: [
            { text: 'わたしは学生です。' },
          ],
          romaji: 'Watashi wa gakusei desu.',
          english: 'I am a student.',
        },
        note: 'わたし (I) is the topic. 学生 (student) is the comment.',
      },
      {
        japanese: 'これは本です。',
        annotated: {
          segments: [
            { text: 'これは' },
            { text: '本', reading: 'ほん' },
            { text: 'です。' },
          ],
          romaji: 'Kore wa hon desu.',
          english: 'This is a book.',
        },
        note: 'これ (this) is the topic. 本 (book) is the comment.',
      },
      {
        japanese: '日本語は面白いです。',
        annotated: {
          segments: [
            { text: '日本語', reading: 'にほんご' },
            { text: 'は面白いです。' },
          ],
          romaji: 'Nihongo wa omoshiroi desu.',
          english: 'Japanese is interesting.',
        },
      },
    ],
    commonMistake:
      'Beginners often confuse は (wa) and が (ga). は marks the topic of the entire conversation, while が marks the grammatical subject. When in doubt, は is used more often in simple statements.',
    commonMistakeExample: {
      japanese: 'ケーがおいしいです。',
      annotated: {
        segments: [
          { text: 'ケーがおいしいです。' },
        ],
        romaji: 'Keeki ga oishii desu.',
        english: 'The cake is delicious. (が used here to emphasize ケーキ specifically)',
      },
      note: 'Both は and が can be used here, but with different nuance.',
    },
    miniConversation: [
      {
        japanese: 'A: お名前は何ですか？',
        annotated: {
          segments: [
            { text: 'A: お名前', reading: 'おなまえ' },
            { text: 'は何ですか？' },
          ],
          romaji: 'A: Onamae wa nan desu ka?',
          english: 'A: What is your name?',
        },
      },
      {
        japanese: 'B: たなかです。タナカです。',
        annotated: {
          segments: [
            { text: 'B: たなかです。タナカです。' },
          ],
          romaji: 'B: Tanaka desu. Tanaka desu.',
          english: 'B: I am Tanaka. It is Tanaka.',
        },
      },
    ],
    relatedGrammar: ['n5-g-002', 'n5-g-003'],
    tags: ['particle', 'basic', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 1,
  },
  {
    id: 'n5-g-002',
    pattern: 'Noun + が + Verb/Adjective',
    title: 'が (ga) — Subject Marker',
    titleShort: 'が',
    level: 'N5',
    explanationSimple:
      'が points to who or what is DOING something or HAS a certain quality.\n\nThink of が like an arrow pointing at the subject: "THIS one is doing it!"',
    explanationFull:
      'が is a subject marker particle. It identifies the grammatical subject of the verb. It is often used when introducing new information, with existence verbs (ある/いる), with adjectives of desire/ability, and in subordinate clauses.',
    analogy:
      'Imagine a lineup of people. が points and says "That person! THEY did it." It emphasizes WHO specifically.',
    structure: '[Subject] + が + [Verb/Adjective]',
    examples: [
      {
        japanese: 'ねこがいます。',
        annotated: {
          segments: [
            { text: 'ねこがいます。' },
          ],
          romaji: 'Neko ga imasu.',
          english: 'There is a cat. (A cat exists.)',
        },
        note: 'が is used with います (to exist) — pointing to the cat as what exists.',
      },
      {
        japanese: 'だれが来ましたか？',
        annotated: {
          segments: [
            { text: 'だれが来ましたか？' },
          ],
          romaji: 'Dare ga kimashita ka?',
          english: 'Who came?',
        },
        note: 'Question words like だれ (who) always take が, not は.',
      },
      {
        japanese: 'コーヒーが娊いです。',
        annotated: {
          segments: [
            { text: 'コーヒーが娊いです。' },
          ],
          romaji: 'Koohii ga suki desu.',
          english: 'I like coffee. (Coffee is liked [by me].)',
        },
        note: 'With 娊き (すき, like), use が for the thing you like.',
      },
    ],
    commonMistake:
      'Do NOT say コーヒーは娊きです when you mean "I like coffee." With preference/ability verbs, the thing preferred takes が.',
    relatedGrammar: ['n5-g-001'],
    tags: ['particle', 'basic', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 2,
  },
  {
    id: 'n5-g-003',
    pattern: 'Noun + を + Verb',
    title: 'を (wo) — Object Marker',
    titleShort: 'を',
    level: 'N5',
    explanationSimple:
      'を marks the thing that the action is done TO.\n\nIf you eat an apple, the apple gets を:\nりんごをたべる (I eat an apple).',
    explanationFull:
      'を (pronounced "wo" or "o") marks the direct object of a transitive verb. The direct object is the thing that receives the action.',
    analogy:
      'Think of を like a target: 「――を ►」. The arrow hits whatever comes before を.',
    structure: '[Object] + を + [Transitive Verb]',
    examples: [
      {
        japanese: 'りんごを食べます。',
        annotated: {
          segments: [
            { text: 'りんごを' },
            { text: '食', reading: 'た' },
            { text: 'べます。' },
          ],
          romaji: 'Ringo wo tabemasu.',
          english: 'I eat an apple.',
        },
      },
      {
        japanese: '日本語を勉強します。',
        annotated: {
          segments: [
            { text: '日本語', reading: 'にほんご' },
            { text: 'を' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'します。' },
          ],
          romaji: 'Nihongo wo benkyou shimasu.',
          english: 'I study Japanese.',
        },
      },
      {
        japanese: '音楽を聞きます。',
        annotated: {
          segments: [
            { text: '音楽', reading: 'おんがく' },
            { text: 'を' },
            { text: '聞', reading: 'き' },
            { text: 'きます。' },
          ],
          romaji: 'Ongaku wo kikimasu.',
          english: 'I listen to music.',
        },
      },
    ],
    commonMistake:
      'Do not confuse を with は. を marks the OBJECT (what is being acted on), not the topic. Also, intransitive verbs (帰る, いる, ある) do NOT take を.',
    relatedGrammar: ['n5-g-001', 'n5-g-002'],
    tags: ['particle', 'basic', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 3,
  },
  {
    id: 'n5-g-004',
    pattern: 'Noun + の + Noun',
    title: 'の (no) — Possession / Noun Connector',
    titleShort: 'の',
    level: 'N5',
    explanationSimple:
      'の connects two nouns. Think of it like the English \'s or "of":\n\nわたしの本 = my book (book of me)\n日本の食べ物 = Japanese food (food of Japan)',
    explanationFull:
      'の connects nouns, showing possession, description, or classification. The noun before の modifies the noun after it.',
    analogy:
      'Think of の like an apostrophe-s. "Tom\'s car" = トムの車。It\'s the connector that says "X belongs to Y" or "X describes Y".',
    structure: '[Modifier Noun] + の + [Head Noun]',
    examples: [
      {
        japanese: 'わたしの名前はタナカです。',
        annotated: {
          segments: [
            { text: 'わたしの名前はタナカです。' },
          ],
          romaji: 'Watashi no namae wa Tanaka desu.',
          english: 'My name is Tanaka.',
        },
      },
      {
        japanese: '日本の食べ物はおいしいです。',
        annotated: {
          segments: [
            { text: '日本', reading: 'にほん' },
            { text: 'の' },
            { text: '食べ物', reading: 'たべもの' },
            { text: 'はおいしいです。' },
          ],
          romaji: 'Nihon no tabemono wa oishii desu.',
          english: 'Japanese food is delicious.',
        },
      },
    ],
    commonMistake:
      'Japanese word order is the opposite of English: the modifier comes BEFORE の. "My book" = わたしの本, not 本のわたし.',
    relatedGrammar: ['n5-g-001'],
    tags: ['particle', 'basic', 'possession', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 4,
  },
  {
    id: 'n5-g-005',
    pattern: 'Noun + に + あります / います',
    title: 'に (あります/います) — Location of Existence',
    titleShort: 'にあります/います',
    level: 'N5',
    explanationSimple:
      'あります means "there is/exists" for things (non-living).\nいます means "there is/exists" for people and animals (living things).\n\nに marks the location where something exists.',
    explanationFull:
      'あります (ある) is used for inanimate objects and abstract things. います (いる) is used for animate beings (people, animals). The location is marked with に.',
    analogy:
      'Think of it like "sitting vs. alive": Things SIT somewhere (ある). People and animals LIVE somewhere (いる). A rock SITS on the table. A cat LIVES on the table.',
    structure: '[Location] + に + [Subject] + が + あります/います',
    examples: [
      {
        japanese: '本棚に本があります。',
        annotated: {
          segments: [
            { text: '本棚', reading: 'ほんだな' },
            { text: 'に' },
            { text: '本', reading: 'ほん' },
            { text: 'があります。' },
          ],
          romaji: 'Hondana ni hon ga arimasu.',
          english: 'There is a book on the bookshelf.',
        },
      },
      {
        japanese: '公園に子どもがいます。',
        annotated: {
          segments: [
            { text: '公園', reading: 'こうえん' },
            { text: 'に' },
            { text: '子ども', reading: 'こども' },
            { text: 'がいます。' },
          ],
          romaji: 'Kouen ni kodomo ga imasu.',
          english: 'There are children in the park.',
        },
      },
    ],
    commonMistake:
      'Using あります for people or います for objects. Remember: います = living, あります = non-living.',
    relatedGrammar: ['n5-g-002'],
    tags: ['particle', 'existence', 'location', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 5,
  },
  {
    id: 'n5-g-006',
    pattern: 'Verb ます form + たいです',
    title: 'たいです — Want to do',
    titleShort: 'たいです',
    level: 'N5',
    explanationSimple:
      'To say you WANT TO DO something, drop ます from the verb and add たいです.\n\nたべます (→ たべ) + たいです = たべたいです (I want to eat)',
    explanationFull:
      'たいです attaches to the ます-stem of a verb. The thing you want takes が (though を is also accepted in informal contexts).',
    analogy:
      'Think of たいです as the "want to" suffix. Just glue it on after trimming ます.',
    structure: 'Verb[stem] + たいです',
    examples: [
      {
        japanese: 'ラーメンを食べたいです。',
        annotated: {
          segments: [
            { text: 'ラーメンを' },
            { text: '食', reading: 'た' },
            { text: 'べたいです。' },
          ],
          romaji: 'Raamen wo tabetai desu.',
          english: 'I want to eat ramen.',
        },
      },
      {
        japanese: '日本に行きたいです。',
        annotated: {
          segments: [
            { text: '日本', reading: 'にほん' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'きたいです。' },
          ],
          romaji: 'Nihon ni ikitai desu.',
          english: 'I want to go to Japan.',
        },
      },
      {
        japanese: '日本語を話したいです。',
        annotated: {
          segments: [
            { text: '日本語', reading: 'にほんご' },
            { text: 'を' },
            { text: '話', reading: 'はな' },
            { text: 'したいです。' },
          ],
          romaji: 'Nihongo wo hanashitai desu.',
          english: 'I want to speak Japanese.',
        },
      },
    ],
    commonMistake:
      'Do not use たいです for other people without special context — it describes YOUR desire. For others, use たがっています or ask a question.',
    relatedGrammar: ['n5-g-001'],
    tags: ['desire', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 6,
  },
  {
    id: 'n5-g-007',
    pattern: 'Verb て-form + ください',
    title: 'てください — Please do',
    titleShort: 'てください',
    level: 'N5',
    explanationSimple:
      'Want to politely ask someone to do something? Use てください ("please do...").\n\nFirst, change the verb to its て-form, then add ください.',
    explanationFull:
      'てください is used to make polite requests. The て-form connects to ください. It is one of the most essential polite request forms in Japanese.',
    analogy:
      'Think of て as a connector ("+") and ください as "please": Action + please = てください.',
    structure: 'Verb[て-form] + ください',
    examples: [
      {
        japanese: 'ここに書いてください。',
        annotated: {
          segments: [
            { text: 'ここに' },
            { text: '書', reading: 'か' },
            { text: 'いてください。' },
          ],
          romaji: 'Koko ni kaite kudasai.',
          english: 'Please write here.',
        },
      },
      {
        japanese: '少し待ってください。',
        annotated: {
          segments: [
            { text: '少し待ってください。' },
          ],
          romaji: 'Sukoshi matte kudasai.',
          english: 'Please wait a moment.',
        },
      },
      {
        japanese: 'ゆっくり話してください。',
        annotated: {
          segments: [
            { text: 'ゆっくり' },
            { text: '話', reading: 'はな' },
            { text: 'してください。' },
          ],
          romaji: 'Yukkuri hanashite kudasai.',
          english: 'Please speak slowly.',
        },
      },
    ],
    commonMistake:
      'Remember to change the verb to the て-form first! You cannot attach ください directly to the dictionary form.',
    relatedGrammar: ['n5-g-001', 'n5-g-008'],
    tags: ['request', 'te-form', 'essential', 'polite'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 7,
  },
  {
    id: 'n5-g-008',
    pattern: 'Noun + も',
    title: 'も (mo) — Also / Too / As well',
    titleShort: 'も',
    level: 'N5',
    explanationSimple:
      'も means "also" or "too".\n\nIt replaces particles like は and を when you want to say "this one too!".',
    explanationFull:
      'も is an inclusive particle meaning "also", "too", or "neither" (in negative sentences). It directly replaces は (wa), が (ga), or を (wo).',
    analogy:
      'Think of も like a "+1" button. "Me +1" = わたしも (me too!). It adds someone or something to the club.',
    structure: '[Noun] + も + [Predicate]',
    examples: [
      {
        japanese: 'わたしも学生です。',
        annotated: {
          segments: [
            { text: 'わたしも' },
            { text: '学生', reading: 'がくせい' },
            { text: 'です。' },
          ],
          romaji: 'Watashi mo gakusei desu.',
          english: 'I am also a student.',
        },
      },
      {
        japanese: 'これもおいしいです。',
        annotated: {
          segments: [
            { text: 'これもおいしいです。' },
          ],
          romaji: 'Kore mo oishii desu.',
          english: 'This is also delicious.',
        },
      },
    ],
    commonMistake:
      'Do NOT say わたしはも. も replaces は completely! Just say わたしも.',
    relatedGrammar: ['n5-g-001'],
    tags: ['particle', 'basic', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 8,
  },
  {
    id: 'n5-g-009',
    pattern: 'Place + で + Action Verb / Tool + で + Verb',
    title: 'で (de) — Location of Action & Means',
    titleShort: 'で',
    level: 'N5',
    explanationSimple:
      'で tells us WHERE an action takes place, or HOW/WITH WHAT tool you do something.\n\nレストランで食べる (eat AT a restaurant)\nはしで食べる (eat WITH chopsticks)',
    explanationFull:
      'で marks the location of an action (distinguished from に which marks passive existence), or the means/instrument/language used to do something.',
    analogy:
      'Think of で like a workshop or tool bench. It marks the active setting where work happens, or the tool you hold in your hands to do it.',
    structure: '[Location / Tool] + で + [Verb]',
    examples: [
      {
        japanese: '図書館で本を読みます。',
        annotated: {
          segments: [
            { text: '図書館', reading: 'としょかん' },
            { text: 'で' },
            { text: '本', reading: 'ほん' },
            { text: 'を' },
            { text: '読', reading: 'よ' },
            { text: 'みます。' },
          ],
          romaji: 'Toshokan de hon wo yomimasu.',
          english: 'I read books at the library.',
        },
      },
      {
        japanese: '日本語で話してください。',
        annotated: {
          segments: [
            { text: '日本語', reading: 'にほんご' },
            { text: 'で' },
            { text: '話', reading: 'はな' },
            { text: 'してください。' },
          ],
          romaji: 'Nihongo de hanashite kudasai.',
          english: 'Please speak in Japanese.',
        },
      },
    ],
    commonMistake:
      'Do NOT use で for existing/living somewhere. Use に with あります/います. Use で when an ACTION happens.',
    relatedGrammar: ['n5-g-005'],
    tags: ['particle', 'location', 'means', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 9,
  },
  {
    id: 'n5-g-010',
    pattern: 'Destination + へ (pronounced "e") + 行く/来る/帰る',
    title: 'へ (e) — Direction of Movement',
    titleShort: 'へ',
    level: 'N5',
    explanationSimple:
      'へ points in the DIRECTION you are heading!\n\nEven though it is written with hiragana へ (he), when used as a particle it is pronounced "e".',
    explanationFull:
      'へ indicates directional movement toward a goal or destination. It emphasizes the journey and heading towards something, paired with motion verbs (行く, 来る, 帰る).',
    analogy:
      'Think of へ like a compass needle pointing towards your destination.',
    structure: '[Destination] + へ + [Movement Verb]',
    examples: [
      {
        japanese: '日本へ行きます。',
        annotated: {
          segments: [
            { text: '日本', reading: 'にほん' },
            { text: 'へ' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          romaji: 'Nihon e ikimasu.',
          english: 'I am going to Japan.',
        },
      },
      {
        japanese: 'うちへ帰ります。',
        annotated: {
          segments: [
            { text: 'うちへ' },
            { text: '帰', reading: 'かえ' },
            { text: 'ります。' },
          ],
          romaji: 'Uchi e kaerimasu.',
          english: 'I am heading home.',
        },
      },
    ],
    commonMistake:
      'Pronouncing it "he" instead of "e"! As a particle, always pronounce it "e".',
    relatedGrammar: ['n5-g-005'],
    tags: ['particle', 'direction', 'movement'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 10,
  },
  {
    id: 'n5-g-011',
    pattern: '[Start] から [End] まで',
    title: 'から・まで (kara / made) — From ... Until ...',
    titleShort: 'から・まで',
    level: 'N5',
    explanationSimple:
      'から means "FROM" (starting point).\nまで means "UNTIL / TO" (finish line).\n\nWorks for both time (9:00 から 5:00 まで) and places (Tokyo から Kyoto まで)!',
    explanationFull:
      'から indicates starting point in time or space. まで indicates end point or destination limit. They are frequently used together or independently.',
    analogy:
      'Think of から as the starting gun at a race, and まで as the finish ribbon.',
    structure: '[Time/Place] + から + [Time/Place] + まで',
    examples: [
      {
        japanese: '九時から五時まで働きます。',
        annotated: {
          segments: [
            { text: '九時', reading: 'くじ' },
            { text: 'から' },
            { text: '五時', reading: 'ごじ' },
            { text: 'まで' },
            { text: '働', reading: 'はたら' },
            { text: 'きます。' },
          ],
          romaji: 'Kuji kara goji made hatarakimasu.',
          english: 'I work from 9:00 until 5:00.',
        },
      },
      {
        japanese: '東京から京都まで新幹線で行きます。',
        annotated: {
          segments: [
            { text: '東京', reading: 'とうきょう' },
            { text: 'から' },
            { text: '京都', reading: 'きょうと' },
            { text: 'まで' },
            { text: '新幹線', reading: 'しんかんせん' },
            { text: 'で' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          romaji: 'Toukyou kara Kyouto made shinkansen de ikimasu.',
          english: 'I go from Tokyo to Kyoto by bullet train.',
        },
      },
    ],
    commonMistake:
      'Swapping から and まで. Remember: から is "start from", まで is "stop at / until".',
    relatedGrammar: ['n5-g-009'],
    tags: ['particle', 'time', 'distance', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 11,
  },
  {
    id: 'n5-g-012',
    pattern: 'Verb[て-form] + もいいです (か)',
    title: 'てもいいです — May I / You may',
    titleShort: 'てもいいです',
    level: 'N5',
    explanationSimple:
      'Used to ask for or give PERMISSION.\n\n"May I do this?" → Verb[て] + もいいですか？\n"Yes, you may do this." → Verb[て] + もいいですよ。',
    explanationFull:
      'Formed with verb て-form followed by もいいです. In question form (〜てもいいですか), it is the standard polite way to ask for permission in daily Japanese.',
    analogy:
      'Literally means "Even if I do this, is it good?" Think of it as asking "Is it cool if I do this?"',
    structure: 'Verb[て-form] + もいいですか',
    examples: [
      {
        japanese: '写真を撮ってもいいですか？',
        annotated: {
          segments: [
            { text: '写真', reading: 'しゃしん' },
            { text: 'を' },
            { text: '撮', reading: 'と' },
            { text: 'ってもいいですか？' },
          ],
          romaji: 'Shashin wo tottemo ii desu ka?',
          english: 'May I take a photo?',
        },
      },
      {
        japanese: 'ここに座ってもいいですか？',
        annotated: {
          segments: [
            { text: 'ここに' },
            { text: '座', reading: 'すわ' },
            { text: 'ってもいいですか？' },
          ],
          romaji: 'Koko ni suwattemo ii desu ka?',
          english: 'May I sit here?',
        },
      },
    ],
    commonMistake:
      'Forgetting to conjugate to the て-form before adding もいいですか.',
    relatedGrammar: ['n5-g-007'],
    tags: ['permission', 'te-form', 'polite', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 12,
  },
  {
    id: 'n5-g-013',
    pattern: 'Verb[ない-form without い] + なければなりません',
    title: 'なければなりません — Must do / Have to do',
    titleShort: 'なければなりません',
    level: 'N5',
    explanationSimple:
      'Used when something is a MUST or an obligation.\n\n"I have to study" → 勉強しなければなりません。\n"I have to go" → 行かなければなりません。',
    explanationFull:
      'Expresses necessity or obligation ("must" / "have to"). Formed by taking the negative verb form (ない), dropping い, and adding ければなりません (literally: "if not done, it won\'t do").',
    analogy:
      'Think of it as the "No excuses!" rule: "If I don\'t do this, things won\'t work out!"',
    structure: 'Verb[ない-stem] + ければなりません',
    examples: [
      {
        japanese: '明日、宿題を出さなければなりません。',
        annotated: {
          segments: [
            { text: '明日', reading: 'あした' },
            { text: '、' },
            { text: '宿題', reading: 'しゅくだい' },
            { text: 'を' },
            { text: '出', reading: 'だ' },
            { text: 'さなければなりません。' },
          ],
          romaji: 'Ashita, shukudai wo dasanakereba narimasen.',
          english: 'I have to submit my homework tomorrow.',
        },
      },
      {
        japanese: '薬を飲まなければなりません。',
        annotated: {
          segments: [
            { text: '薬', reading: 'くすり' },
            { text: 'を' },
            { text: '飲', reading: 'の' },
            { text: 'まなければなりません。' },
          ],
          romaji: 'Kusuri wo nomanakereba narimasen.',
          english: 'I must take my medicine.',
        },
      },
    ],
    commonMistake:
      'Beginners often get tangled in the long suffix! Practice the rhythm: na-ke-re-ba na-ri-ma-sen.',
    relatedGrammar: ['n5-g-007'],
    tags: ['obligation', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 13,
  },
  {
    id: 'n5-g-014',
    pattern: 'Verb[た-form] + ことがあります',
    title: 'たことがあります — Have the experience of doing',
    titleShort: 'たことがあります',
    level: 'N5',
    explanationSimple:
      'Used to share an EXPERIENCE or ask someone if they have ever done something.\n\n"Have you ever eaten sushi?" → 寿司を食べたことがありますか？',
    explanationFull:
      'Expresses past experience ("have ever done" or "have never done" with ありません). Formed by attaching ことがあります to the plain past (た-form) of the verb.',
    analogy:
      'Think of it like checking an item off your life bucket list: "I hold the past badge of having done this!"',
    structure: 'Verb[た-form] + ことがあります',
    examples: [
      {
        japanese: '富士山に登ったことがあります。',
        annotated: {
          segments: [
            { text: '富士山', reading: 'ふじさん' },
            { text: 'に' },
            { text: '登', reading: 'のぼ' },
            { text: 'ったことがあります。' },
          ],
          romaji: 'Fujisan ni nobotta koto ga arimasu.',
          english: 'I have climbed Mount Fuji before.',
        },
      },
      {
        japanese: '日本料理を食べたことがありますか？',
        annotated: {
          segments: [
            { text: '日本料理', reading: 'にほんりょうり' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べたことがありますか？' },
          ],
          romaji: 'Nihon ryouri wo tabeta koto ga arimasu ka?',
          english: 'Have you ever eaten Japanese cuisine?',
        },
      },
    ],
    commonMistake:
      'Do not use this for recent daily events like "I ate breakfast this morning". It is reserved for life experiences.',
    relatedGrammar: ['n5-g-001'],
    tags: ['experience', 'verb-form', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 14,
  },
  {
    id: 'n5-g-015',
    pattern: 'Verb[dictionary form] + 前に (まえに)',
    title: 'まえに (mae ni) — Before doing',
    titleShort: 'まえに',
    level: 'N5',
    explanationSimple:
      'Means "BEFORE doing action X".\n\nご飯を食べる前に手を洗います (Before eating, wash hands).',
    explanationFull:
      '前に indicates that the following clause occurs before the action in the first clause. Takes the dictionary (plain present) form of the verb, or Noun + の.',
    analogy:
      'Think of a countdown clock: before hitting start on action 1, do action 2.',
    structure: 'Verb[dict] + 前に, [Action]',
    examples: [
      {
        japanese: '寝る前に本を読みます。',
        annotated: {
          segments: [
            { text: '寝', reading: 'ね' },
            { text: 'る' },
            { text: '前', reading: 'まえ' },
            { text: 'に' },
            { text: '本', reading: 'ほん' },
            { text: 'を' },
            { text: '読', reading: 'よ' },
            { text: 'みます。' },
          ],
          romaji: 'Neru mae ni hon wo yomimasu.',
          english: 'I read a book before going to sleep.',
        },
      },
      {
        japanese: '食べる前に「いただきます」と言います。',
        annotated: {
          segments: [
            { text: '食', reading: 'た' },
            { text: 'べる' },
            { text: '前', reading: 'まえ' },
            { text: 'に「いただきます」と' },
            { text: '言', reading: 'い' },
            { text: 'います。' },
          ],
          romaji: 'Taberu mae ni "itadakimasu" to iimasu.',
          english: 'Before eating, we say "Itadakimasu".',
        },
      },
    ],
    commonMistake:
      'Using past tense before 前に. Always use the DICTIONARY form (食べる前に, never 食べた前に).',
    relatedGrammar: ['n5-g-016'],
    tags: ['time', 'sequence', 'routine'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 15,
  },
  {
    id: 'n5-g-016',
    pattern: 'Verb[た-form] + 後で (あとで)',
    title: 'あとで (ato de) — After doing',
    titleShort: 'あとで',
    level: 'N5',
    explanationSimple:
      'Means "AFTER doing action X".\n\nご飯を食べた後で、お茶を飲みます (After eating, I drink tea).',
    explanationFull:
      '後で indicates that the second clause occurs after the completion of the first. Takes the plain past (た-form) of the verb, or Noun + の.',
    analogy:
      'Complement to 前に: action 1 is finished, and now we move to action 2.',
    structure: 'Verb[た-form] + 後で, [Action]',
    examples: [
      {
        japanese: '映画を見た後で、カフェに行きました。',
        annotated: {
          segments: [
            { text: '映画', reading: 'えいが' },
            { text: 'を' },
            { text: '見', reading: 'み' },
            { text: 'た' },
            { text: '後', reading: 'あと' },
            { text: 'で、カフェに' },
            { text: '行', reading: 'い' },
            { text: 'きました。' },
          ],
          romaji: 'Eiga wo mita ato de, kafe ni ikimashita.',
          english: 'After watching the movie, we went to a cafe.',
        },
      },
    ],
    commonMistake:
      'Always use the た-form (completed action) before 後で (e.g. 食べた後で, not 食べる後で).',
    relatedGrammar: ['n5-g-015'],
    tags: ['time', 'sequence'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 16,
  },
  {
    id: 'n5-g-017',
    pattern: '[Reason clause] + から、[Result clause]',
    title: 'から (kara) — Because / Reason',
    titleShort: 'から (理由)',
    level: 'N5',
    explanationSimple:
      'Put から at the end of a sentence to say "BECAUSE of this...".\n\n時間がありませんから、タクシーで行きます (Because I don\'t have time, I will go by taxi).',
    explanationFull:
      'から gives a subjective reason or cause. Japanese states the reason FIRST, followed by から, and then the result.',
    analogy:
      'Think of it as putting the "Why" before the "What". "Rainy, SO take umbrella."',
    structure: '[Reason] + から、[Result]',
    examples: [
      {
        japanese: '雨が降っていますから、傘を持って行きます。',
        annotated: {
          segments: [
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'っていますから、' },
            { text: '傘', reading: 'かさ' },
            { text: 'を' },
            { text: '持', reading: 'も' },
            { text: 'って' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          romaji: 'Ame ga futte imasu kara, kasa wo motte ikimasu.',
          english: 'Because it is raining, I will take an umbrella.',
        },
      },
      {
        japanese: 'おいしいですから、たくさん食べました。',
        annotated: {
          segments: [
            { text: 'おいしいですから、たくさん' },
            { text: '食', reading: 'た' },
            { text: 'べました。' },
          ],
          romaji: 'Oishii desu kara, takusan tabemashita.',
          english: 'Because it was delicious, I ate a lot.',
        },
      },
    ],
    commonMistake:
      'Remember Japanese places the reason clause BEFORE the result, opposite to standard English "Result because Reason" structure.',
    relatedGrammar: ['n5-g-001'],
    tags: ['reason', 'conjunction', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 17,
  },
];

export const n5Grammar: GrammarPoint[] = [
  ...n5GrammarBatch1,
  ...n5GrammarBatch2,
  ...n5GrammarBatch3,
];

export const getGrammarById = (id: string): GrammarPoint | undefined =>
  n5Grammar.find(g => g.id === id);
