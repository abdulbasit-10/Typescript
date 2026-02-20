import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-lg">
              <div className="bg-slate-800 p-8 rounded">
                <div className="text-center">
                  <span className="text-7xl">💼</span>
                  <p className="text-gray-400 text-sm mt-4">5+ Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {portfolioData.about}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Experience</h3>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
