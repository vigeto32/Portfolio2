import { Terminal, Zap, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'RYAN CHRISTOPHER G. CO';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="/524308793_1269317001437733_8702633133015114336_n.jpg"
            alt="Ryan Christopher G. Co"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.5)] object-cover"
          />
        </div>
        <div className="mb-6 flex justify-center gap-4">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm animate-pulse">
            <Terminal className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.2s' }}>
            <Code2 className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.4s' }}>
            <Zap className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <div className="text-xl md:text-3xl font-bold text-cyan-400 mb-4 font-mono">
          <span className="text-white">{'<'}</span>
          CYBERPUNK DEVELOPER
          <span className="text-white">{' />'}</span>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting digital experiences in the neon-lit streets of cyberspace.
          Where code meets creativity, and innovation knows no bounds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            CONTACT ME
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              50+
            </div>
            <div className="text-gray-400 text-sm mt-2">PROJECTS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              5+
            </div>
            <div className="text-gray-400 text-sm mt-2">YEARS EXP</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              100+
            </div>
            <div className="text-gray-400 text-sm mt-2">CLIENTS</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse" />
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
