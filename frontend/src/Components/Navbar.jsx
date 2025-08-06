import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
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
    <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="left">
        <img
          src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/logo.png"
          alt="logo"
          className="logo"
        />
      </div>

      <div className="center">
        <button className="btn yellow" onClick={() => handleNavigation('/signup')}>
          API Sign-Up
        </button>

        <button className="btn blue" onClick={() => handleNavigation('/telegram')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram Icon"
            className="icon"
          />
          Telegram
        </button>

        <input type="text" placeholder="Username" className="input-field simple-input" />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-field simple-input"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button className="btn green">Sign In</button>

       
      </div>
    </nav>
  );
};

export default Navbar;
