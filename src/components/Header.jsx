import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Gym Website</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-highlight">Home</Link>
          <Link to="/diet" className="hover:text-highlight">Diet</Link>
          <Link to="/workout" className="hover:text-highlight">Workout</Link>
          <Link to="/calorie-calculator" className="hover:text-highlight">Calorie Calculator</Link>
          <Link to="/weight-tracker" className="hover:text-highlight">Weight Tracker</Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 mt-4">
            <Link to="/" className="hover:text-highlight" onClick={toggleMenu}>Home</Link>
            <Link to="/diet" className="hover:text-highlight" onClick={toggleMenu}>Diet</Link>
            <Link to="/workout" className="hover:text-highlight" onClick={toggleMenu}>Workout</Link>
            <Link to="/calorie-calculator" className="hover:text-highlight" onClick={toggleMenu}>Calorie Calculator</Link>
            <Link to="/weight-tracker" className="hover:text-highlight" onClick={toggleMenu}>Weight Tracker</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
