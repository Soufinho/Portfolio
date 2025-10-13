import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'fullstack';
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce moderne avec panier, paiements et gestion admin.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Interface d\'administration avec graphiques interactifs et données en temps réel.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
    },
    {
      id: 3,
      title: 'App Mobile Fitness',
      description: 'Application mobile pour le suivi d\'entraînements avec synchronisation cloud.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'mobile',
    },
    {
      id: 4,
      title: 'Portfolio Designer',
      description: 'Site portfolio responsive pour un designer avec galerie et animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Application de messagerie en temps réel avec salles de discussion.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack',
    },
    {
      id: 6,
      title: 'Task Manager',
      description: 'Gestionnaire de tâches collaboratif avec attribution et suivi de progression.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
    },
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes Projets
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className={`h-5 w-5 mr-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                    aria-label="Voir le code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                    aria-label="Voir le site"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode 
                          ? 'bg-gray-600 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;