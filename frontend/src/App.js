import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import IconNav from './Components/IconNav';
import BusinessSection from './Components/BusinessSection';
import AppDownload from './Components/AppDownload';
import WhyAkbar from './Components/WhyAkbar';
import AkbarNetwork from './Components/AkbarNetwork';
import Footer from './Components/Footer';

// Import pages
import SignupPage from './Pages/SignupPage';
import TelegramPage from './Pages/TelegramPage';
import FixedDaysDubai from './Pages/FixedDaysDubai';

import FixedDaysBali from './Pages/FixedDaysBali';
import FixedDaysThailand from './Pages/FixedDaysThailand';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <IconNav />
              <BusinessSection />
              <AppDownload />
              <WhyAkbar />
              <AkbarNetwork />
              <Footer />
            </>
          }
        />

        {/* Fixed Days Pages */}
        <Route path="/dubai" element={<FixedDaysDubai />} />
        <Route path="/bali" element={<FixedDaysBali />} />
        <Route path="/thailand" element={<FixedDaysThailand />} />

        {/* Other Pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/telegram" element={<TelegramPage />} />

        {/* Fallback Example */}
        <Route
          path="/services"
          element={
            <div style={{ paddingTop: '100px', textAlign: 'center' }}>
              <h2>All Services</h2>
              <p>Our full list of services will be available soon.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
