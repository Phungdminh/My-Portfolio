import { motion } from 'framer-motion';
import { content } from '../data/content';

export function Certificates() {
  const certificates = content.certificates;

  if (!certificates) return null;

  return (
    <section id="certificates" className="px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/60 p-8 sm:p-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{certificates.label}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certificates.items.map((certificate) => (
            <article key={certificate.title} className="rounded-2xl border border-[var(--color-stroke)] p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">{certificate.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-primary)]">{certificate.result}</p>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{certificate.issued}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
