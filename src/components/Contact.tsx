import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-cyan-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-purple-400' }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoNiwgMTgyLCAyMTIsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              {'<CONTACT />'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to start your next project? Let's connect and make something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-lg group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono mb-1">EMAIL</h3>
                    <p className="text-gray-400">contact@cyber2099.dev</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Drop me an email for project inquiries, collaboration opportunities,
                  or just to say hello. I typically respond within 24 hours.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-lg group hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-400 font-mono mb-4">
                  SOCIAL NETWORKS
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-4 bg-white/5 border border-white/10 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 font-mono">STATUS: AVAILABLE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 font-mono">RESPONSE TIME: 24H</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 font-mono">TIMEZONE: UTC+0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-cyan-400 font-mono text-sm mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-cyan-400 font-mono text-sm mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-cyan-400 font-mono text-sm mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SEND MESSAGE
                  <Send className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
