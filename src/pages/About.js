import React, { useState } from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaMicrosoft, FaRunning, FaFutbol, FaDumbbell, FaSwimmer, FaBook, FaFish, FaBicycle } from 'react-icons/fa';
import { SiPowerbi, SiPowerapps, SiPowerautomate } from 'react-icons/si';
import profileImage from '../images/profile.png';
// Importando as imagens da galeria
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.jpg';

function About() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 p-10 flex flex-col items-center p-8 mt-12">
            {/* Remover imagem e nome em mobile */}
            <div className="flex flex-col items-center mb-8">
                {/* Usar a imagem e o nome apenas em telas maiores que 'sm' */}
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-lg hidden sm:block"
                />
                {/* Mostrar o nome da seção 'About' em telas pequenas e o nome 'Douglas Oliveira' em telas maiores */}
                <h3 className="text-3xl font-semibold mt-4 text-gray-700 hidden sm:block">Douglas Oliveira</h3>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Life Story Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Life Story</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Front-end Developer and Animal Scientist with expertise in React.js and Python.
                        I have a strong background in process automation, BI report development, and experience with Power Automate and Power Apps.
                        Passionate about building AI-powered tools, I am also well-versed in managing projects using Agile methodologies.
                        I hold a postgraduate degree in Coding & Tech Journey from FIAP, a bachelor's degree in Systems Analysis and Development from UNINTER, and a Bachelor of Science in Animal Science from UFRGS.
                    </p>
                </div>

                {/* Modal para imagem em tamanho original */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center" onClick={closeModal}>
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain" />
                    </div>
                )}

                {/* Technologies and Skills Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-8 justify-center text-gray-700">
                        <div className="flex flex-col items-center">
                            <FaPython className="text-blue-500 mb-2" size={50} />
                            <span>Python</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaMicrosoft className="text-blue-500 mb-2" size={50} />
                            <span>VBA</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHtml5 className="text-blue-500 mb-2" size={50} />
                            <span>HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaCss3Alt className="text-blue-500 mb-2" size={50} />
                            <span>CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaReact className="text-blue-500 mb-2" size={50} />
                            <span>React</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiPowerbi className="text-blue-500 mb-2" size={50} />
                            <span>Power BI</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiPowerapps className="text-blue-500 mb-2" size={50} />
                            <span>Power Apps</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiPowerautomate className="text-blue-500 mb-2" size={50} />
                            <span>Power Automate</span>
                        </div>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Hobbies</h3>
                    <div className="flex flex-wrap gap-8 justify-center text-gray-700">
                        <div className="flex flex-col items-center">
                            <FaRunning className="text-blue-500 mb-2" size={50} />
                            <span>Street Running</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaSwimmer className="text-blue-500 mb-2" size={50} />
                            <span>Swimming</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBicycle className="text-blue-500 mb-2" size={50} />
                            <span>Cycling</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaFutbol className="text-blue-500 mb-2" size={50} />
                            <span>Soccer</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaDumbbell className="text-blue-500 mb-2" size={50} />
                            <span>Weightlifting</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBook className="text-blue-500 mb-2" size={50} />
                            <span>Reading</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaFish className="text-blue-500 mb-2" size={50} />
                            <span>Fishing</span>
                        </div>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Languages</h3>
                    <div className="space-y-4">
                        {[
                            { language: 'Portuguese', level: '100%' },
                            { language: 'Spanish', level: '75%' },
                            { language: 'English', level: '90%' },
                        ].map(({ language, level }) => (
                            <div className="relative group" key={language}>
                                <span className="font-semibold">{language}</span>
                                <div className="w-full bg-gray-300 rounded h-4 mt-1">
                                    <div className="bg-green-500 h-full rounded" style={{ width: level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Adicionando a Galeria de Fotos */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Photo Gallery</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <img
                            src={foto1}
                            alt="Gallery 1"
                            className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleImageClick(foto1)}
                        />
                        <img
                            src={foto2}
                            alt="Gallery 2"
                            className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleImageClick(foto2)}
                        />
                        <img
                            src={foto3}
                            alt="Gallery 3"
                            className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleImageClick(foto3)}
                        />
                        <img
                            src={foto4}
                            alt="Gallery 4"
                            className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleImageClick(foto4)}
                        />
                        <img
                            src={foto5}
                            alt="Gallery 5"
                            className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleImageClick(foto5)}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
