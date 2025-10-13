import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className={`w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ${
              darkMode ? 'ring-blue-400/20' : 'ring-blue-200'
            } shadow-2xl`}>
              <img 
                src="https://i.ibb.co/4n58vVxT/luffy-pfp.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Soufiane Ouhaimmed</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Etudiant 
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionné par la création d'expériences numériques exceptionnelles avec des technologies modernes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Voir mes projets
            </button>
            <button className={`px-8 py-3 border-2 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-200 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
            }`}>
              <Download className="h-5 w-5" />
              Télécharger CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Contact' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                onClick={social.href.startsWith('#') ? (e) => {
                  e.preventDefault();
                  scrollToSection(social.href.substring(1));
                } : undefined}
                className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;