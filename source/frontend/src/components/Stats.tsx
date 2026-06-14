import { motion } from 'framer-motion';
import { content } from '../data/content';

export function Stats() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {content.capabilities.map((capability) => (
          <div key={capability.title} className="rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/60 p-8">
            <p className="font-serif text-5xl italic tracking-[-0.05em] text-[var(--color-text-primary)] sm:text-6xl">{capability.title}</p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">{capability.focusLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capability.focusItems.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--color-stroke)] px-3 py-1 text-sm text-[var(--color-text-primary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">{capability.toolsLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capability.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-muted)]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">{capability.impactLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capability.impact.map((impact) => (
                    <span key={impact} className="rounded-full border border-[var(--color-stroke)] px-3 py-1 text-sm leading-6 text-[var(--color-text-primary)]">
                      {impact}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
