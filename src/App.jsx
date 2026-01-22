import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail';
import ThemeToggle from './components/ThemeToggle';
import { useEffect } from 'react';

// Wrapper component to handle hash scrolling
const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-light dark:bg-dark min-h-screen text-dark dark:text-light font-sans selection:bg-primary/20 selection:text-primary">
        {/* Navbar should be separate if it needs to persist, but for this design it works best inside or conditionally. 
                Let's keep it global but aware of routes if we update it. For now, simple standard structure. */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  )
}

export default App
