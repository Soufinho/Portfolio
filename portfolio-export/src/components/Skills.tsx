import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    { name: 'CSS', percentage: 90, category: 'frontend' },
    { name: 'Java', percentage: 85, category: 'backend' },
    { name: 'JavaFx', percentage: 80, category: 'frontend' },
    { name: 'HTML', percentage: 95, category: 'frontend' },
    { name: 'PHP', percentage: 80, category: 'backend' },
    { name: 'Python', percentage: 75, category: 'backend' },
    { name: 'Symfony', percentage: 70, category: 'backend' },
    { name: 'Mysql', percentage: 65, category: 'backend' },
    { name: 'Git', percentage: 90, category: 'tools' },
    { name: 'IDEAProject', percentage: 70, category: 'tools' },
    { name: 'Suite Office', percentage: 95, category: 'tools' },
  ];

  const categories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-blue-600' },
    backend: { title: 'Backend', color: 'from-green-500 to-green-600' },
    tools: { title: 'Outils', color: 'from-purple-500 to-purple-600' },
  };

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes Compétences
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === key)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className={`font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;