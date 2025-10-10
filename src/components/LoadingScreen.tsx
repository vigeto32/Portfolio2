import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const texts = [
      'INITIALIZING',
      'LOADING NEURAL NETWORK',
      'CONNECTING TO CYBERSPACE',
      'ACCESSING MAINFRAME',
      'SYNCHRONIZING DATA',
      'READY'
    ];

    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      if (currentTextIndex < texts.length - 1) {
        currentTextIndex++;
        setLoadingText(texts[currentTextIndex]);
      }
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/20 to-black">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-cyan-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                animation: `scan ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className={`text-center transition-all duration-100 ${glitchActive ? 'glitch' : ''}`}>
          <div className="mb-8 relative">
            <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              RYAN CHRISTOPHER G. CO
            </div>
            <div className="absolute -top-2 -left-2 text-4xl md:text-6xl font-black text-cyan-500 opacity-20 blur-sm">
              RYAN CHRISTOPHER G. CO
            </div>
            <div className="absolute -bottom-2 -right-2 text-4xl md:text-6xl font-black text-purple-500 opacity-20 blur-sm">
              RYAN CHRISTOPHER G. CO
            </div>
          </div>

          <div className="mb-12 relative">
            <div className="h-1 w-64 md:w-96 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/30">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse" />
              </div>
            </div>
            <div className="mt-4 flex justify-between w-64 md:w-96 text-cyan-400 font-mono text-sm">
              <span>{progress}%</span>
              <span className="animate-pulse">{loadingText}</span>
            </div>
          </div>

          <div className="space-y-2 font-mono text-cyan-500/50 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span>SYSTEM STATUS: ONLINE</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>NEURAL LINK: ACTIVE</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>QUANTUM ENCRYPTION: ENABLED</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200vw);
            opacity: 0;
          }
        }

        .glitch {
          animation: glitch 0.3s ease-in-out;
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  );
};
