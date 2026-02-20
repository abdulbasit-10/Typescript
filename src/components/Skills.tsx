import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-800 px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <div className="text-3xl font-bold">8+</div>
            <div className="text-blue-100">Languages</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-purple-100">Tools & Frameworks</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-lg text-white">
            <div className="text-3xl font-bold">5+</div>
            <div className="text-pink-100">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-white">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-green-100">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
