import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import './index.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black py-8 footer-container">
      <h1 className='followus'>FOLLOW US</h1>
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://www.facebook.com/stonepedia" target="_blank" rel="noopener noreferrer" className="mx-4 text-3xl hover:text-blue-500 foolow-icon">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/stonepedia" target="_blank" rel="noopener noreferrer" className="mx-4 text-3xl hover:text-pink-500 foolow-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/stonepedia/" target="_blank" rel="noopener noreferrer" className="mx-4 text-3xl hover:text-blue-700 foolow-icon">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/c/stonepedia" target="_blank" rel="noopener noreferrer" className="mx-4 text-3xl hover:text-red-600 foolow-icon">
          <FaYoutube />
        </a>
      </div>
      <div className="text-center text-white text-sm mt-4">
        <p>&copy; 2024 Stonepedia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
