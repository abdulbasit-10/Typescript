import { portfolioData } from '../data/portfolioData';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {portfolioData.name.split(' ')[0]}
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>

          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
