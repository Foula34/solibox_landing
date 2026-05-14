import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Product } from './components/Product';
import { Benefits } from './components/Benefits';
import { Earnings } from './components/Earnings';
import { Impact } from './components/Impact';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // One shared IntersectionObserver for every [data-reveal] element.
    // Elements already in view (e.g. Hero) reveal immediately on mount.
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper dark:bg-ink-950 transition-colors duration-300 overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <Problem />
          <Solution />
          <Product />
          <Benefits />
          <Earnings />
          <Impact />
          <Team />
          <Roadmap />
          <Partners />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
