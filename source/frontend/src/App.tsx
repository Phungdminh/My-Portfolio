import { useEffect, useState } from 'react';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { SelectedWorks } from './components/SelectedWorks';
import { Stats } from './components/Stats';
import { content } from './data/content';

function getSelectedCategory(hash: string) {
  for (const project of content.projects) {
    const category = project.categories?.find((item) => item.href === hash);

    if (category) {
      return { project, category };
    }
  }

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);
  const selectedCategory = getSelectedCategory(currentHash);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentHash !== '#work') {
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [currentHash]);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <main>
        {selectedCategory ? (
          <section className="flex min-h-screen items-center px-5 py-32 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-[var(--color-stroke)] bg-[var(--color-surface)] p-8 shadow-2xl shadow-black/20 sm:p-12">
              <a href="#work" className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] transition hover:text-[var(--color-text-primary)]">
                Back to work
              </a>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{selectedCategory.project.title}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{selectedCategory.category.label}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Placeholder page for {selectedCategory.category.label}. Project details, case studies, visuals, and results can be added here later.
              </p>
            </div>
          </section>
        ) : (
          <>
            <Hero />
            <Stats />
            <SelectedWorks />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}
