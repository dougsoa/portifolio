import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaFire } from 'react-icons/fa'; // Import icons as needed

const projectData = {
  1: {
    title: '@FelipevieiraFisioterapia🩺',
    description: "This project was developed to facilitate the client's contact with the office owner, who works alone and schedules appointments via WhatsApp.",
    stack: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3 /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    demoLink: 'https://dougsoa.github.io/FelipeFisioterapia/',
    images: [
      'https://github.com/dougsoa/FelipeFisioterapia/blob/main/p%C3%A1gina%20principal.png?raw=true', // Página Principal
      'https://github.com/dougsoa/FelipeFisioterapia/blob/main/sobre%20nos.png?raw=true', // Sobre Nós
      'https://github.com/dougsoa/FelipeFisioterapia/blob/main/servi%C3%A7os.png?raw=true', // Serviços
      'https://github.com/dougsoa/FelipeFisioterapia/blob/main/depoimentos.png?raw=true', // Depoimentos
      'https://github.com/dougsoa/FelipeFisioterapia/blob/main/contato.png?raw=true', // Contato
    ],
    stories: [
      "The main page was designed to provide a clean and organized interface, enabling users to navigate easily. The blue color conveys trust and professionalism, which are essential in healthcare.",
      "The 'About Us' section reflects the office's philosophy. This image shows the physiotherapist in a welcoming environment, ready to assist patients, fostering a strong connection.",
      "The services section illustrates the variety of treatments offered, emphasizing personalized care. The choice of image inspires confidence and hope among patients.",
      "Patient testimonials are crucial for credibility. This image captures the emotions and gratitude of patients, showcasing the positive impact of treatment and encouraging future patients.",
      "Finally, the contact section ensures patients can easily connect with the physiotherapist. The design is intuitive, making the process of scheduling appointments straightforward.",
    ],
  },
  2: {
    title: 'Brew & Beans☕',
    description: 'A project designed for coffee lovers. Create your own tasting diary, rank the best coffees, and create your own recipes.',
    stack: [
      { name: 'React', icon: <FaReact className="text-blue-600" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Firebase', icon: <FaFire className="text-orange-600" /> }, // Updated icon
    ],
    demoLink: 'https://example.com/demo2',
    images: [
      'https://raw.githubusercontent.com/dougsoa/brewandbeans/main/src/assets/home.png',
      'https://raw.githubusercontent.com/dougsoa/brewandbeans/main/src/assets/contact.png',
      'https://raw.githubusercontent.com/dougsoa/brewandbeans/main/src/assets/coffees.png',
    ],
    stories: [
      "Discover Your Passion for Coffee: Brew & Beans is a personal app that allows coffee lovers to document their experiences. With an engaging and intuitive design, it invites users to explore their own coffee journey.",
      "Create Your Tasting Diary: The tasting diary feature lets users log every coffee they try, providing space for notes and reflections. Inspiring images encourage users to personalize their experiences, making each entry special.",
      "Rank Your Favorite Coffees: The ranking feature allows users to highlight their favorite coffees, creating a personal list that reflects their preferences over time. Each entry is an opportunity to rediscover and reassess what they’ve tasted.",
      "Store Recipes and Discoveries: Users can also log recipes they've learned, capturing the preparation process visually. This transforms each new recipe into a fresh experience, enriching their coffee journey.",
      "A Personal Coffee Agenda: Brew & Beans is more than just an app; it's a personal diary that tracks users' growth as coffee enthusiasts, making each sip a new discovery in their own journey.",
    ],
  },
  
  3: {
    title: 'SearchZonaNorte🔍',
    description: 'A page for searching places in the North Zone of Porto Alegre.',
    stack: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3 /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    demoLink: 'https://example.com/demo3',
    images: [
      'https://raw.githubusercontent.com/dougsoa/SearchZonaNorte/master/src/images/home.png', // Replace with the actual image URL
      'https://raw.githubusercontent.com/dougsoa/SearchZonaNorte/master/src/images/hospitais.png', // Replace with the actual image URL
      'https://raw.githubusercontent.com/dougsoa/SearchZonaNorte/master/src/images/mapa.png', // Replace with the actual image URL
    ],
    stories: [
      "Explore the North Zone of Porto Alegre with SearchZonaNorte! In a world where time is precious, SearchZonaNorte emerges as the perfect solution for discovering the best places in the North Zone of Porto Alegre. The app's clean and intuitive home interface allows users to search quickly and efficiently.",
      "Upon entering their preferences, users are presented with detailed listings of locations, providing essential information to help them make informed decisions. Whether looking for hospitals, parks, or restaurants, SearchZonaNorte has it all!",
      "Additionally, the map integration feature offers a clear visualization of locations in relation to the user's current position, making navigation in the area easier. With SearchZonaNorte, exploring the North Zone has never been simpler and more accessible. Awaken your inner explorer and discover all that this vibrant area has to offer!",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div className="p-8 text-center">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 p-5 md:p-10 flex flex-col items-center mt-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-600">{project.title}</h2>
      
      <div className="mb-6">
        <p className="text-lg text-gray-700">{project.description}</p>
        <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">Technology Stack:</h3>
        <div className="flex flex-col mb-6">
          {project.stack.map((tech, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center mr-4">
                {tech.icon}
                <span className="ml-2 text-gray-600">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          View Demo
        </a>
      </div>

      {/* Images Section with Stories */}
      {project.images.map((imageUrl, index) => (
        <div key={index} className="flex flex-col md:flex-row items-start mb-8 w-full max-w-5xl">
          <img
            src={imageUrl}
            alt={`Project screenshot ${index + 1}`}
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 mb-4 md:mb-0"
          />
          <div className="md:ml-6">
            <p className="text-md md:text-lg text-gray-700">
              {project.stories[index]}
            </p>
          </div>
        </div>
      ))}
      
      <Link to="/portfolio" className="mt-4 text-blue-600 underline hover:text-blue-800 transition duration-300">
        Back to Portfolio
      </Link>
    </div>
  );
};

export default ProjectDetail;
