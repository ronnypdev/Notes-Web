import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'sonner';
import FontOptionsPage from '../page';
import { FontThemeContext } from '@/context/FontThemeContext';
import { FontThemeProvider } from '@/context/FontThemeProvider';
import { FontTheme } from '@/types';

vi.mock('sonner', () => ({
  toast: { success: vi.fn() },
}));

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: React.ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

function renderWithContext(fontTheme: FontTheme = 'sans') {
  const setFontTheme = vi.fn();
  render(
    <FontThemeContext.Provider value={{ fontTheme, setFontTheme }}>
      <FontOptionsPage />
    </FontThemeContext.Provider>,
  );
  return { setFontTheme };
}

describe('FontOptionsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    document.documentElement.removeAttribute('data-font');
  });

  test('renders the three font options', () => {
    renderWithContext();
    expect(
      screen.getByRole('radio', { name: /sans serif/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /^serif/i })).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /mono space/i }),
    ).toBeInTheDocument();
  });

  test('pre-selects the active font theme', () => {
    renderWithContext('mono');
    expect(screen.getByRole('radio', { name: /mono space/i })).toBeChecked();
  });

  test('Apply Changes is disabled until a different option is picked', () => {
    renderWithContext('sans');
    const apply = screen.getByRole('button', { name: 'Apply Changes' });
    expect(apply).toBeDisabled();

    fireEvent.click(screen.getByRole('radio', { name: /^serif/i }));
    expect(apply).toBeEnabled();
  });

  test('submitting applies the selected font and shows a toast', () => {
    const { setFontTheme } = renderWithContext('sans');

    fireEvent.click(screen.getByRole('radio', { name: /mono space/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Apply Changes' }));

    expect(setFontTheme).toHaveBeenCalledWith('mono');
    expect(toast.success).toHaveBeenCalledWith('Font theme updated');
  });

  test('end to end: applying a font sets data-font on <html>', () => {
    render(
      <FontThemeProvider>
        <FontOptionsPage />
      </FontThemeProvider>,
    );

    fireEvent.click(screen.getByRole('radio', { name: /^serif/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Apply Changes' }));

    expect(document.documentElement).toHaveAttribute('data-font', 'serif');
    expect(localStorage.getItem('font-theme')).toBe('serif');
    expect(
      screen.getByRole('button', { name: 'Apply Changes' }),
    ).toBeDisabled();
  });
});
