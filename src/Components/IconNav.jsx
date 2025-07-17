import React from 'react';
import '../styles/iconnav.css';

const services = [
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/insurance.svg", label: "CAR" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/hotel.svg", label: "UMRAH" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/holidays.svg", label: "TRAIN" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/airplane.svg", label: "CRUISE" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/visa.svg", label: "UTILITIES" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/umrah.svg", label: "HOLIDAYS" },
  { image: "https://content.akbartravelsonline.com/b2brevamp/S4V2/assets/v2images/new/utilities.svg", label: "FLIGHT" },
];

const IconNav = () => {
  return (
    <div className="icon-nav-wrapper">
      <div className="icon-nav-container">
        {services.map((item, index) => (
          <div key={index} className="icon-item">
            <img src={item.image} alt={item.label} className="icon-image" />
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconNav;
