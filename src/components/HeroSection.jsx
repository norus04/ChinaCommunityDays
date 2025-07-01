import CategoryGrid from './CategoryGrid';

export default function HeroSection() {
    return (
      <div className="hero">
        <input placeholder="What are you looking for?" className="hero-search" />
        <div className="hero-categories-overlay">
          <CategoryGrid />
        </div>
      </div>
    );
  }
  