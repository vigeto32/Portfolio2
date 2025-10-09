import { Brain, Cpu, Database, Shield } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI INTEGRATION',
      description: 'Implementing cutting-edge AI solutions for next-gen applications'
    },
    {
      icon: Cpu,
      title: 'FULL STACK',
      description: 'End-to-end development from frontend to backend infrastructure'
    },
    {
      icon: Database,
      title: 'DATA SYSTEMS',
      description: 'Architecting scalable database solutions and APIs'
    },
    {
      icon: Shield,
      title: 'SECURITY',
      description: 'Building secure, encrypted systems with best practices'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: '100%',
              animation: `slideRight ${Math.random() * 5 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10">
              {'<ABOUT />'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            ABOUT ME
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a developer navigating the digital frontier, specializing in creating
            immersive web experiences that push the boundaries of what's possible.
            With a passion for cyberpunk aesthetics and modern technology, I transform
            ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <div className="mb-4 inline-block p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
                PHILOSOPHY
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Code is poetry written in logic. Every line should serve a purpose,
                every function should tell a story. I believe in clean, maintainable
                code that stands the test of time.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The future is being written now, and I'm here to make sure it's
                written well.
              </p>
            </div>
          </div>

          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 font-mono">
                APPROACH
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                User experience first, always. Technology should enhance, not
                complicate. I craft solutions that are intuitive, performant,
                and beautiful.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From concept to deployment, I handle every phase with precision
                and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};
