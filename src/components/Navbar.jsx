export default function Navbar() {
  return (
    <div className="navbar">
      <div style={{ fontSize: '30px', fontFamily: 'serif' }}>
        China Community Days <span style={{ fontSize: '18px' }}>est. 2004</span>
      </div>
      <div className="nav-links">
        {["Events", "Businesses", "Pictures", "Polls"].map(link => (
          <a key={link} href="#">{link}</a>
        ))}
      </div>
    </div>
  );
}
