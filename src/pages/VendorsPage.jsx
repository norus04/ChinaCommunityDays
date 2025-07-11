import React from 'react';

const vendors = [
  { name: 'China Four Seasons Club', description: 'Serving hot dogs and supporting local recreation' },
  { name: 'Masons', description: 'Grilling up burgers' },
  { name: "Piggy Sue's Food Truck", description: 'Fried ice cream and bacon steak skewers' },
  { name: 'Raiders Sugarhouse', description: 'Maple syrup and fresh cotton candy' },
  { name: 'Party Palooga', description: 'Inflatables and party fun for all ages' },
  { name: 'Tickles the Clown', description: 'Interactive kids’ entertainment and balloon art' },
  { name: 'Sandcastle Entertainment', description: 'Water slide and bounce house attractions' },
  { name: 'Make Em Your Way', description: 'Running the foam pit' },
  { name: 'China Community Garden', description: 'Fresh, local produce grown by the community' },
  { name: 'R & F Design', description: 'Handmade crafts and custom creations' },
  { name: 'Bout Creating', description: 'Creative goods from a local artisan' },
  { name: 'Make It Sweet Bakery', description: 'Homemade baked goods and sweet treats' },
  { name: 'South China American Legion', description: 'Supporting veterans with food and info' },
  { name: 'Maine Photo Works', description: 'Local photography and videography' },
  { name: 'Sy and Lei Laser Engraving', description: 'Laser-cut and engraved gifts' },
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