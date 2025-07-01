import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/community-days">Community Days</Link></li>
        <li><Link to="/local-businesses">Local Businesses</Link></li>
        <li><Link to="/polls">Polls</Link></li>
        <li><Link to="/community-photos">Community Photos</Link></li>
        <li><Link to="/admin">Admin Panel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 