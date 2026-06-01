import { motion } from 'framer-motion';
import { content } from '../data/content';

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
                  className="rounded-full border border-[var(--color-stroke)] px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)]"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
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
