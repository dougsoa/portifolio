import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-black p-4 shadow-md fixed w-full top-0 z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/" className="font-bold hover:text-blue-600">HOME</Link>
        </li>
        <li>
          <Link to="/about" className="font-bold hover:text-blue-600">ABOUT</Link>
        </li>
        <li>
          <Link to="/portfolio" className="font-bold hover:text-blue-600">PROJECTS</Link>
        </li>
        <li>
          <Link to="/resume" className="font-bold hover:text-blue-600">RESUME</Link>
        </li>
        <li>
          <Link to="/contact" className="font-bold hover:text-blue-600">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
