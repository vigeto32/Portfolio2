import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  useEffect(() => {
    if (showContent) {
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('section-visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      sections.forEach((section) => {
        section.classList.add('section-hidden');
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, [showContent]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative bg-black min-h-screen">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      <style>{`
        .section-hidden {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

export default App;
