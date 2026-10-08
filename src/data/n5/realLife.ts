// ============================================================
// JLPT Quest — Real-Life Japan Scenarios
// "Japanese You'll Actually Use in Japan"
// ============================================================

import type { RealLifeScenario } from '../types';

export const n5RealLifeScenarios: RealLifeScenario[] = [
  {
    id: 'rl-konbini',
    title: 'Convenience Store (Konbini)',
    titleJP: 'コンビニ',
    category: 'Daily Life',
    icon: '🏪',
    description: 'Essential Japanese for buying snacks, paying, and heating up meals at 7-Eleven, Lawson, or FamilyMart.',
    vocabulary: [],
    level: 'N5',
    order: 1,
    phrases: [
      {
        id: 'ph-kon-1',
        japanese: '温めますか？',
        annotated: {
          segments: [
            { text: '温', reading: 'あたた' },
            { text: 'めますか？' },
          ],
          romaji: 'Atatamemasu ka?',
          english: 'Would you like this heated up? (Staff asks)',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-kon-2',
        japanese: 'お願いします。',
        annotated: {
          segments: [
            { text: 'お' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          romaji: 'Onegaishimasu.',
          english: 'Yes, please.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-kon-3',
        japanese: '袋はいりません。',
        annotated: {
          segments: [
            { text: '袋', reading: 'ふくろ' },
            { text: 'はいりません。' },
          ],
          romaji: 'Fukuro wa irimasen.',
          english: 'I do not need a plastic bag.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
    miniDialogue: [
      {
        id: 'dia-kon-1',
        japanese: '店員: いらっしゃいませ！お弁当、温めますか？',
        annotated: {
          segments: [
            { text: '店員: ' },
            { text: 'いらっしゃいませ！お' },
            { text: '弁当', reading: 'べんとう' },
            { text: '、' },
            { text: '温', reading: 'あたた' },
            { text: 'めますか？' },
          ],
          romaji: 'Ten\'in: Irasshaimase! Obentou, atatamemasu ka?',
          english: 'Staff: Welcome! Would you like your bento heated up?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-kon-2',
        japanese: '客: はい、お願いします。',
        annotated: {
          segments: [
            { text: '客: はい、お' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          romaji: 'Kyaku: Hai, onegaishimasu.',
          english: 'Customer: Yes, please.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-kon-3',
        japanese: '店員: レシートはご利用ですか？',
        annotated: {
          segments: [
            { text: '店員: レシートはご' },
            { text: '利用', reading: 'りよう' },
            { text: 'ですか？' },
          ],
          romaji: 'Ten\'in: Reshiito wa goriyou desu ka?',
          english: 'Staff: Would you like a receipt?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-kon-4',
        japanese: '客: 大丈夫です。ありがとうございます。',
        annotated: {
          segments: [
            { text: '客: ' },
            { text: '大丈夫', reading: 'だいじょうぶ' },
            { text: 'です。ありがとうございます。' },
          ],
          romaji: 'Kyaku: Daijoubu desu. Arigatou gozaimasu.',
          english: 'Customer: I\'m fine without it. Thank you.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
  },
  {
    id: 'rl-restaurant',
    title: 'Ordering at a Restaurant',
    titleJP: 'レストラン・飲食店',
    category: 'Dining',
    icon: '🍜',
    description: 'How to get a table, order delicious food, ask for water, and pay the bill.',
    vocabulary: [],
    level: 'N5',
    order: 2,
    phrases: [
      {
        id: 'ph-res-1',
        japanese: '何名様ですか？',
        annotated: {
          segments: [
            { text: '何名様', reading: 'なんめいさま' },
            { text: 'ですか？' },
          ],
          romaji: 'Nanmei-sama desu ka?',
          english: 'How many people? (Staff asks)',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-res-2',
        japanese: '一人です。/ 二人です。',
        annotated: {
          segments: [
            { text: '一人', reading: 'ひとり' },
            { text: 'です。 / ' },
            { text: '二人', reading: 'ふたり' },
            { text: 'です。' },
          ],
          romaji: 'Hitori desu. / Futari desu.',
          english: 'One person. / Two people.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-res-3',
        japanese: 'これをお願いします。',
        annotated: {
          segments: [
            { text: 'これを' },
            { text: 'お願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          romaji: 'Kore wo onegaishimasu.',
          english: 'This one, please. (Pointing at the menu)',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-res-4',
        japanese: 'お会計をお願いします。',
        annotated: {
          segments: [
            { text: 'お' },
            { text: '会計', reading: 'かいけい' },
            { text: 'をお' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          romaji: 'Okaikei wo onegaishimasu.',
          english: 'The bill, please.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
    miniDialogue: [
      {
        id: 'dia-res-1',
        japanese: '店員: いらっしゃいませ！何名様ですか？',
        annotated: {
          segments: [
            { text: '店員: いらっしゃいませ！' },
            { text: '何名様', reading: 'なんめいさま' },
            { text: 'ですか？' },
          ],
          romaji: 'Ten\'in: Irasshaimase! Nanmei-sama desu ka?',
          english: 'Staff: Welcome! How many people?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-res-2',
        japanese: '客: 二人です。',
        annotated: {
          segments: [
            { text: '客: ' },
            { text: '二人', reading: 'ふたり' },
            { text: 'です。' },
          ],
          romaji: 'Kyaku: Futari desu.',
          english: 'Customer: Two people.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-res-3',
        japanese: '客: すみません、お水を二つください。',
        annotated: {
          segments: [
            { text: '客: すみません、お' },
            { text: '水', reading: 'みず' },
            { text: 'を' },
            { text: '二', reading: 'ふた' },
            { text: 'つください。' },
          ],
          romaji: 'Kyaku: Sumimasen, omizu wo futatsu kudasai.',
          english: 'Customer: Excuse me, two glasses of water please.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
  },
  {
    id: 'rl-station',
    title: 'Train Station (Eki)',
    titleJP: '駅・電車',
    category: 'Travel & Transport',
    icon: '🚆',
    description: 'Buying train tickets, asking for platforms, and finding your way around Tokyo and Japan.',
    vocabulary: [],
    level: 'N5',
    order: 3,
    phrases: [
      {
        id: 'ph-sta-1',
        japanese: '新宿駅はどちらですか？',
        annotated: {
          segments: [
            { text: '新宿駅', reading: 'しんじゅくえき' },
            { text: 'はどちらですか？' },
          ],
          romaji: 'Shinjuku-eki wa dochira desu ka?',
          english: 'Which way is Shinjuku Station?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-sta-2',
        japanese: 'この電車は東京駅に行きますか？',
        annotated: {
          segments: [
            { text: 'この' },
            { text: '電車', reading: 'でんしゃ' },
            { text: 'は' },
            { text: '東京駅', reading: 'とうきょうえき' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'きますか？' },
          ],
          romaji: 'Kono densha wa Toukyou-eki ni ikimasu ka?',
          english: 'Does this train go to Tokyo Station?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
    miniDialogue: [],
  },
  {
    id: 'rl-hotel-directions',
    title: 'Hotel & Asking Directions',
    titleJP: 'ホテルと道案内',
    category: 'Travel',
    icon: '🏨',
    description: 'Essential survival phrases for hotel check-in, asking front desk for recommendations, and asking for directions on the street.',
    vocabulary: [],
    level: 'N5',
    order: 4,
    phrases: [
      {
        id: 'ph-hot-1',
        japanese: 'チェックインをお願いします。',
        annotated: {
          segments: [
            { text: 'チェックインをお' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          romaji: 'Chekkuin wo onegaishimasu.',
          english: 'I would like to check in, please.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-hot-2',
        japanese: '近くにコンビニはありますか？',
        annotated: {
          segments: [
            { text: '近', reading: 'ちか' },
            { text: 'くにコンビニはありますか？' },
          ],
          romaji: 'Chikaku ni konbini wa arimasu ka?',
          english: 'Is there a convenience store nearby?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-hot-3',
        japanese: 'この道をまっすぐ行って、右に曲がってください。',
        annotated: {
          segments: [
            { text: 'この' },
            { text: '道', reading: 'みち' },
            { text: 'をまっすぐ' },
            { text: '行', reading: 'い' },
            { text: 'って、' },
            { text: '右', reading: 'みぎ' },
            { text: 'に' },
            { text: '曲', reading: 'ま' },
            { text: 'がってください。' },
          ],
          romaji: 'Kono michi wo massugu itte, migi ni magatte kudasai.',
          english: 'Go straight down this street, then please turn right.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'ph-hot-4',
        japanese: '荷物を預かってもらえますか？',
        annotated: {
          segments: [
            { text: '荷物', reading: 'にもつ' },
            { text: 'を' },
            { text: '預', reading: 'あず' },
            { text: 'かってもらえますか？' },
          ],
          romaji: 'Nimotsu wo azukatte moraemasu ka?',
          english: 'Could you hold my luggage for me?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
    miniDialogue: [
      {
        id: 'dia-hot-1',
        japanese: '旅行者: すみません、駅はどこですか？',
        annotated: {
          segments: [
            { text: '旅行者: すみません、' },
            { text: '駅', reading: 'えき' },
            { text: 'はどこですか？' },
          ],
          romaji: 'Ryokousha: Sumimasen, eki wa doko desu ka?',
          english: 'Traveler: Excuse me, where is the station?',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-hot-2',
        japanese: '地元の人: あの交差点を左に曲がると、すぐ見えますよ。',
        annotated: {
          segments: [
            { text: '地元の人: あの' },
            { text: '交差点', reading: 'こうさてん' },
            { text: 'を' },
            { text: '左', reading: 'ひだり' },
            { text: 'に' },
            { text: '曲', reading: 'ま' },
            { text: 'がると、すぐ' },
            { text: '見', reading: 'み' },
            { text: 'えますよ。' },
          ],
          romaji: 'Jimoto no hito: Ano kousaten wo hidari ni magaru to, sugu miemasu yo.',
          english: 'Local: If you turn left at that intersection, you will see it right away.',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
      {
        id: 'dia-hot-3',
        japanese: '旅行者: ありがとうございます！',
        annotated: {
          segments: [
            { text: '旅行者: ありがとうございます！' },
          ],
          romaji: 'Ryokousha: Arigatou gozaimasu!',
          english: 'Traveler: Thank you very much!',
        },
        level: 'N5',
        verificationStatus: 'verified',
      },
    ],
  },
];
