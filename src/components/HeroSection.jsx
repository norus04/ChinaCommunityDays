import React from 'react';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg" />
    <div className="hero-content">
      <div className="search-bar">
        <input type="text" placeholder="Search this site" />
        <button className="search-btn">→</button>
      </div>
    </div>
  </section>
);

export default HeroSection; 