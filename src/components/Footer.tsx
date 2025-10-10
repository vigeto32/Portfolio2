import { Terminal, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black" />

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
            style={{
              left: `${(i + 1) * 10}%`,
              animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                RYAN CHRISTOPHER G. CO
              </div>
              <div className="text-xs text-gray-500 font-mono">
                Building the future, one line at a time
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <span>in the Cyberspace</span>
          </div>

          <div className="text-gray-500 text-sm font-mono">
            &copy; {currentYear} All Rights Reserved
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-600 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span>SECURE CONNECTION</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>QUANTUM ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
