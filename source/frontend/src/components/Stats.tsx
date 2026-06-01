import { motion } from 'framer-motion';
import { content } from '../data/content';

export function Stats() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {content.stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`} className="rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/60 p-8">
            <p className="font-serif text-6xl italic tracking-[-0.05em] text-[var(--color-text-primary)] sm:text-7xl">{stat.value}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
