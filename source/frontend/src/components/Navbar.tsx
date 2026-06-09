type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const nextThemeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <header className="fixed right-4 top-5 z-40 sm:right-8">
      <button
        type="button"
        aria-label={nextThemeLabel}
        aria-pressed={theme === 'light'}
        onClick={onToggleTheme}
        className="rounded-full border border-[var(--color-stroke)] bg-[var(--color-bg)]/80 px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)] shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-[var(--color-surface)]"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
