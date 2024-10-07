import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    imageUrl: 'https://github.com/dougsoa/FelipeFisioterapia/blob/main/p%C3%A1gina%20principal.png?raw=true',
    title: '@FelipevieiraFisioterapia 🩺',
    description: 'This project was made to facilitate the client\'s contact with the office owner, who works alone and schedules appointments using WhatsApp.',
  },
  {
    id: 2,
    imageUrl: 'https://private-user-images.githubusercontent.com/83471539/374275454-794778f5-ccf2-4f6d-9fa5-dd8c29520769.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgzMjM0MzUsIm5iZiI6MTcyODMyMzEzNSwicGF0aCI6Ii84MzQ3MTUzOS8zNzQyNzU0NTQtNzk0Nzc4ZjUtY2NmMi00ZjZkLTlmYTUtZGQ4YzI5NTIwNzY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDE3NDUzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjMjEzNDRlMGI3YzAwNzVjYjA0NDkxZTMxODU2M2ViMWMwMmJkZDI2Nzc5MTdjYTkyMTFlZWNlM2FiNTk0N2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.W5emLQFRq6fmmUPGUmjfLy7WihuBa7Z7SkQAT1R4GrU',
    title: 'Brew & Beans☕',
    description: 'Project designed for coffee lovers. Create your own tasting diary, rank the best coffees and create your own recipes.',
  },
  {
    id: 3,
    imageUrl: 'https://private-user-images.githubusercontent.com/83471539/374338291-dc10a733-1932-46ba-afe8-413f4f1738a2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgzMzc4MTgsIm5iZiI6MTcyODMzNzUxOCwicGF0aCI6Ii84MzQ3MTUzOS8zNzQzMzgyOTEtZGMxMGE3MzMtMTkzMi00NmJhLWFmZTgtNDEzZjRmMTczOGEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDIxNDUxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgxYjkyZWI4NDI4YzhlYjc0OWIwYTQxOTAyYzI4Y2RiYzM3NzQyZTNhM2FmMmEwNDNhM2E1NzcwMjVjZGQyOTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.cwqYNCQ55o4pLXI8Va8X1WDcuDZXK86JJcVIXopRePU',
    title: 'SearchZonaNorte🔍',
    description: 'Page for searching places in the North Zone of Porto Alegre',
  },
];

const Portfolio = () => {
  // Animation for the cards
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
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg transition-transform transform hover:shadow-xl hover:-translate-y-2 duration-300 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }} // Zoom effect on hover
          >
            <div
              className="h-64 w-full bg-cover bg-center transition-transform duration-300"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                objectFit: 'cover', // Ensures the image covers the entire div without distortion
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
