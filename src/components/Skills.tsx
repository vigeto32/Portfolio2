import { Code2, Database, Globe, Server, Smartphone, Zap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'FRONTEND',
      color: 'cyan',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js/WebGL', level: 85 }
      ]
    },
    {
      icon: Server,
      title: 'BACKEND',
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python/FastAPI', level: 85 },
        { name: 'GraphQL', level: 82 },
        { name: 'REST APIs', level: 93 }
      ]
    },
    {
      icon: Database,
      title: 'DATABASE',
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 87 },
        { name: 'Redis', level: 83 },
        { name: 'Supabase', level: 91 }
      ]
    },
    {
      icon: Globe,
      title: 'WEB3',
      color: 'pink',
      skills: [
        { name: 'Solidity', level: 80 },
        { name: 'Ethers.js', level: 85 },
        { name: 'Web3.js', level: 82 },
        { name: 'Smart Contracts', level: 78 }
      ]
    },
    {
      icon: Zap,
      title: 'DEVOPS',
      color: 'green',
      skills: [
        { name: 'Docker', level: 86 },
        { name: 'CI/CD', level: 84 },
        { name: 'AWS/Cloud', level: 81 },
        { name: 'Kubernetes', level: 75 }
      ]
    },
    {
      icon: Smartphone,
      title: 'MOBILE',
      color: 'orange',
      skills: [
        { name: 'React Native', level: 87 },
        { name: 'Flutter', level: 79 },
        { name: 'iOS/Android', level: 82 },
        { name: 'PWA', level: 90 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; bar: string }> = {
      cyan: {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        bar: 'bg-gradient-to-r from-cyan-500 to-cyan-600'
      },
      blue: {
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        bar: 'bg-gradient-to-r from-blue-500 to-blue-600'
      },
      purple: {
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        bar: 'bg-gradient-to-r from-purple-500 to-purple-600'
      },
      pink: {
        border: 'border-pink-500/30',
        bg: 'bg-pink-500/10',
        text: 'text-pink-400',
        bar: 'bg-gradient-to-r from-pink-500 to-pink-600'
      },
      green: {
        border: 'border-green-500/30',
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        bar: 'bg-gradient-to-r from-green-500 to-green-600'
      },
      orange: {
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        text: 'text-orange-400',
        bar: 'bg-gradient-to-r from-orange-500 to-orange-600'
      }
    };
    return colors[color];
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            style={{
              left: `${(i + 1) * 6.67}%`,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10">
              {'<SKILLS />'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
            TECH STACK
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Mastering the tools that power the digital frontier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-to-br from-gray-900 to-black border ${colors.border} rounded-lg hover:border-opacity-100 transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${colors.bg} border ${colors.border} rounded-lg`}>
                      <category.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text} font-mono`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className={`text-xs font-mono ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                          <div
                            className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{
                              width: `${skill.level}%`,
                              transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`absolute top-3 right-3 w-2 h-2 ${colors.text} rounded-full animate-pulse`} />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-lg">
            <p className="text-gray-300 text-lg mb-4">
              Constantly evolving and learning new technologies
            </p>
            <div className="flex justify-center gap-2">
              {['AI/ML', 'Blockchain', 'Cloud Native', 'WebAssembly'].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
