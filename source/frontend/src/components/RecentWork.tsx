import { motion } from 'framer-motion';
import { content } from '../data/content';

type CaseStudyPoint = {
  label: string;
  text: string;
};

type WorkItem = {
  title: string;
  type?: string;
  description: string;
  improvement?: string;
  caseStudy?: CaseStudyPoint[];
  href?: string;
};

type WorkGroup = {
  title: string;
  sections: {
    title: string;
    items: WorkItem[];
    emptyState?: string;
  }[];
};

const groupThemes = [
  {
    shell: 'border-[#2563eb]/30 bg-[#eff6ff]/90 shadow-[#2563eb]/10',
    glow: 'bg-[radial-gradient(circle_at_10%_0%,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_90%_100%,rgba(14,165,233,0.16),transparent_42%)]',
    label: 'text-[#1d4ed8]',
    section: 'border-[#2563eb]/20 bg-white/70',
    card: 'border-[#2563eb]/20 bg-[#f8fbff]/90',
    caseStudy: 'border-[#2563eb]/15 bg-white/80',
    link: 'border-[#2563eb]/30 bg-[#dbeafe] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white',
  },
  {
    shell: 'border-[#f97316]/30 bg-[#fff7ed]/90 shadow-[#f97316]/10',
    glow: 'bg-[radial-gradient(circle_at_12%_0%,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_90%_100%,rgba(168,85,247,0.16),transparent_42%)]',
    label: 'text-[#c2410c]',
    section: 'border-[#f97316]/20 bg-white/70',
    card: 'border-[#f97316]/20 bg-[#fffaf5]/90',
    caseStudy: 'border-[#f97316]/15 bg-white/80',
    link: 'border-[#f97316]/30 bg-[#ffedd5] text-[#c2410c] hover:bg-[#c2410c] hover:text-white',
  },
];

