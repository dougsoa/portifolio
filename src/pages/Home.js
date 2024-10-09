import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';  // Imagem para mobile
import logo from '../images/logo.png';  // Imagem para desktop
import { FiDownload } from 'react-icons/fi'; // Importando o ícone de download

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col md:flex-row items-center justify-center p-5 md:p-10 pt-20"
    >
      {/* Mobile View */}
      <div className="flex flex-col md:hidden items-center text-center mb-12 p-4">
        {/* Imagem de perfil com fundo roxo e bordas arredondadas */}
        <div className="rounded-full p-1 mt-2 bg-blue-600 shadow-sm">
          <img src={profile} alt="Profile" className="w-34 h-32 object-cover rounded-full" />
        </div>

        {/* Texto de apresentação */}
        <h1 className="text-4xl font-extrabold text-white p-4 rounded-md mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-white">Hey, I'am</span>
          <br />
          <span className="text-blue-600">Douglas :)</span>
        </h1>
        <h4 className="text-lg font-normal text-white-200 mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span className="text-black">Animal Scientist</span>
          <br />
          <span className="text-black">& Web Developer</span> 
        </h4>

        {/* Botões com bordas arredondadas */}
        <div className="flex flex-col space-y-4 mt-6"> {/* Espaçamento aumentado antes dos botões */}
          <a
            href="/curriculo_douglas_soares.pdf"
            download="Curriculo_Douglas_Soares.pdf"
            className="inline-flex items-center border border-blue-500 text-blue-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            rel="noopener noreferrer"
          >
            <FiDownload className="mr-2" size={24} />
            Download CV
          </a>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex max-w-xl text-left mb-10 md:mb-0 flex-col justify-center items-start mr-auto" style={{ marginRight: '62px' }}>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 mt-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-black">Hey, I'm</span>
          <br />
          <span className="text-blue-600">Douglas :) </span>
        </h1>
        <h4 className="text-3xl md:text-2xl font-normal mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Animal Scientist & Web Developer
        </h4>
        <div className="mt-6 flex space-x-3" size={20}>
          <Link
            to="/portfolio"
            className="inline-flex items-center border border-blue-600 text-black-600 px-4 py-2 rounded-full text-lg font-normal hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            My Portfolio
          </Link>
          <a
            href="/curriculo_douglas_soares.pdf"
            download="Curriculo_Douglas_Soares.pdf"
            className="inline-flex items-center border border-blue-600 text-black-600 px-4 py-2 rounded-full text-lg font-normal hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            rel="noopener noreferrer"
          >
            <FiDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>

      {/* Logo for Desktop Only */}
      <div className="hidden md:flex items-center justify-center mt-8 md:mt-12 ml-auto" style={{ marginLeft: '62px' }}>
        <img
          src={logo}
          alt="Logo"
          className="w-48 md:w-72 transition-transform duration-500 ease-in-out transform hover:rotate-180"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Home;
