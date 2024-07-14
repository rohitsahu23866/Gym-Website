import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold primary-color">
            GYM WEBSITE
          </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-primary primary-color text-xl">Home</Link>
          <Link to="/diet" className="hover:text-primary primary-color text-xl">Diet</Link>
          <Link to="/workout" className="hover:text-primary primary-color text-xl">Workout</Link>
          <Link to="/calorie-calculator" className="hover:text-primary primary-color text-xl">Calorie Calculator</Link>
          <Link to="/weight-tracker" className="hover:text-primary primary-color text-xl">Weight Tracker</Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black bg-primary-color focus:outline-none"
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
            <Link to="/" className="hover:text-primary primary-color text-xl" onClick={toggleMenu}>Home</Link>
            <Link to="/diet" className="hover:text-primary primary-color text-xl" onClick={toggleMenu}>Diet</Link>
            <Link to="/workout" className="hover:text-primary primary-color text-xl" onClick={toggleMenu}>Workout</Link>
            <Link to="/calorie-calculator" className="hover:text-primary text-xl primary-color" onClick={toggleMenu}>Calorie Calculator</Link>
            <Link to="/weight-tracker" className="hover:text-primary text-xl primary-color" onClick={toggleMenu}>Weight Tracker</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
