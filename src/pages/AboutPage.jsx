import React from 'react';

const AboutPage = () => (
  <div
    className="about-page"
    style={{
      background: "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('/images/AboutBackground.jpg') center center/cover no-repeat",
      minHeight: "100vh",
      position: "relative"
    }}
  >
    <div className="about-content">
      <h1>About</h1>
      <p>China Community Days is a yearly celebration that brings together the people of China, Maine to enjoy a weekend full of fun, connection, and community pride. From local food and fireworks to live music, games, and family-friendly activities, our goal is to create a space where neighbors can come together and celebrate what makes our town special.</p>
      <p>The event is organized by volunteers who care deeply about our community. We work to highlight local businesses and create memorable experiences for all ages. Whether you're a lifelong resident or visiting for the first time, China Community Days is a chance to enjoy the beauty of our town and the people who call it home.</p>
    </div>
  </div>
);

export default AboutPage; 