import React, { useState } from 'react';
import '../styles/akbarnetwork.css';

const AkbarNetwork = () => {
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="akbar-network-container">
      <div className="akbar-network-content">
        <h2>Akbar Network</h2>

        <div className="form-group">
          <label>Country</label>
          <select 
            value={country} 
            onChange={(e) => {
              setCountry(e.target.value);
              setState('');
              setCity('');
            }}
          >
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="Qatar">Qatar</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Oman">Oman</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="form-group">
          <label>State</label>
          <select 
            value={state} 
            onChange={(e) => {
              setState(e.target.value);
              setCity('');
            }}
          >
            <option value="">Select State</option>
            {country === 'India' && (
              <>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
              </>
            )}
            {country === 'USA' && (
              <>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
              </>
            )}
          </select>
        </div>

        <div className="form-group">
          <label>City</label>
          <select 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            disabled={!state}
          >
            <option value="">Select City</option>
            {state === 'Maharashtra' && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Nagpur">Nagpur</option>
              </>
            )}
            {state === 'Gujarat' && (
              <>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
              </>
            )}
          </select>
        </div>

        <button className="map-button" onClick={() => {
          console.log('Viewing map for:', { country, state, city });
        }}>
          <span>📍</span> View on Map
        </button>
      </div>
    </div>
  );
};

export default AkbarNetwork;