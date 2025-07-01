import './styles.css';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <Footer />
    </>
  );
}

export default App;
