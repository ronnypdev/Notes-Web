export const FONT_THEMES = ['sans', 'serif', 'mono'] as const;

export type FontTheme = (typeof FONT_THEMES)[number];

export interface FontThemeContextValue {
  fontTheme: FontTheme;
  setFontTheme: (fontTheme: FontTheme) => void;
}
