import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation/Navigation';

export const metadata: Metadata = {
  title: 'JLPT Quest — Interactive Japanese Learning Platform',
  description: 'Gamified, visual, and intuitive JLPT N5 Japanese learning experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
        <Navigation />
        <main className="flex-1 flex flex-col max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 safe-bottom">
          {children}
        </main>
      </body>
    </html>
  );
}
