import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src="/images/China-Logo.png" className="china-logo" />
        </Link>
        <span className="logo-title">
          China Community Days
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar; 