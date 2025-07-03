import React from 'react';

const categories = [
  { label: 'EVENTS', image: '/images/Events.png' },
  { label: 'BUSINESSES', image: '/images/Businesses.png' },
  { label: 'SIGN-UP', image: '/images/Sign-Up.png' },
  { label: 'PICTURES', image: '/images/Pictures.png' },
  { label: 'CONTACT', image: '/images/Contact.png' },
];

const CategoryGrid = () => (
  <div className="category-grid">
    {categories.map((cat) => (
      <div className="category-item" key={cat.label}>
        <img className="category-image" src={cat.image} alt={cat.label} />
        <div className="category-label">{cat.label}</div>
      </div>
    ))}
  </div>
);

export default CategoryGrid; 