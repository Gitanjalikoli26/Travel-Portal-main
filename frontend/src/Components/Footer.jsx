import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-links">
            <a href="#">Home</a>
            <span>|</span>
            <a href="#">GST</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
            <span>|</span>
            <a href="#">Disclaimer</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Help</a>
            <span>|</span>
            <a href="#">Support</a>
          </div>
          <p className="copyright">Copyright © 2025 www.akbartravelsonline.com. All Rights Reserved.</p>
        </div>

        <div className="footer-copy">
          <p className="powered">Powered By: <strong>BENZY INFOTECH</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;