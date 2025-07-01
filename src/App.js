import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CommunityDays from './pages/CommunityDays';
import LocalBusinesses from './pages/LocalBusinesses';
import Polls from './pages/Polls';
import CommunityPhotos from './pages/CommunityPhotos';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community-days" element={<CommunityDays />} />
          <Route path="/local-businesses" element={<LocalBusinesses />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/community-photos" element={<CommunityPhotos />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
