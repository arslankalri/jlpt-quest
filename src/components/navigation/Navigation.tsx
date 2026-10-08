'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, BookOpen, Layers, Bot, MapPin, Award } from 'lucide-react';

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/kanji', label: 'Kanji', icon: Sparkles },
    { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
    { href: '/grammar', label: 'Grammar', icon: Layers },
    { href: '/reading', label: 'Reading', icon: BookOpen },
    { href: '/reviews', label: 'SRS Review', icon: Award },
    { href: '/real-life', label: 'Real Japan', icon: MapPin },
    { href: '/tutor', label: 'Sensei AI', icon: Bot },
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            漢
          </div>
          <span className="font-extrabold text-lg tracking-tight text-stone-900 dark:text-stone-100">
            JLPT <span className="text-red-600">Quest</span>
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 ml-1">
            N5 Edition
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400 font-bold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden nav-bottom">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};
