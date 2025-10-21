import { Terminal, Zap, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'RYAN CHRISTOPHER G. CO';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse" />
          <img
            src="/524308793_1269317001437733_8702633133015114336_n.jpg"
            alt="Ryan Christopher G. Co"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 shadow-[0_0_60px_rgba(6,182,212,0.6)] object-cover ring-4 ring-cyan-500/20 ring-offset-4 ring-offset-black"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse" />
        </div>

        <div className="mb-6 flex justify-center gap-4">
          <div className="group p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 rounded-lg backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <Terminal className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          </div>
          <div className="group p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-lg backdrop-blur-sm hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <Code2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </div>
          <div className="group p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-lg backdrop-blur-sm hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <Zap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <div className="text-xl md:text-3xl font-bold mb-4 font-mono">
          <span className="text-cyan-400">{'<'}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            FRONT-END DEVELOPER
          </span>
          <span className="text-cyan-400">{' />'}</span>
        </div>

        <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Transforming ideas into powerful digital experiences. Specializing in modern web technologies,
          clean code architecture, and innovative solutions that push boundaries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW PROJECTS
              <Code2 className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT ME
              <Mail className="w-5 h-5" />
            </span>
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a href="#" className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="#" className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="mailto:ohmazio36@gmail.com" className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg group-hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2
              </div>
              <div className="text-gray-400 text-sm mt-2 font-mono">PROJECTS</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-lg group-hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                2
              </div>
              <div className="text-gray-400 text-sm mt-2 font-mono">YEARS EXP</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg group-hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                2
              </div>
              <div className="text-gray-400 text-sm mt-2 font-mono">CLIENTS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center relative group cursor-pointer hover:border-cyan-400 transition-colors">
          <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse group-hover:bg-cyan-400" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
