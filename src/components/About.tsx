export const About = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      {/* Background animated lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: '100%',
              animation: `slideRight ${Math.random() * 5 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-4">
          <span className="text-cyan-500 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10">
            {'<ABOUT />'}
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          ABOUT ME
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          I'm a Third Year Student and aspiring developer navigating the digital frontier, specializing in creating
          immersive web experiences that push the boundaries of what's possible.
          
        </p>
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
