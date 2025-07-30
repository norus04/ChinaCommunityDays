import React from 'react';

const vendors = [
  { name: 'Brown Eyed Bling', description: 'Bling, jewelry, and accesories' },
  { name: 'Chaos, Coffee & Creativity Studio', description: 'Creative studio offering custom designs' },
  { name: 'China Community Church', description: 'Local church supporting the community' },
  { name: 'China Community Garden', description: 'Fresh, local produce grown by the community' },
  { name: 'China Football', description: 'Youth football program and community engagement' },
  { name: 'China Four Seasons Club', description: 'Serving hot dogs and supporting local recreation' },
  { name: 'China Regional Church of the Nazarene', description: 'Regional church serving the community' },
  { name: "Darling's Ice Cream Truck", description: 'Serving classic ice cream truck treats' },
  { name: 'Maine Photo Works', description: 'Local photography and videography' },
  { name: 'Mainely Hats & Faithful Creations', description: 'Hats, apparel, and accessories' },
  { name: 'Make Em Your Way', description: 'Running the foam pit' },
  { name: 'Make It Sweet Bakery', description: 'Homemade baked goods and sweet treats' },
  { name: 'Masons', description: 'Grilling up burgers' },
  { name: "Memaw's Creations & More", description: 'Handcrafted goods and unique creations' },
  { name: 'Party Palooga', description: 'Inflatables and party fun for all ages' },
  { name: "Piggy Sue's Food Truck", description: 'Fried ice cream and bacon steak skewers' },
  { name: 'R & F Design', description: 'Handmade crafts and custom creations' },
  { name: 'Raiders Sugarhouse', description: 'Maple syrup and fresh cotton candy' },
  { name: 'Sandcastle Entertainment', description: 'Water slide and bounce house attractions' },
  { name: 'South China American Legion', description: 'Supporting veterans with food and info' },
  { name: "Stephanilla's Creative Creations", description: 'Unique goods and candles' },
  { name: 'Sy and Lei Laser Engraving', description: 'Laser-cut and engraved gifts' },
  { name: 'The Happy Kitchen Mobile Cafe', description: 'Serving delicious food' },
  { name: 'Thurston Park', description: "China's local park" },
  { name: 'Tickles the Clown', description: 'Interactive kids’ entertainment and balloon art' },
  { name: 'Wood Carving Demonstration', description: 'Live wood carving demonstration by Dennis Parlin' },
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