
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common components
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import IconNav from './Components/IconNav';
import BusinessSection from './Components/BusinessSection';
import AppDownload from './Components/AppDownload';
import WhyAkbar from './Components/WhyAkbar';
import AkbarNetwork from './Components/AkbarNetwork';
import Footer from './Components/Footer';

// Pages
import SignupPage from './Pages/SignupPage';
import TelegramPage from './Pages/TelegramPage';

// ✅ Login/Signup components 
import MainSection from './Pages/MainSection';   // login form
import SignUpForm from './Pages/SignUpForm';     // sign up form
import SignUpNav from './Pages/SignUpNav';
function App() {
  return (
    <Router>
      

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
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

        {/* ✅ Login Page with LoginPage + MainSection + LoginFooter */}
        <Route
          path="/login"
          element={
            <>
              
            <SignUpNav/>
              <MainSection />

              <Footer />
            </>
          }
        />

        {/* ✅ Sign Up Page */}
        <Route
          path="/signup"
          element={
            <>
              {/* <LoginPage /> */}
              <SignUpNav/>
              <SignUpForm />
              {/* <LoginFooter /> */}
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/telegram" element={<TelegramPage />} />
        <Route
          path="/services"
          element={
            <div style={{ paddingTop: '100px' }}>
              <h2>All Services</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