const workGroups: WorkGroup[] = [
  {
    title: 'From work',
    sections: [
      {
        title: 'Tools',
        items: [
          {
            title: 'Mockup Prompt',
            type: 'Automated Mockup Generator',
            description:
              'An automation tool that runs prompt workflows from the ChatGPT app, applies multiple pattern prompts to a base product image, and generates finished mockups.',
            caseStudy: [
              {
                label: 'Problem',
                text: 'Creating many product mockups from one base image in the ChatGPT app was slow and repetitive.',
              },
              {
                label: 'Built',
                text: 'An automation tool that runs prompt workflows from the ChatGPT app and applies multiple pattern prompts to generate finished mockups.',
              },
              {
                label: 'Impact',
                text: 'Turned a manual ChatGPT prompt workflow into a faster, repeatable mockup generation flow.',
              },
            ],
          },
        ],
      },
      {
        title: 'Website',
        items: [
          {
            title: 'POD Idea Creator Agent',
            type: 'Agentic Research Workflow',
            description:
              'An agentic research workflow that targets a specific niche, uses winning ads data from Facebook Ads as idea signals, and scrapes multiple sources simultaneously: Meta Ads Library, Google Images, Google Shopping, Pinterest, and Amazon to generate 5 idea types with 3 unique ideas each.',
          },
          {
            title: 'VietMerch POD Trend Engine',
            type: 'Source-Grounded Trend-to-Brief Engine',
            description:
              'A web tool for a print-on-demand in the music and movie niche, built on one rule: no hallucination. It only reports events that come back from a real API call with a working source link movie releases, band tours, new albums, and classic films. Then turns each verified event into a design brief for the team. Facts like names, dates, and venues are copied straight from the source and locked, while only slogans and taglines are AI-written, so the team never designs merch around an event that did not happen.',
          },
          {
            title: 'CS Dashboard',
            description:
              'Internal customer-service dashboard for e-commerce support, combining multi-inbox triage, order lookup, AI-assisted draft replies, human-approved sending, and shipment tracking in a FastAPI/React stack.',
          },
        ],
      },
    ],
  },
  {
    title: 'Side project',
    sections: [
      {
        title: 'Tools',
        items: [
          {
            title: 'Staycation Bay',
            type: 'Content Automation Tool',
            description:
              'A tool that can automatically create content, review it, and publish both text and video into multi social media: Facebook, Instagram, and Threads.',
            caseStudy: [
              {
                label: 'Problem',
                text: 'Social content planning, review, and publishing took too much manual coordination across platforms.',
              },
              {
                label: 'Built',
                text: 'A tool that generates, reviews, schedules, and prepares staycation content for multiple social channels.',
              },
              {
                label: 'Impact',
                text: 'Reduced repetitive content operations and created a clearer workflow from idea to published post.',
              },
            ],
          },
        ],
      },
      {
        title: 'Website',
        items: [
          {
            title: 'F1 Showcase',
            type: '3D Sports Showcase Website',
            href: 'https://f1-showcase-two.vercel.app/',
            description:
              'An animation-first Formula 1 showcase website with a 3D hero, team pages, race calendar, news, and standings powered by live F1 data.',
          },
          {
            title: 'Skill Concierge',
            type: 'Tools & Projects Website',
            href: 'https://skill-concierge.vercel.app/',
            description:
              'A personal website housing everything built from real business problems: automation pipelines, internal tools, and web projects. From POD product upload automation to a real estate landing page, all tools are documented, reusable, and built for scale.',
          },
        ],
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
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">Vibe coding</p>
          </div>

          <div className="mt-10 space-y-6">
              {workGroups.map((group, groupIndex) => {
                const theme = groupThemes[groupIndex % groupThemes.length];

                return (
                  <div key={group.title}>
                    <h3 className={`text-xs font-semibold uppercase tracking-[0.35em] ${theme.label}`}>{group.title}</h3>
                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                        {group.sections.map((section) => (
                          <div key={section.title} className={`rounded-2xl border p-4 sm:p-5 ${theme.section}`}>
                            <h4 className={`text-[0.7rem] font-semibold uppercase tracking-[0.3em] ${theme.label}`}>{section.title}</h4>
                            <div className="mt-4 space-y-4">
                              {section.items.length > 0 ? (
                                section.items.map((item) => (
                                  <article key={item.title} className={`rounded-2xl border p-5 shadow-sm shadow-black/5 ${theme.card}`}>
                                    <div className="flex items-start justify-between gap-4">
                                      <h5 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">{item.title}</h5>
                                      {item.href ? (
                                        <a
                                          href={item.href}
                                          aria-label={`Open ${item.title} website`}
                                          title="Open website"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border shadow-lg shadow-black/10 transition ${theme.link}`}
                                        >
                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                                            <path d="M12 3h7v7" />
                                            <path d="M19 3 10 12" />
                                            <path d="M5 7v12h12" />
                                          </svg>
                                        </a>
                                      ) : null}
                                    </div>
                                    {item.type ? (
                                      <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.25em] ${theme.label}`}>{item.type}</p>
                                    ) : null}
                                    {'improvement' in item && <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.improvement}</p>}
                                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                                    {item.caseStudy ? (
                                      <dl className={`mt-5 grid gap-3 rounded-2xl border p-4 ${theme.caseStudy}`}>
                                        {item.caseStudy.map((point) => (
                                          <div key={point.label} className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:gap-3">
                                            <dt className={`text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${theme.label}`}>
                                              {point.label}
                                            </dt>
                                            <dd className="text-sm leading-6 text-[var(--color-muted)]">{point.text}</dd>
                                          </div>
                                        ))}
                                      </dl>
                                    ) : null}
                                  </article>
                                ))
                              ) : (
                                <p className={`rounded-2xl border border-dashed p-5 text-sm leading-7 text-[var(--color-muted)] ${theme.caseStudy}`}>
                                  {section.emptyState ?? 'Case studies will be added here when a relevant project is ready to share.'}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                );
              })}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
