import React from 'react';
import '../styles/appdownload.css';

const AppDownload = () => {
  return (
    <div className="app-download-section">
      <div className="app-download-container">
        {/* Left: Mobile Image */}
        <div className="app-preview">
          <img 
            src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/mob-app.png" 
            alt="Mobile App Preview" 
            className="mobile-image"
          />
        </div>

        {/* Center: Text and Download Buttons */}
        <div className="app-download-content">
          <h2>Download<br />Our Mobile App</h2>
          <div className="download-buttons">
            <a href="#" className="download-button">
              <img 
                src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/apple-appstore.png" 
                alt="Download on App Store" 
              />
            </a>
            <a href="#" className="download-button">
              <img 
                src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/playstore.png" 
                alt="GET ON Google Play" 
              />
            </a>
          </div>
        </div>

        {/* Right: QR Code */}
        <div className="qr-code-section">
          <img 
            src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/images/qrcode.png" 
            alt="Scan QR Code" 
            className="qr-code-image"
          />
          <p>Scan the QR Code to download<br />the Akbartravels Mobile App</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;