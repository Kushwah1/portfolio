import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-surface-100 dark:bg-surface-950 text-surface-600 dark:text-surface-200 transition-colors duration-500 overflow-x-hidden">
      {/* Global grain / noise overlay */}
      <div className="noise pointer-events-none fixed inset-0 z-[60]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
