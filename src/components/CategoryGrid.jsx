const categories = [
    { name: "Events" },
    { name: "Businesses" },
    { name: "Pictures" },
    { name: "Sign-Ups" },
  ];
  
  export default function CategoryGrid() {
    return (
      <div className="category-grid">
        {categories.map(({ name, icon }) => (
          <div className="category" key={name}>
            <div className="category-icon">{icon}</div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    );
  }
  