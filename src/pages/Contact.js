import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaYoutube } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
        SOCIAL NETWORKS
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            icon: <FaInstagram size={36} />,
            name: "Instagram",
            href: "https://www.instagram.com/dougsoa",
          },
          {
            icon: <FaLinkedin size={36} />,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/dougsoa",
          },
          {
            icon: <FaGithub size={36} />,
            name: "GitHub",
            href: "https://github.com/dougsoa",
          },
          {
            icon: <FaMedium size={36} />,
            name: "Medium",
            href: "https://medium.com/@dougsoa",
          },
          {
            icon: <FaYoutube size={36} />,
            name: "YouTube",
            href: "https://www.youtube.com/@dougsoa",
          },
        ].map((network, index) => (
          <a
            key={index}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 text-gray-800 hover:text-blue-600 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <span className="group-hover:text-blue-600 transition-colors duration-300">{network.icon}</span>
            <span className="font-semibold text-sm group-hover:underline">{network.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
