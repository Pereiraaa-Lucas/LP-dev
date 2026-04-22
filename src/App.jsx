import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24 px-6 md:px-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-10 text-slate-500 text-sm">
        © 2026 Lucas Pereira. Todos os direitos reservados.
      </footer>
    </div>
  );
}
export default App;