const categories = [
    { name: "Events", icon: "/images/ccd-events.png" },
    { name: "Businesses", icon: "/images/clp-logo.png" },
    { name: "Pictures", icon: "/images/ccd-fireworks.png" },
    { name: "Sign-Ups", icon: "/images/ccd-signups.png" },
  ];
  
  export default function CategoryGrid() {
    return (
      <div className="category-grid">
        {categories.map(({ name, icon }) => (
          <div className="category" key={name}>
            <div className="category-icon">
              {icon ? (
                <img
                  src={icon}
                  alt={name}
                  style={{ width: 82, height: 82}}
                />
              ) : null}
            </div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    );
  }
  