import { ExternalLink, Github, Sparkles, Zap, Layers, Cpu } from 'lucide-react';
import { useState } from 'react';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'NEURAL NETWORK DASHBOARD',
      description: 'Real-time AI monitoring system with predictive analytics and data visualization',
      tech: ['React', 'TypeScript', 'TensorFlow.js', 'D3.js'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      icon: Cpu,
      gradient: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent'
    },
    {
      title: 'QUANTUM CRYPTO WALLET',
      description: 'Next-gen cryptocurrency wallet with quantum-resistant encryption',
      tech: ['Next.js', 'Solidity', 'Web3.js', 'Tailwind'],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      icon: Zap,
      gradient: 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent'
    },
    {
      title: 'CYBER DEFENSE SYSTEM',
      description: 'Advanced threat detection and prevention system with real-time monitoring',
      tech: ['Node.js', 'Python', 'Redis', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      icon: Layers,
      gradient: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent'
    },
    {
      title: 'METAVERSE PLATFORM',
      description: 'Immersive 3D virtual world with social features and digital commerce',
      tech: ['Three.js', 'WebGL', 'Socket.io', 'MongoDB'],
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-500/10 to-red-500/10',
      icon: Sparkles,
      gradient: 'bg-gradient-to-br from-pink-500/20 via-red-500/20 to-transparent'
    },
    {
      title: 'AI CONTENT GENERATOR',
      description: 'Smart content creation tool powered by GPT models and computer vision',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      color: 'from-green-500 to-cyan-500',
      bgColor: 'from-green-500/10 to-cyan-500/10',
      icon: Cpu,
      gradient: 'bg-gradient-to-br from-green-500/20 via-cyan-500/20 to-transparent'
    },
    {
      title: 'BLOCKCHAIN EXPLORER',
      description: 'Comprehensive blockchain analytics platform with advanced search capabilities',
      tech: ['Vue.js', 'Ethers.js', 'GraphQL', 'Redis'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      icon: Layers,
      gradient: 'bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-transparent'
    }
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAxODIsIDIxMiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slideDown ${Math.random() * 5 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-6 py-3 rounded-full bg-cyan-500/10 flex items-center gap-3 hover:border-cyan-500/60 transition-all duration-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
              {'<PROJECTS />'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
            FEATURED WORK
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative projects that merge cutting-edge technology with creative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="absolute inset-0 border border-cyan-500/20 rounded-xl group-hover:border-cyan-500/50 transition-all duration-500" />

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredIndex === index ? 'animate-pulse' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 blur-2xl`} />
              </div>

              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 bg-gradient-to-r ${project.color} rounded-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <project.icon className="relative w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>

              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              VIEW ALL PROJECTS
              <ExternalLink className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(200vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
