import { useState, useCallback, useEffect } from 'react';
import ClickSpark from './components/ClickSpark/ClickSpark';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import useScrollReveal from './hooks/useScrollReveal';
import BlurLayer from './components/BlurLayer/BlurLayer';
import './App.css';

function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const handleLoadingComplete = useCallback(() => setLoadingDone(true), []);
  useScrollReveal();

  // Always start at the top on page load/refresh
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!loadingDone && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="app">
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <div className="app__content">
            <BlurLayer />
            <ScrollProgressBar />
            <Navbar showName={loadingDone} />
            <main>
              <Hero />
              <About />
              <Services />
              <Skills />
              <Experience />
              <Contact />
            </main>
          </div>
        </ClickSpark>
      </div>
    </>
  );
}

export default App;
