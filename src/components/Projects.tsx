import { ExternalLink, Github, Sparkles } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'NEURAL NETWORK DASHBOARD',
      description: 'Real-time AI monitoring system with predictive analytics and data visualization',
      tech: ['React', 'TypeScript', 'TensorFlow.js', 'D3.js'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      title: 'QUANTUM CRYPTO WALLET',
      description: 'Next-gen cryptocurrency wallet with quantum-resistant encryption',
      tech: ['Next.js', 'Solidity', 'Web3.js', 'Tailwind'],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-500/10 to-purple-500/10'
    },
    {
      title: 'CYBER DEFENSE SYSTEM',
      description: 'Advanced threat detection and prevention system with real-time monitoring',
      tech: ['Node.js', 'Python', 'Redis', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'METAVERSE PLATFORM',
      description: 'Immersive 3D virtual world with social features and digital commerce',
      tech: ['Three.js', 'WebGL', 'Socket.io', 'MongoDB'],
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-500/10 to-red-500/10'
    },
    {
      title: 'AI CONTENT GENERATOR',
      description: 'Smart content creation tool powered by GPT models and computer vision',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      color: 'from-green-500 to-cyan-500',
      bgColor: 'from-green-500/10 to-cyan-500/10'
    },
    {
      title: 'BLOCKCHAIN EXPLORER',
      description: 'Comprehensive blockchain analytics platform with advanced search capabilities',
      tech: ['Vue.js', 'Ethers.js', 'GraphQL', 'Redis'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAxODIsIDIxMiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {'<PROJECTS />'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
            FEATURED WORK
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing digital experiences that merge innovation with aesthetics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                    <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-cyan-400 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
