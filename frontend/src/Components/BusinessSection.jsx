import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/businesssection.css';

const BusinessSection = () => {
  const cards = [
    {
      title: '40 Years of Excellence',
      image: 'https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/years.svg',
      content: 'Established in the year 1978, with a varied experience of over four decades in the tourism industry, we are always at the service of our valued partners and customers in providing the most professional and personalized services by offering travellers an extensive selection of travel services and package tours to meet every budget and activities of every kind at reasonable rates....',
    },
    {
      title: '55K+ Registered Agents',
      image: 'https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/agents.svg',
      content: 'Established in the year 1978, with a varied experience of over four decades in the tourism industry, we are always at the service of our valued partners and customers in providing the most professional and personalized services by offering travellers an extensive selection of travel services and package tours to meet every budget and activities of every kind at reasonable rates.',
    },
    {
      title: 'Global Presence',
      image: 'https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/commissions.svg',
      content: 'Established in the year 1978, with a varied experience of over four decades in the tourism industry, we are always at the service of our valued partners and customers in providing the most professional and personalized services by offering travellers an extensive selection of travel services and package tours to meet every budget and activities of every kind at reasonable rates.',
    },
    {
      title: 'Trusted by Millions',
      image: 'https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/support.svg',
      content: 'Established in the year 1978, with a varied experience of over four decades in the tourism industry, we are always at the service of our valued partners and customers in providing the most professional and personalized services by offering travellers an extensive selection of travel services and package tours to meet every budget and activities of every kind at reasonable rates.',
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="business-section">
      {/* Travel Agent Banner */}
      <div className="register-banner">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/travel-agent-register.png"
            alt="Become a Travel Agent"
            className="register-image"
          />
        </a>
      </div>

      {/* Heading */}
      <div className="business-heading">
        <p>Start Your Profitable Business Today With</p>
        <h1>The Best Travel Portal in India</h1>
      </div>

      {/* Carousel for Cards */}
      <div className="card-carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="card-wrapper">
              <div className="card">
                <div className="card-top">
                  <img src={card.image} alt={card.title} className="card-image" />
                  <h4 className="card-title">{card.title}</h4>
                </div>
                <p className="card-content">{card.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BusinessSection;
