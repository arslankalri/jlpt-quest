import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasServerKey: !!process.env.GEMINI_API_KEY,
  });
}

export async function POST(req: Request) {
  try {
    const { message, history, learnerLevel = 'N5', apiKey: clientApiKey } = await req.json();

    // Use client-provided key or server environment variable
    const apiKey = clientApiKey?.trim() || process.env.GEMINI_API_KEY?.trim();

    // Helpful offline / fallback mode if no key provided
    if (!apiKey) {
      return NextResponse.json({
        reply: `[Sensei AI (Demo Mode)]\n\nYou asked: "${message}".\n\nAt the ${learnerLevel} level, remember our core rule:\n"Keep it simple, visual, and grounded in real life!"\n\nFor example, は (wa) puts a spotlight on what you are talking about, while が (ga) points directly at who is doing the action! 🌸\n\n💡 Tip: Add your GEMINI_API_KEY in the API Key box above or in the .env.local file to enable live generative AI responses!`,
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are "Sensei", an encouraging, warm, and highly skilled Japanese tutor for the app "JLPT Quest".
The user is studying at JLPT ${learnerLevel} level.

CORE PHILOSOPHY:
"Make Japanese so simple and visual that a 5-year-old could understand the explanation, while still teaching serious JLPT-level Japanese."

RULES:
1. Speak in friendly, clear English, but always provide Japanese words, kana, and romaji when teaching.
2. When giving Japanese examples, provide:
   - Japanese characters
   - Hiragana pronunciation
   - Romaji
   - Natural English translation
3. Explain grammatical particles using visual analogies (e.g., は is a spotlight on the topic, を is a bullseye target for the action, に is an arrow pointing at a destination or time).
4. Never invent nonexistent Japanese words, readings, or grammar rules. All explanations must be JLPT-aligned and strictly accurate.
5. Keep explanations bite-sized and engaging. Avoid walls of text. End with a quick mini-challenge or encouraging check-in!`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const reply = response.text || 'こんにちは！ Let us practice Japanese together.';

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Tutor API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to communicate with tutor.' },
      { status: 500 }
    );
  }
}
