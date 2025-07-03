import React from 'react';
import './styles.css';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <HeroSection />
      <CategoryGrid />
    </>
  );
}

export default App;
