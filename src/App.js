import React from 'react';
import './styles.css';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import EventsPage from './pages/EventsPage';
import BusinessesPage from './pages/BusinessesPage';
import SignUpPage from './pages/SignUpPage';
import PicturesPage from './pages/PicturesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <CategoryGrid />
          </>
        } />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/pictures" element={<PicturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
