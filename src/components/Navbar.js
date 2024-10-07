import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black p-4 shadow-md fixed w-full top-0 z-20">
      <div className="container mx-auto flex items-center justify-between lg:justify-center">
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776; {/* Ícone de hambúrguer */}
        </button>
        <ul className={`hidden lg:flex lg:space-x-8 lg:justify-center`}>
          <li>
            <Link to="/" className="font-bold hover:text-blue-600">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-bold hover:text-blue-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="font-bold hover:text-blue-600">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/resume" className="font-bold hover:text-blue-600">
              RESUME
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-bold hover:text-blue-600">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu móvel que ocupa toda a tela */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center text-white z-30">
          <button
            className="absolute top-6 right-6 text-4xl focus:outline-none"
            onClick={toggleMenu}
          >
            &times; {/* Ícone de fechar */}
          </button>
          <ul className="space-y-8 text-2xl">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                RESUME
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
