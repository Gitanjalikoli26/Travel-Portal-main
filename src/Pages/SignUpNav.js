import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import '../styles/SignUpNav.css';
import './LoginPage.css';


const SignUpNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='navbar-container'>
    <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="left">
        <img
          src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/logo.png"
          alt="logo"
          className="logo"
        />
      </div>

      <div className="center">
        <button className="btn black" onClick={() => handleNavigation('/signup')}>
            <img
            src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/download-app/playstore.png"
            alt="Telegram Icon"
            className="icon"
          />
          Download App
        </button>

        <button className="btn help" onClick={() => handleNavigation('/telegram')}>
          Help
        </button>


       
      </div>
    </nav>

    </div>
  );
};

export default SignUpNav;
