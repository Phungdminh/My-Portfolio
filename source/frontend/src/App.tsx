import { useEffect, useState } from 'react';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { SelectedWorks } from './components/SelectedWorks';
import { Stats } from './components/Stats';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SelectedWorks />
        <Contact />
      </main>
    </div>
  );
}
