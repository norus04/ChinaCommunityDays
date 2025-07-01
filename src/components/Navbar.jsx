export default function Navbar() {
  return (
    <div className="navbar">
      <div style={{ fontSize: '30px' }}>
        <strong>China Community Days</strong> <span style={{ fontSize: '18px' }}>est. 2004</span>
      </div>
      <div className="nav-links">
        <div>
        {["Events", "Businesses", "Pictures", "Sign-Ups"].map(link => (
          <a key={link} href="#">{link}</a>
        ))}
        </div>
      </div>
    </div>
  );
}
