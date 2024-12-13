import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';

const HeroSection = () => {
  const navigate = useNavigate(); 

  const handleButton = () => {
    navigate('/home'); 
  };

  return (
    <div className="section">
      <h1 className="heading">WELCOME TO STONEPEDIA</h1>
      <h2 className="heading2">Unlock the Secrets of the Earth’s Most Stunning Stones</h2>
      <p className="paragraph">
        At Stonepedia, we aim to uncover the remarkable stories behind the world's most captivating stones. 
        Explore gemstones, minerals, and ancient stones from a geological perspective, and gain a deeper 
        understanding of their significance and beauty.
      </p>

      <button type="button" className="explore-now-btn" onClick={handleButton}>
        Explore Now
      </button>
    </div>
  );
};

export default HeroSection;





