import React from 'react';
import { Code, Coffee, Users, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Code, label: 'Projets complétés', value: '50+' },
    { icon: Coffee, label: 'Tasses de café', value: '1000+' },
    { icon: Users, label: 'Clients satisfaits', value: '25+' },
    { icon: Award, label: 'Années d\'expérience', value: '5+' },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            À propos de moi
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Développeur passionné avec une expertise en technologies web modernes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mon parcours
            </h3>
            <div className={`space-y-4 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>
                Passionné par le développement web depuis plus de 5 ans, j'ai eu l'opportunité 
                de travailler sur des projets variés, allant de sites vitrines à des applications 
                web complexes.
              </p>
              <p>
                Ma curiosité naturelle et ma volonté d'apprendre me poussent constamment à 
                explorer de nouvelles technologies et à améliorer mes compétences.
              </p>
              <p>
                J'aime créer des expériences utilisateur intuitives et des interfaces modernes 
                qui allient esthétique et fonctionnalité.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Workspace" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            } transform hover:scale-105 transition-all duration-200`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`text-2xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;