import { content } from '../data/content';

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-5 z-40 flex justify-center px-4">
      <nav className="flex items-center gap-2 rounded-full border border-[var(--color-stroke)] bg-[var(--color-bg)]/80 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a
          href="#top"
          className="rounded-full bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold tracking-[0.25em] text-[var(--color-text-primary)] transition hover:border-[var(--color-muted)]"
          aria-label={content.brand.name}
        >
          {content.brand.initials}
        </a>
        <div className="flex items-center gap-1">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
