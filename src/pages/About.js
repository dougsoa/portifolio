import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaMicrosoft, FaRunning, FaFutbol, FaDumbbell, FaSwimmer, FaBook, FaFish, FaBicycle } from 'react-icons/fa'; // Adicionando o FaBicycle
import { SiPowerbi, SiPowerapps, SiPowerautomate } from 'react-icons/si';
import profileImage from '../images/profile.png';

function About() {
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
                        <div className="relative group">
                            <span className="font-semibold">Portuguese</span>
                            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                                <div className="bg-green-500 h-full rounded" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="relative group">
                            <span className="font-semibold">Spanish</span>
                            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                                <div className="bg-green-500 h-full rounded" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="relative group">
                            <span className="font-semibold">English</span>
                            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                                <div className="bg-yellow-500 h-full rounded" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
