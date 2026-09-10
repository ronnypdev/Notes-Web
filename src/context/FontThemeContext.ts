import { createContext } from 'react';
import { FontThemeContextValue } from '@/types';

export const FontThemeContext = createContext<FontThemeContextValue>({
  fontTheme: 'sans',
  setFontTheme: () => {},
});
