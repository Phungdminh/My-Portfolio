import { motion } from 'framer-motion';
import { content } from '../data/content';

const workSections = [
  {
    title: 'From work',
    items: [
      {
        title: 'POD Idea Creator Agent',
        type: 'Agentic Research Workflow',
        description:
          'An agentic research workflow that targets a specific niche and scrapes multiple sources simultaneously: Meta Ads Library, Google Images, Google Shopping, Pinterest, and Amazon to generate 5 product types with 5 unique ideas each.',
        status: 'Built at POD company',
      },
    ],
  },
  {
    title: 'Side project',
    items: [
      {
        title: 'Staycation Bay',
        type: 'Content Automation System',
        description:
          'An end-to-end agentic workflow that generates, reviews, and publishes content across multiple social platforms without human intervention.',
        status: 'In progress',
      },
      {
        title: 'SkillForge VN',
        type: 'Tools & Projects Platform',
        description:
          'A personal platform housing everything built from real business problems: automation pipelines, internal tools, and web projects. From POD product upload automation to a real estate landing page, all tools are documented, reusable, and built for scale.',
        status: 'In progress',
      },
    ],
  },
];

export function RecentWork() {
  if (!content.recentWork) {
    return null;
  }

  return (
    <section id="recent-work" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="overflow-hidden rounded-[2.5rem] border border-[var(--color-stroke)] bg-[var(--color-surface)]/70 p-8 shadow-2xl shadow-black/10 sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">My Recent Work</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">Vibe code</p>
          </div>

          <div className="relative mt-10 min-h-72 overflow-hidden rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-bg)] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(137,170,204,0.2),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(78,133,191,0.18),transparent_40%)]" />
            <div className="relative grid h-full min-h-56 gap-4 md:grid-cols-2">
              {workSections.map((section) => (
                <div
                  key={section.title}
                  className="min-h-56 rounded-3xl border border-[var(--color-stroke)] bg-[var(--color-surface)]/70 p-5 shadow-xl shadow-black/5 backdrop-blur sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">{section.title}</p>
                  <div className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <article key={item.title} className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-bg)]/60 p-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">{item.title}</h3>
                          <span className="rounded-full border border-[var(--color-stroke)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">{item.type}</p>
                        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
