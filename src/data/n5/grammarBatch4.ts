// ============================================================
// JLPT Quest — N5 Grammar Data (Batch 4: Points 36–45)
// Source: JLPT-aligned references (Genki I & Minna no Nihongo I)
// Verification: complete 45 definitive N5 grammar points
// ============================================================

import type { GrammarPoint } from '../types';

export const n5GrammarBatch4: GrammarPoint[] = [
  {
    id: 'n5-g-036',
    pattern: 'Verb1[て-form] + から + Verb2',
    title: '〜てから (te kara) — After Doing A, Then B',
    titleShort: '〜てから',
    level: 'N5',
    explanationSimple:
      'Want to say that you do something AFTER finishing another action first? Use 〜てから!\n\nてを あらってから、ごはんを たべます = After washing my hands, I eat a meal.',
    explanationFull:
      'Verb[て-form] + から indicates that action 2 takes place only after action 1 has completed. Unlike plain 〜て, which simply chains actions together, 〜てから emphasizes the sequential condition that Action 1 must finish before Action 2 starts.',
    analogy:
      'Think of unlocking a gate: You must turn the key first (Action 1), and ONLY THEN can you walk through the doorway (Action 2).',
    structure: 'Verb1[て-form] + から + Verb2',
    examples: [
      {
        japanese: '手を洗ってから、ご飯を食べましょう。',
        annotated: {
          segments: [
            { text: '手', reading: 'て' },
            { text: 'を' },
            { text: '洗', reading: 'あら' },
            { text: 'ってから、' },
            { text: 'ご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べましょう。' },
          ],
          romaji: 'Te wo aratte kara, gohan wo tabemashou.',
          english: 'Let’s eat after washing our hands.',
        },
      },
      {
        japanese: '宿題をしてから、ゲームをします。',
        annotated: {
          segments: [
            { text: '宿題', reading: 'しゅくだい' },
            { text: 'をしてから、ゲームをします。' },
          ],
          romaji: 'Shukudai wo shite kara, geemu wo shimasu.',
          english: 'I will play games after doing my homework.',
        },
      },
    ],
    commonMistake:
      'Do not confuse this with Noun + から (which means "from a place/time"). With verbs, it MUST attach to the て-form to mean "after doing".',
    relatedGrammar: ['n5-g-007', 'n5-g-016'],
    tags: ['sequence', 'te-form', 'time', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 36,
  },
  {
    id: 'n5-g-037',
    pattern: 'Verb / Adjective / Noun + の + とき (toki)',
    title: '〜とき (toki) — When / At the Time When',
    titleShort: '〜とき',
    level: 'N5',
    explanationSimple:
      'Use とき (時) whenever you want to say "when..." something happens or was happening.\n\nこどもの とき = When I was a child\nひまな とき = When I am free',
    explanationFull:
      'とき functions like "when" in English. It follows verbs (dictionary form for present/habitual, past tense for completed), い-adjectives, な-adjectives (attach な), and nouns (attach の).',
    analogy:
      'Think of placing a timestamp sticker on a memory: "AT THIS EXACT MOMENT, here is what happened."',
    structure: '[Verb (plain) / い-adj / な-adj+な / Noun+の] + とき',
    examples: [
      {
        japanese: '時間があるとき、何をしますか？',
        annotated: {
          segments: [
            { text: '時間', reading: 'じかん' },
            { text: 'があるとき、' },
            { text: '何', reading: 'なに' },
            { text: 'をしますか？' },
          ],
          romaji: 'Jikan ga aru toki, nani wo shimasu ka?',
          english: 'When you have free time, what do you do?',
        },
      },
      {
        japanese: '子どものとき、日本に住んでいました。',
        annotated: {
          segments: [
            { text: '子ども', reading: 'こども' },
            { text: 'のとき、' },
            { text: '日本', reading: 'にほん' },
            { text: 'に' },
            { text: '住', reading: 'す' },
            { text: 'んでいました。' },
          ],
          romaji: 'Kodomo no toki, Nihon ni sunde imashita.',
          english: 'When I was a child, I lived in Japan.',
        },
      },
    ],
    commonMistake:
      'Remember that nouns require の (子どものとき, NOT 子どもとき) and な-adjectives require な (暇なとき, NOT 暇とき).',
    relatedGrammar: ['n5-g-015', 'n5-g-016'],
    tags: ['time', 'conjunction', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 37,
  },
  {
    id: 'n5-g-038',
    pattern: 'Plain form / な-adj+な / Noun+な + ので (node)',
    title: '〜ので (node) — Because / Since (Polite Reason)',
    titleShort: '〜ので',
    level: 'N5',
    explanationSimple:
      'Want to give a polite, natural explanation of WHY something happened? Use ので!\n\nあめが ふっているので、でかけません = Because it is raining, I will not go out.',
    explanationFull:
      '〜ので expresses cause and reason, similar to 〜から. However, while から states a subjective, personal reason or opinion, ので sounds softer, more objective, and noticeably more polite. It is preferred when apologizing or stating external circumstances.',
    analogy:
      'Think of holding up an objective weather forecast: "As you can see by these natural circumstances, this is why."',
    structure: '[Verb / い-adj (plain)] + ので | [な-adj / Noun] + な + ので',
    examples: [
      {
        japanese: 'バスが来なかったので、遅刻しました。',
        annotated: {
          segments: [
            { text: 'バスが' },
            { text: '来', reading: 'こ' },
            { text: 'なかったので、' },
            { text: '遅刻', reading: 'ちこく' },
            { text: 'しました。' },
          ],
          romaji: 'Basu ga konakatta node, chikoku shimashita.',
          english: 'Because the bus did not come, I was late.',
        },
      },
      {
        japanese: '頭が痛いので、早く帰ります。',
        annotated: {
          segments: [
            { text: '頭', reading: 'あたま' },
            { text: 'が' },
            { text: '痛', reading: 'いた' },
            { text: 'いので、' },
            { text: '早', reading: 'はや' },
            { text: 'く' },
            { text: '帰', reading: 'かえ' },
            { text: 'ります。' },
          ],
          romaji: 'Atama ga itai node, hayaku kaerimasu.',
          english: 'Because I have a headache, I am going home early.',
        },
      },
    ],
    commonMistake:
      'For nouns and な-adjectives, do NOT forget な before ので (病気なので, NOT 病気ので).',
    relatedGrammar: ['n5-g-017'],
    tags: ['reason', 'polite', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 38,
  },
  {
    id: 'n5-g-039',
    pattern: 'Verb[て-form] + も / い-adj[〜くても] / な-adj[〜でも]',
    title: '〜ても (te mo) — Even If / Even Though',
    titleShort: '〜ても',
    level: 'N5',
    explanationSimple:
      'To say "even if..." or "even though...", change the word to its て-form and add も!\n\nあめが ふっても、いきます = Even if it rains, I will go.',
    explanationFull:
      '〜ても introduces a concessive condition where the second clause occurs regardless of the first clause. For い-adjectives, replace い with くても (高くても = even if expensive). For nouns and な-adjectives, use でも.',
    analogy:
      'Think of an umbrella shield: Rain hits it, BUT you keep walking forward unaffected.',
    structure: 'Verb[て]も | い-adj[〜くて]も | Noun/な-adj[で]も',
    examples: [
      {
        japanese: '雨が降っても、散歩します。',
        annotated: {
          segments: [
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'っても、' },
            { text: '散歩', reading: 'さんぽ' },
            { text: 'します。' },
          ],
          romaji: 'Ame ga futtemo, sanpo shimasu.',
          english: 'Even if it rains, I will take a walk.',
        },
      },
      {
        japanese: '高くても、この辞書を買いたいです。',
        annotated: {
          segments: [
            { text: '高', reading: 'たか' },
            { text: 'くても、この' },
            { text: '辞書', reading: 'じしょ' },
            { text: 'を' },
            { text: '買', reading: 'か' },
            { text: 'いたいです。' },
          ],
          romaji: 'Takakutemo, kono jisho wo kaitai desu.',
          english: 'Even if it is expensive, I want to buy this dictionary.',
        },
      },
    ],
    commonMistake:
      'Make sure you conjugate the first part to the て-form correctly before attaching も. For verbs ending in ぐ or む/ぶ/ぬ, remember it becomes 〜でも (飲んでも, 読んでも).',
    relatedGrammar: ['n5-g-012'],
    tags: ['conditional', 'te-form', 'contrast'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 39,
  },
  {
    id: 'n5-g-040',
    pattern: 'Verb ます-stem + やすい / にくい',
    title: '〜やすい / 〜にくい — Easy to Do / Hard to Do',
    titleShort: '〜やすい/にくい',
    level: 'N5',
    explanationSimple:
      'Drop ます from a verb and snap on やすい for "easy to do", or にくい for "hard to do"!\n\nのみやすい = easy to drink\nよみにくい = hard to read',
    explanationFull:
      'Attaching やすい (easy) or にくい (difficult) to the verb ます-stem turns the verb into an い-adjective describing how easy or difficult that action is to perform. It conjugates just like any regular い-adjective (やすい → やすくない, やすかった).',
    analogy:
      'Think of snapping on a difficulty slider: Green label = やすい (easy mode), Red label = にくい (hard mode).',
    structure: 'Verb[ます-stem] + やすい / にくい',
    examples: [
      {
        japanese: 'このペンはとても書きやすいです。',
        annotated: {
          segments: [
            { text: 'このペンはとても' },
            { text: '書', reading: 'か' },
            { text: 'きやすいです。' },
          ],
          romaji: 'Kono pen wa totemo kakiyasui desu.',
          english: 'This pen is very easy to write with.',
        },
      },
      {
        japanese: 'あの漢字は覚えにくいです。',
        annotated: {
          segments: [
            { text: 'あの' },
            { text: '漢字', reading: 'かんじ' },
            { text: 'は' },
            { text: '覚', reading: 'おぼ' },
            { text: 'えにくいです。' },
          ],
          romaji: 'Ano kanji wa oboenikui desu.',
          english: 'That kanji is hard to remember.',
        },
      },
    ],
    commonMistake:
      'Always use the ます-stem (drop ます), not the dictionary form! 書くやすい is wrong; it must be 書きやすい.',
    relatedGrammar: ['n5-g-006', 'n5-g-028'],
    tags: ['verb-stem', 'adjective', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 40,
  },
  {
    id: 'n5-g-041',
    pattern: 'Verb ます-stem + ましょう / ましょうか',
    title: '〜ましょう / 〜ましょうか — Let’s / Shall We?',
    titleShort: '〜ましょう/か',
    level: 'N5',
    explanationSimple:
      'Want to suggest doing something together? Drop ます and say ましょう ("Let\'s do it!").\nWant to ask "Shall we?" or offer help ("Shall I help?")? Add か → ましょうか!',
    explanationFull:
      'Verb ます-stem + ましょう is the polite volitional form used to propose an action with someone ("Let\'s..."). Adding か makes it an invitation ("Shall we...?") or an offer of assistance ("Shall I carry that for you?").',
    analogy:
      'Think of extending a hand to your friend: "Come on, let\'s go together!" (ましょう), or "Would you like a hand?" (手伝いましょうか).',
    structure: 'Verb[ます-stem] + ましょう / ましょうか',
    examples: [
      {
        japanese: '一緒に昼ご飯を食べましょう。',
        annotated: {
          segments: [
            { text: '一緒', reading: 'いっしょ' },
            { text: 'に' },
            { text: '昼', reading: 'ひる' },
            { text: 'ご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べましょう。' },
          ],
          romaji: 'Issho ni hirugohan wo tabemashou.',
          english: 'Let’s eat lunch together.',
        },
      },
      {
        japanese: '窓を開けましょうか？',
        annotated: {
          segments: [
            { text: '窓', reading: 'まど' },
            { text: 'を' },
            { text: '開', reading: 'あ' },
            { text: 'けましょうか？' },
          ],
          romaji: 'Mado wo akemashou ka?',
          english: 'Shall I open the window?',
        },
      },
    ],
    commonMistake:
      'When offering help, ましょうか asks if the other person wants you to do it. Respond politely with "お願いします" (Please) or "大丈夫です" (I am fine).',
    relatedGrammar: ['n5-g-042'],
    tags: ['invitation', 'polite', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 41,
  },
  {
    id: 'n5-g-042',
    pattern: 'Verb ます-stem + ませんか (masen ka)',
    title: '〜ませんか (masen ka) — Won’t You? (Polite Invitation)',
    titleShort: '〜ませんか',
    level: 'N5',
    explanationSimple:
      'The most polite and natural way to invite someone to do something in Japanese is using a negative question: 〜ませんか ("Won\'t you join me?").\n\nおちゃを のみませんか = Would you like to have tea?',
    explanationFull:
      'Verb ます-stem + ませんか invites the listener by asking negatively, which is culturally polite because it gives them an easy, pressure-free way to decline without awkwardness. It is softer and more courteous than 〜ましょう.',
    analogy:
      'Think of a gentle invitation on an elegant card: "Would you care to join me?" It leaves all pressure at the door.',
    structure: 'Verb[ます-stem] + ませんか',
    examples: [
      {
        japanese: '今週末、映画を見に行きませんか？',
        annotated: {
          segments: [
            { text: '今週末', reading: 'こんしゅうまつ' },
            { text: '、' },
            { text: '映画', reading: 'えいが' },
            { text: 'を' },
            { text: '見', reading: 'み' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'きませんか？' },
          ],
          romaji: 'Konshuumatsu, eiga wo mi ni ikimasen ka?',
          english: 'Won’t you go see a movie with me this weekend?',
        },
      },
      {
        japanese: 'ちょっと休みませんか？',
        annotated: {
          segments: [
            { text: 'ちょっと' },
            { text: '休', reading: 'やす' },
            { text: 'みませんか？' },
          ],
          romaji: 'Chotto yasumimasen ka?',
          english: 'Shall we take a short break?',
        },
      },
    ],
    commonMistake:
      'Even though it ends in ません (negative), this is NOT a refusal—it is an enthusiastic, polite invitation!',
    relatedGrammar: ['n5-g-041'],
    tags: ['invitation', 'polite', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 42,
  },
  {
    id: 'n5-g-043',
    pattern: 'Person に + Noun を + あげます / もらいます / くれます',
    title: 'あげる・もらう・くれる — Giving and Receiving',
    titleShort: 'あげる/もらう/くれる',
    level: 'N5',
    explanationSimple:
      'Japanese has precise rules for giving and receiving:\n- あげます = I give to someone else\n- くれます = Someone gives to ME\n- もらいます = I receive from someone',
    explanationFull:
      'These three verbs define relative social direction:\n1. あげる: Giver gives outward (I/in-group → you/out-group).\n2. くれる: Giver gives inward (someone → me/my family).\n3. もらう: Receiver gets from giver (marked with に or から).',
    analogy:
      'Think of arrows: あげる shoots an arrow outward away from you. くれる points an arrow directly toward your heart. もらう reaches out both hands to receive a gift.',
    structure: '[Giver] が [Receiver] に [Item] を あげます / くれます / もらいます',
    examples: [
      {
        japanese: '友達に誕生日プレゼントをあげました。',
        annotated: {
          segments: [
            { text: '友達', reading: 'ともだち' },
            { text: 'に' },
            { text: '誕生日', reading: 'たんじょうび' },
            { text: 'プレゼントをあげました。' },
          ],
          romaji: 'Tomodachi ni tanjoubi purezento wo agemashita.',
          english: 'I gave a birthday present to my friend.',
        },
      },
      {
        japanese: '田中さんが私に本をくれました。',
        annotated: {
          segments: [
            { text: '田中', reading: 'たなか' },
            { text: 'さんが' },
            { text: '私', reading: 'わたし' },
            { text: 'に' },
            { text: '本', reading: 'ほん' },
            { text: 'をくれました。' },
          ],
          romaji: 'Tanaka-san ga watashi ni hon wo kuremashita.',
          english: 'Mr. Tanaka gave me a book.',
        },
      },
    ],
    commonMistake:
      'NEVER say "田中さんが私にあげました". When someone gives to YOU, you MUST use くれました!',
    relatedGrammar: ['n5-g-002', 'n5-g-003'],
    tags: ['giving-receiving', 'verbs', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 43,
  },
  {
    id: 'n5-g-044',
    pattern: 'Verb[dictionary form] + と (to)',
    title: '〜と (to) — Whenever / When (Natural Consequence)',
    titleShort: '〜と',
    level: 'N5',
    explanationSimple:
      'Use と when one action AUTOMATICALLY leads to another, like a natural law or directions!\n\nみぎに まがると、えきが あります = When you turn right, the station will be there.',
    explanationFull:
      'Verb (dictionary form) + と indicates an inevitable, natural, or automatic result. Whenever condition A happens, result B always follows (like operating machines, seasons changing, or following street directions).',
    analogy:
      'Think of an automatic switch or a physics law: Push the button → light turns on with 100% certainty.',
    structure: 'Verb[dictionary form] + と + [Natural consequence]',
    examples: [
      {
        japanese: 'このボタンを押すと、切符が出ます。',
        annotated: {
          segments: [
            { text: 'このボタンを' },
            { text: '押', reading: 'お' },
            { text: 'すと、' },
            { text: '切符', reading: 'きっぷ' },
            { text: 'が' },
            { text: '出', reading: 'で' },
            { text: 'ます。' },
          ],
          romaji: 'Kono botan wo osu to, kippu ga demasu.',
          english: 'When you press this button, the ticket comes out.',
        },
      },
      {
        japanese: '春になると、桜が咲きます。',
        annotated: {
          segments: [
            { text: '春', reading: 'はる' },
            { text: 'になると、' },
            { text: '桜', reading: 'さくら' },
            { text: 'が' },
            { text: '咲', reading: 'さ' },
            { text: 'きます。' },
          ],
          romaji: 'Haru ni naru to, sakura ga sakimasu.',
          english: 'When spring arrives, cherry blossoms bloom.',
        },
      },
    ],
    commonMistake:
      'Because と expresses automatic results, you cannot put personal requests, permissions, or invitations (like 〜てください or 〜ましょう) in the second half of the sentence.',
    relatedGrammar: ['n5-g-037'],
    tags: ['conditional', 'directions', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 44,
  },
  {
    id: 'n5-g-045',
    pattern: 'まだ + Verb[て-form] + いません',
    title: 'まだ〜ていません — Have Not Yet Done',
    titleShort: 'まだ〜ていません',
    level: 'N5',
    explanationSimple:
      'To say you "haven\'t done something yet" (but you plan to do it soon), say まだ followed by the negative て-form!\n\nまだ たべていません = I have not eaten yet.',
    explanationFull:
      'まだ + Verb[て-form] + いません indicates an incomplete action that has not occurred yet up to the present moment, with the expectation that it will happen later. In Japanese, answering "Did you eat?" with "食べませんでした" sounds like you didn\'t eat in the past and won\'t; whereas "まだ食べていません" means "Not yet".',
    analogy:
      'Think of an hourglass that is still running: The sand has not dropped yet, but it is expected to soon.',
    structure: 'まだ + Verb[て-form] + いません',
    examples: [
      {
        japanese: 'まだ昼ご飯を食べていません。',
        annotated: {
          segments: [
            { text: 'まだ' },
            { text: '昼', reading: 'ひる' },
            { text: 'ご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べていません。' },
          ],
          romaji: 'Mada hirugohan wo tabete imasen.',
          english: 'I have not eaten lunch yet.',
        },
      },
      {
        japanese: '宿題はまだ終わっていません。',
        annotated: {
          segments: [
            { text: '宿題', reading: 'しゅくだい' },
            { text: 'はまだ' },
            { text: '終', reading: 'お' },
            { text: 'わっていません。' },
          ],
          romaji: 'Shukudai wa mada owatte imasen.',
          english: 'My homework is not finished yet.',
        },
      },
    ],
    commonMistake:
      'Do not say "まだ食べませんでした" when asked if you finished something. Always use "まだ食べていません".',
    relatedGrammar: ['n5-g-018'],
    tags: ['negative', 'te-form', 'time', 'essential'],
    source: 'JLPT-aligned curated list',
    verificationStatus: 'verified',
    order: 45,
  },
];
