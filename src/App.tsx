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
