'use client';

import React, { useState, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Key, Check, AlertCircle, Eye, EyeOff, ExternalLink, Settings2 } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const AITutorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Konnichiwa! I am your JLPT Quest Sensei. 🌸\n\nAsk me anything about N5 Japanese! For example:\n- "Why do we use は instead of が?"\n- "Explain kanji 休 like I am 5."\n- "How do I order water at a restaurant in Tokyo?"',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // API Key State
  const [customKey, setCustomKey] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [hasServerKey, setHasServerKey] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [showKeySecret, setShowKeySecret] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    // Check if server has GEMINI_API_KEY set
    fetch('/api/tutor')
      .then((res) => res.json())
      .then((data) => {
        if (data?.hasServerKey) {
          setHasServerKey(true);
        }
      })
      .catch(() => {});

    // Check localStorage for custom key
    const local = localStorage.getItem('jlpt_gemini_api_key') || '';
    if (local) {
      setSavedKey(local);
      setCustomKey(local);
    }
  }, []);

  const handleSaveKey = () => {
    const trimmed = customKey.trim();
    if (trimmed) {
      localStorage.setItem('jlpt_gemini_api_key', trimmed);
      setSavedKey(trimmed);
    } else {
      localStorage.removeItem('jlpt_gemini_api_key');
      setSavedKey('');
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleClearKey = () => {
    localStorage.removeItem('jlpt_gemini_api_key');
    setCustomKey('');
    setSavedKey('');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const quickPrompts = [
    'Why is は used instead of が?',
    'Explain the kanji 休 like I am five',
    'How do I order food at a ramen shop?',
    'Give me a mini N5 quiz!',
  ];

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          apiKey: savedKey || undefined,
        }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: `⚠️ Sensei encountered an API error:\n${data.error}\n\nPlease verify your Gemini API key in settings or in .env.local.`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Sensei is taking a short tea break. Please try again in a moment!' },
        ]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error connecting to Sensei. Please check your network or API key.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const isConfigured = hasServerKey || !!savedKey;

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm overflow-hidden max-w-3xl w-full mx-auto flex flex-col h-[700px]">
      {/* Header */}
      <div className="px-6 py-4 bg-stone-50 dark:bg-stone-950 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-100 dark:bg-red-950/60 flex items-center justify-center text-red-600 dark:text-red-400 shadow-xs">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
              Sensei AI Tutor
              {isConfigured ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Gemini Active
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold">
                  Demo Mode
                </span>
              )}
            </h3>
            <span className="text-[11px] text-stone-500 font-medium">
              N5 Specialist • ELI5 Powered
            </span>
          </div>
        </div>

        {/* API Key Toggle Button */}
        <button
          onClick={() => setShowKeyInput(!showKeyInput)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            showKeyInput
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
              : isConfigured
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100'
          }`}
        >
          <Key className="w-3.5 h-3.5" />
          <span>{isConfigured ? 'API Key Configured' : 'Set Gemini Key'}</span>
        </button>
      </div>

      {/* Expandable API Key Settings Drawer */}
      {showKeyInput && (
        <div className="bg-stone-50/90 dark:bg-stone-950/90 border-b border-stone-200 dark:border-stone-800 p-5 flex flex-col gap-3.5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                <Settings2 className="w-3.5 h-3.5 text-blue-600" />
                Gemini API Key Configuration
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                You can enter your key below for instant use, or put it in your project's{' '}
                <code className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 font-mono text-[11px]">.env.local</code> file as{' '}
                <code className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 font-mono text-[11px]">GEMINI_API_KEY=AIzaSy...</code>
              </p>
            </div>

            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 shrink-0 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800"
            >
              Get Free Key <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type={showKeySecret ? 'text' : 'password'}
                value={customKey}
                onChange={(e) => setCustomKey(e.target.value)}
                placeholder={hasServerKey ? 'Using server key (.env.local), or paste custom key...' : 'Paste your Gemini API key (AIzaSy...)'}
                className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl pl-3.5 pr-10 py-2 text-xs font-mono text-stone-900 dark:text-stone-100 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={() => setShowKeySecret(!showKeySecret)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                title={showKeySecret ? 'Hide Key' : 'Show Key'}
              >
                {showKeySecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveKey}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
              >
                {saveSuccess ? <Check className="w-3.5 h-3.5 text-white" /> : null}
                <span>{saveSuccess ? 'Saved!' : 'Save Key'}</span>
              </button>
              {savedKey && (
                <button
                  onClick={handleClearKey}
                  className="px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 text-xs font-semibold transition-colors shrink-0"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-stone-500">
            {hasServerKey && (
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <Check className="w-3 h-3" /> Server environment variable (.env.local) detected.
              </span>
            )}
            {savedKey && (
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
                <Check className="w-3 h-3" /> Custom browser key saved in local storage.
              </span>
            )}
            {!hasServerKey && !savedKey && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-3 h-3" /> No key configured yet. Sensei will respond in offline demo mode.
              </span>
            )}
          </div>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-3 max-w-[85%] ${
              m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs shadow-xs ${
                m.sender === 'user'
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                  : 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400'
              }`}
            >
              {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-tr-none'
                  : 'bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 rounded-tl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xs shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-500 text-sm flex items-center gap-2">
              <span className="animate-spin inline-block">🌸</span> Sensei is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-6 py-2.5 flex items-center gap-2 overflow-x-auto border-t border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 scrollbar-none">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        {quickPrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSend(p)}
            className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-red-400 text-stone-600 dark:text-stone-400 transition-colors shrink-0 font-medium"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Sensei a question about N5 (e.g. grammar, kanji, sentences)..."
            className="flex-1 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-stone-900 dark:text-stone-100"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-2xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
