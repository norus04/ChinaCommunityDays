import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { label: 'EVENTS', image: '/images/Events.png' },
  { label: 'VENDORS', image: '/images/Vendors.png' },
  { label: 'SIGN-UP', image: '/images/Sign-Up.png' },
  { label: 'PICTURES', image: '/images/Pictures.png' },
  { label: 'CONTACT', image: '/images/Contact.png' },
  { label: 'ABOUT', image: '/images/About.png' },
];

const CategoryGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div
          className="category-item"
          key={cat.label}
          onClick={() => navigate(`/${cat.label.toLowerCase()}`)}
          style={{ cursor: 'pointer' }}
        >
          <img className="category-image" src={cat.image} alt={cat.label} />
          <div className="category-label">{cat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid; 