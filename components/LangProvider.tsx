'use client';

import React, { createContext, useContext, useState } from 'react';
import type { Lang } from '@/lib/copy';

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Default is always 'de' on every fresh page load. No localStorage. (CHANGE 7)
  const [lang, setLang] = useState<Lang>('de');
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
