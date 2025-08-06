import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FixedDaysDubai.css'; // Custom styles for layout
import { FaStar } from 'react-icons/fa';

const FixedDaysDubai = () => {
  const [packages, setPackages] = useState([]);
  const [searchParams, setSearchParams] = useState({
    date: '',
    nights: '',
    adults: '',
    children: ''
  });

  useEffect(() => {
    // Adding console.log to confirm data fetch
    axios
      .get('http://localhost:8080/api/packages?destination=Dubai')
      .then((res) => {
        console.log('API Response data:', res.data);
        setPackages(res.data);
      })
      .catch((err) => console.error('Error loading packages:', err));
  }, []);

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log('Search clicked:', searchParams);
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide broken image
  };

  return (
    <div className="dubai-page">
      {/* Top Navigation Bar */}
      <div className="top-navbar-section">
        <div className="container top-navbar-content">
          <a href="/" className="navbar-logo">
            <img
              src="http://localhost:8080/images/logo.png"
              alt="Akbar Travels Logo"
              onError={handleImageError}
            />
          </a>
          <div className="navbar-links-login">
            <button className="navbar-button">API Sign-Up</button>
            <button className="navbar-button telegram">Telegram</button>
            <input placeholder="Username" className="navbar-input" />
            <input placeholder="Password" type="password" className="navbar-input" />
            <button className="navbar-button signin">Sign In</button>
          </div>
        </div>
      </div>

      {/* Main Banner */}
      <section className="dmc-hero-banner">
        <div className="container dmc-banner-content">
          <div className="dmc-banner-text">
            <h1>Trusted DMC for Dubai</h1>
            <ul>
              <li>Best on-ground Service with Own Local Team</li>
              <li>Simple Payment & TCS Process</li>
              <li>Faster Booking Confirmation</li>
            </ul>
          </div>
          <div className="dmc-banner-image-container">
            <img
              src="http://localhost:8080/images/downtown-4045036_1920.jpg"
              alt="Dubai Skyline"
              className="dmc-banner-image"
              onError={handleImageError}
            />
            <div className="dmc-experiences-info">
              <span className="experiences-count">20,000+</span>
              <p className="experiences-text">Experience Booked</p>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending-section">
        <div className="container">
          <h2 className="section-title">Trending in Dubai</h2>
          <div className="trending-cards-container">
            {['Dubai', 'Maldives', 'Bali'].map((place, index) => (
              <div key={index} className="destination-card">
                <img
                  src={`http://localhost:8080/images/${place.toLowerCase()}-beach.jpg`}
                  alt={place}
                  className="destination-card-image"
                  onError={handleImageError}
                />
                <div className="destination-card-content">
                  <h3>{place}</h3>
                  <p className="destination-card-price">Starting from ₹15,000</p>
                  <button className="destination-card-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Packages */}
      <section className="recommended-packages-section">
        <div className="container">
          <h2 className="section-title">Our Top Recommended Packages</h2>
          <div className="recommended-packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <img
                  src={`http://localhost:8080${pkg.imageUrl}`}
                  // CORRECTION: Replaced `pkg.title` with `pkg.name`
                  alt={pkg.name}
                  className="package-card-image"
                  onError={handleImageError}
                />
                <div className="package-card-content">
                  {/* CORRECTION: Replaced `pkg.title` with `pkg.name` */}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <p className="package-card-price">₹{pkg.price}</p>
                  <button className="package-card-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Packages */}
      <section className="package-list-section">
        <div className="container">
          <h2 className="section-title">Find Your Package</h2>
          <div className="package-list-search-bar">
            <input type="date" name="date" onChange={handleInputChange} className="navbar-input" />
            <input placeholder="Nights" name="nights" onChange={handleInputChange} className="navbar-input" />
            <input placeholder="Adults" name="adults" onChange={handleInputChange} className="navbar-input" />
            <input placeholder="Children" name="children" onChange={handleInputChange} className="navbar-input" />
            <button className="search-package-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="package-list-items-container">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-list-item">
                <div className="package-list-item-image-container">
                  <img
                    src={`http://localhost:8080${pkg.imageUrl}`}
                    // CORRECTION: Replaced `pkg.title` with `pkg.name`
                    alt={pkg.name}
                    className="package-list-item-image"
                    onError={handleImageError}
                  />
                </div>
                <div className="package-list-item-details">
                  {/* CORRECTION: Replaced `pkg.title` with `pkg.name` */}
                  <h3>{pkg.name}</h3>
                  <p className="rating-stars">
                    <FaStar /> 4.5
                  </p>
                  {/* CORRECTION: Replaced `pkg.itinerary` with `pkg.durationDays` and calculated nights */}
                  <p>{pkg.durationDays} Days / {pkg.durationDays > 1 ? pkg.durationDays - 1 : 1} Nights</p>
                </div>
                <div className="package-list-item-actions">
                  <p className="package-list-item-price">₹{pkg.price}</p>
                  <button className="package-list-item-button">Customize</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dubai-cta">
        <div className="container">
          <h2>Ready to explore Dubai?</h2>
          <button className="cta-button">Book Now</button>
        </div>
      </section>

      {/* Experts & OnTrip Section */}
      <section className="expert-ontrip-section">
        <div className="container">
          <div className="expert-profile-card">
            <img
              src="http://localhost:8080/images/woman-1866081_1920.jpg"
              alt="Anjali Desai"
              className="expert-image"
              onError={handleImageError}
            />
            <p className="expert-welcome">Hello I am</p>
            <h3 className="expert-name">Anjali Desai</h3>
            <p className="expert-title">Middle East Travel</p>
            <div className="expert-contact">
              <a href="mailto:anjali@travel.com">Email: anjali@travel.com</a>
            </div>
          </div>

          <div className="ontrip-banner">
            <div className="ontrip-content">
              <h2>Book Dubai <span className="highlight">OnTrip</span> Live!</h2>
              <p>Seamless & Stress-Free Travel</p>
              <button className="ontrip-button">Download Now</button>
            </div>
            <div className="ontrip-graphic">
              <span className="smiley-face">😊</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="customer-stories-section">
        <div className="container">
          <h2 className="section-title">Customer Stories</h2>
          <div className="customer-stories-carousel">
            <div className="customer-story-card">
              <img
                src="http://localhost:8080/images/emotion-6524546_1920.jpg"
                alt="Priya Sharma"
                className="customer-story-image"
                onError={handleImageError}
              />
              <div className="customer-story-overlay">
                <span className="play-button">▶️</span>
              </div>
              <div className="customer-story-content">
                <p className="customer-rating"><FaStar /> 5.0</p>
                <p>Akbar Travels made my Dubai trip a dream come true...</p>
              </div>
            </div>
            <div className="customer-story-card">
              <img
                src="http://localhost:8080/images/ok-2385794_1920.jpg"
                alt="Rahul Singh"
                className="customer-story-image"
                onError={handleImageError}
              />
              <div className="customer-story-overlay">
                <span className="play-button">▶️</span>
              </div>
              <div className="customer-story-content">
                <p className="customer-rating"><FaStar /> 4.8</p>
                <p>The Maldives package was exceptional...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency App Banner */}
      <section className="agency-app-banner-section">
        <div className="container">
          <div className="agency-app-content">
            <div className="agency-app-text">
              <h2>Your Agency - Your App!</h2>
              <p>Brand your agency and offer a seamless booking experience to your clients.</p>
              <a href="#" className="cta-button">Download Now</a>
            </div>
            <div className="agency-app-graphic">
              <img src="http://localhost:8080/images/phone-graphic.png" alt="Phone App" className="phone-graphic" />
              <span className="graphic-text">Your App Name</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">FAQs</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question">
                How do I book a package?
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>You can book directly on our website or by contacting one of our travel experts.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What is your cancellation policy?
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>Our cancellation policy varies depending on the package and time of cancellation. Please refer to the specific package details for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {['burj-khalifa-2212978_1920.jpg', 'downtown-4045036_1920.jpg', 'camel-4959997_1920.jpg', 'boat-7767575_1920.jpg'].map((img, i) => (
              <div key={i} className="gallery-item">
                <img
                  src={`http://localhost:8080/images/${img}`}
                  alt={`Gallery ${i + 1}`}
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dubai-footer">
        <div className="container footer-content">
          <p>© 2025 Akbar Travels</p>
        </div>
      </footer>
    </div>
  );
};

export default FixedDaysDubai;