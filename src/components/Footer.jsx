// src/components/Footer.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
  return (
    <footer className=" text-primary-color text-2xl py-6 mt-auto">
      <div className="container mx-auto text-center">
      <p className='text-white text-2xl sm:text-2xl lg:text-2xl font-extrabold'>
                <span className='primary-color'>
                    Website made by
                </span> <br/>
                <TypeAnimation sequence={["Susheel Sahu",3000,"",1000    
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </p>
        <div className="mt-4 text-sm">
          <a href="https://www.instagram.com/rohitsahu_xo_" target='_blank' className="primary-color text-highlight mx-2 hover:text-accent">Instagram</a>
          <a href="https://www.linkedin.com/in/susheel-sahu/" target='_blank' className="primary-color text-highlight mx-2 hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
