import { motion } from 'framer-motion';
import { content } from '../data/content';

export function BackgroundStory() {
  const story = content.backgroundStory;

  if (!story) return null;

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/60 p-8 sm:p-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">{story.label}</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{story.headline}</h2>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">{story.body}</p>
      </motion.div>
    </section>
  );
}
