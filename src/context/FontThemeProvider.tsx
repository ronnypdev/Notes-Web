'use client';

import React, { useEffect, useState } from 'react';
import { FontThemeContext } from './FontThemeContext';
import { FONT_THEMES, FontTheme } from '@/types';

const STORAGE_KEY = 'font-theme';
const ATTRIBUTE = 'data-font';

function isFontTheme(value: unknown): value is FontTheme {
  return FONT_THEMES.includes(value as FontTheme);
}

// Runs before hydration so the saved font is applied on first paint.
// Keep this in sync with STORAGE_KEY / ATTRIBUTE / FONT_THEMES above.
const initScript = `
(function () {
  try {
    var f = localStorage.getItem('${STORAGE_KEY}');
    if (f && ${JSON.stringify(FONT_THEMES)}.indexOf(f) !== -1) {
      document.documentElement.setAttribute('${ATTRIBUTE}', f);
    }
  } catch (e) {}
})();
`;

export function FontThemeProvider({ children }: { children: React.ReactNode }) {
  const [fontTheme, setFontThemeState] = useState<FontTheme>('sans');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isFontTheme(stored)) setFontThemeState(stored);
    } catch {
      // localStorage unavailable (private mode, blocked storage) — keep default
    }
  }, []);

  function setFontTheme(next: FontTheme) {
    setFontThemeState(next);
    document.documentElement.setAttribute(ATTRIBUTE, next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — the in-memory choice still applies for this session
    }
  }

  return (
    <FontThemeContext.Provider value={{ fontTheme, setFontTheme }}>
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
      {children}
    </FontThemeContext.Provider>
  );
}
