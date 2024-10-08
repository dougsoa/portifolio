import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importando as imagens localmente
import FelipeFisioterapia from '../images/felipe-fisioterapia.png';
import BrewAndBeans from '../images/brew-and-beans.png';
import SearchZonaNorte from '../images/search-zona-norte.png';

const projects = [
  {
    id: 1,
    imageUrl: FelipeFisioterapia,
    title: '@FelipevieiraFisioterapia🩺',
    description: "This project was made to facilitate the client's contact with the office owner, who works alone and schedules appointments using WhatsApp.",
  },
  {
    id: 2,
    imageUrl: BrewAndBeans,
    title: 'Brew & Beans☕',
    description: 'Project designed for coffee lovers. Create your own tasting diary, rank the best coffees and create your own recipes.',
  },
  {
    id: 3,
    imageUrl: SearchZonaNorte,
    title: 'SearchZonaNorte🔍',
    description: 'Page for searching places in the North Zone of Porto Alegre',
  },
];

const Portfolio = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="portfolio"
      className="p-8 mt-12 bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-600">
          Projects
        </h2>
        <p className="text-lg text-gray-700">
          Explore some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <motion.div
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:shadow-xl hover:-translate-y-2 duration-300 overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-64 w-full bg-cover bg-center transition-transform duration-300"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  objectFit: 'cover',
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 transition-opacity duration-300 hover:opacity-70">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
