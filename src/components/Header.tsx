import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80">
            {portfolioData.name.split(' ')[0]}
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
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
