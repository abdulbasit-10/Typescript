import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
          {portfolioData.name}
        </h1>

        <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          {portfolioData.title}
        </p>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          {portfolioData.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={portfolioData.social.email}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            View GitHub
          </a>
        </div>
        

        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 text-2xl"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href={portfolioData.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 text-2xl"
            title="Twitter"
          >
            𝕏
          </a>
          <a
            href={portfolioData.social.email}
            className="hover:text-blue-400 transition duration-300 text-2xl"
            title="Email"
          >
            ✉️
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
