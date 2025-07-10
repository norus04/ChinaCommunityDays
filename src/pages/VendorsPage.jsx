import React from 'react';

const vendors = [
  { name: 'China Four Seasons Club', description: 'Hot dogs' },
  { name: 'Masons', description: 'Burgers' },
  { name: "Piggy Sue's Food Truck", description: 'Fried ice cream + bacon steak skewers' },
  { name: 'Raiders Sugarhouse', description: 'Maple syrup + cotton candy' },
  { name: 'Party Polooga' },
  { name: 'Tickles the Clown', description: 'Entertainment' },
  { name: 'Sandcastle Entertainment', description: 'Water slide + bouncy house' },
  { name: 'Make Em Your Way', description: 'Foam pit' },
  { name: 'China Community Garden', description: 'Fresh produce' },
  { name: 'R & F Design' },
  { name: 'Bout Creating' },
  { name: 'Make It Sweet Bakery' },
  { name: 'South China American Legion' },
];

const VendorsPage = () => (
  <div className="vendors-page">
    <h1 className="vendors-title">Vendors</h1>
    <div className="vendors-list">
      {vendors.map((biz, idx) => (
        <div className="vendors-card" key={idx}>
          <h2 className="vendors-name">{biz.name}</h2>
          {biz.description && (
            <p className="vendors-desc">{biz.description}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default VendorsPage; 