import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg" />
    <div className="hero-content">
      <Link to="/events" className="see-events-btn">See Events</Link>
    </div>
  </section>
);

export default HeroSection; 