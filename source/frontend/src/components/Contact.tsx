import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { content } from '../data/content';

function getIcon(label: string, href: string): ReactNode {
  const key = `${label} ${href}`.toLowerCase();

  if (key.includes('mailto') || key.includes('email') || key.includes('mail')) {
    return (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2.4V17h16V8.4l-8 5-8-5ZM5.5 7l6.5 4 6.5-4h-13Z" />
    );
  }
  if (key.includes('linkedin')) {
    return (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9Z" />
    );
  }
  if (key.includes('github')) {
    return (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    );
  }
  if (key.includes('twitter') || key.includes('x.com') || key === 'x') {
    return (
      <path d="M17.53 3H21l-7.19 8.21L22 21h-6.56l-4.28-5.6L6.3 21H3l7.69-8.78L2.5 3h6.6l3.87 5.12L17.53 3Zm-1.15 16h1.84L7.71 4.94H5.74L16.38 19Z" />
    );
  }
  if (key.includes('tel:') || key.includes('phone')) {
    return (
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1l-2.2 2.3Z" />
    );
  }
  // Fallback: generic external-link icon
  return (
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
  );
}

export function Contact() {
  return (
    <footer id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2.5rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/70 p-8 sm:p-12 lg:p-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{content.nav.at(-1)?.label}</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{content.contact.headline}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{content.contact.subtext}</p>
          </div>
          {content.contact.links.length > 0 ? (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {content.contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-stroke)] text-[var(--color-text-primary)] transition hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)]"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    {getIcon(link.label, link.href)}
                  </svg>
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-16 border-t border-[var(--color-stroke)] pt-6 text-sm text-[var(--color-muted)]">{content.footer.text}</div>
      </motion.div>
    </footer>
  );
}
