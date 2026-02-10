import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Earnings } from './components/Earnings';
import { Calculator } from './components/Calculator';
import { Impact } from './components/Impact';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { SocialProof } from './components/SocialProof';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click',  (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <Problem />
          <Solution />
          <Benefits />
          <Earnings />
          <Calculator />
          <Impact />
          <Team />
          <Roadmap />
          <Partners />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        
        {/* Floating Elements */}
        <FloatingCTA />
        <SocialProof />
      </div>
    </ThemeProvider>
  );
}

export default App;