// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Gym Website. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://www.facebook.com" className="text-highlight mx-2 hover:text-accent">Facebook</a>
          <a href="https://www.twitter.com" className="text-highlight mx-2 hover:text-accent">Twitter</a>
          <a href="https://www.instagram.com" className="text-highlight mx-2 hover:text-accent">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
