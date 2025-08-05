import React, { useState, useEffect } from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/disney160525.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/gdc-login-08075.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/queensland241224.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/contiki230625.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/senior161024.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/dubai100924.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/airindialogin0045.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/flylogin280324.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/travel-31-08-21.jpg" },
    { image: "https://content.akbartravelsonline.com/b2bdesign/deals/deal-images/IN/queensland241224.jpg" }
  ];

  // Number of cards visible at once
  const cardsPerView = 3;

  // Total number of dot positions (start index of each 3-card set)
  const dotCount = Math.ceil(cards.length / cardsPerView);

  // Auto-slide every 3 seconds (move by 1 card)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const getVisibleCards = () => {
    if (currentIndex + cardsPerView <= cards.length) {
      return cards.slice(currentIndex, currentIndex + cardsPerView);
    } else {
      return [...cards.slice(currentIndex), ...cards.slice(0, (currentIndex + cardsPerView) % cards.length)];
    }
  };

  // Handle dot click to slide 3 cards at a time
  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex * cardsPerView);
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Sail & Earn with Genting Cruise!</h1>
        <div className="hero-text1">
          <h3>Singapore Sailings | 2 & 3 Nights | 3rd & 4th Pax 75% Off</h3>
          <button>Book Now</button>
        </div>
      </div>

      <div className="hero-cards">
        {getVisibleCards().map((card, index) => (
          <div
            key={index}
            className="hero-card"
            style={{ backgroundImage: `url(${card.image})` }}
          />
        ))}
      </div>

      <div className="card-dots">
        {Array.from({ length: dotCount }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index * cardsPerView === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to card group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
