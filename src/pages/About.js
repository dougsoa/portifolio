import React from 'react';
import profileImage from '../images/profile.png';

function About() {
    return (
        <section id="about" className="min-h-screen  bg-gradient-to-br from-gray-200 to-gray-400 p-10 flex flex-col items-center p-8 mt-12"> {/* Added mt-16 for spacing */}
            <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-600">About</h2>

            <div className="flex flex-col items-center mb-8">
                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-lg"
                />
                {/* Name Below Image */}
                <h3 className="text-3xl font-semibold mt-4 text-gray-700">Douglas Oliveira</h3>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objective Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Objective</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To utilize technology to transform and optimize processes across various sectors, enhancing productivity in a sustainable and innovative manner.
                        I am committed to balancing my career with continuous learning, seeking to create a positive impact in people's lives and contribute to a more efficient, connected, and technology-driven future.
                    </p>
                </div>

                {/* Education Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Postgraduate in Coding & Tech Journey from User to Creator | 2024 | FIAP</li>
                        <li>Technologist in Analysis and Development of Systems | 2023 | UNINTER</li>
                        <li>Bachelor's in Animal Science | 2019 | UFRGS</li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Skills</h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <div className="bg-blue-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                            <h4 className="font-semibold">Programming Languages</h4>
                            <ul className="list-disc list-inside">
                                <li>Python</li>
                                <li>VBA</li>
                            </ul>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                            <h4 className="font-semibold">Web Technologies</h4>
                            <ul className="list-disc list-inside">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                            <h4 className="font-semibold">Data Tools</h4>
                            <ul className="list-disc list-inside">
                                <li>Power BI</li>
                                <li>Power Apps</li>
                                <li>Power Automate</li>
                            </ul>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                            <h4 className="font-semibold">Project Management</h4>
                            <ul className="list-disc list-inside">
                                <li>Process Automation</li>
                                <li>Data Analysis</li>
                                <li>Project Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Languages</h3>
    
    {/* Language Proficiency Meter */}
    <div className="space-y-4">
        {/* Portuguese */}
        <div className="relative group">
            <span className="font-semibold">Portuguese</span>
            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                <div className="bg-green-500 h-full rounded" style={{ width: '100%' }}></div> {/* Nativo e fluente */}
            </div>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded p-1">
                Native and Fluent
            </div>
        </div>

        {/* Spanish */}
        <div className="relative group">
            <span className="font-semibold">Spanish</span>
            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                <div className="bg-green-500 h-full rounded" style={{ width: '75%' }}></div> {/* Fluente */}
            </div>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded p-1">
                Fluent
            </div>
        </div>

        {/* English */}
        <div className="relative group">
            <span className="font-semibold">English</span>
            <div className="w-full bg-gray-300 rounded h-4 mt-1">
                <div className="bg-yellow-500 h-full rounded" style={{ width: '50%' }}></div> {/* Intermediário */}
            </div>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded p-1">
                Intermediate
            </div>
        </div>
    </div>
</div>


            </div>
        </section>
    );
}

export default About;
