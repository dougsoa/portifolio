// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when clicking a link
  };

  const isActive = (path) => location.pathname === path;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get the title based on the current path
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'HOME';
      case '/about':
        return 'ABOUT';
      case '/portfolio':
        return 'PORTFOLIO';
      case '/contact':
        return 'CONTACT';
      default:
        return '';
    }
  };

  return (
    <nav className="bg-white text-black p-4 shadow-lg fixed w-full top-0 z-20">
      <div className="container mx-auto flex items-center justify-between lg:justify-center">
        {/* Hamburger icon for small screens */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Show the title based on the current page on mobile */}
        <h1 className={`text-center text-2xl font-bold mx-auto ${isMenuOpen ? 'block' : 'lg:hidden'}`}>
          {isMobile ? getTitle() : 'Douglas Oliveira'}
        </h1>

        {/* Desktop menu links */}
        <ul className={`hidden lg:flex lg:space-x-8 lg:justify-center`}>
          {['/', '/about', '/portfolio', '/contact'].map((path) => (
            <li key={path}>
              <Link 
                to={path} 
                className={`font-bold hover:text-blue-600 ${isActive(path) ? 'text-blue-600' : ''}`} 
                onClick={handleLinkClick} 
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu (hamburger) */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-30">
          <button
            className="absolute top-6 left-6 text-4xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            &times; {/* Close icon */}
          </button>
          <ul className="space-y-8 text-2xl">
            {['/', '/about', '/portfolio', '/contact'].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-blue-400"
                  onClick={handleLinkClick} // Close the menu when clicking a link
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
