import { motion } from 'framer-motion';
import { content } from '../data/content';

const cardSpans = ['md:col-span-7 md:row-span-2', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'];

export function SelectedWorks() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{content.work.label}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{content.work.headline}</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">{content.work.subtext}</p>
        </motion.div>

        <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-12">
          {content.projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href || '#work'}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)] ${cardSpans[index % cardSpans.length]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              {project.image ? (
                <img className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" src={project.image} alt="" />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(137,170,204,0.28),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(78,133,191,0.22),transparent_40%)]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--color-text-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
