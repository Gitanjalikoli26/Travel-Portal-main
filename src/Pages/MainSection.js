import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './LoginPage.css';

function MainSection() {
  const [mobile, setMobile] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleNext = () => {
    if (checked && mobile.length === 10) {
      navigate('/signup'); // ✅ Redirect to SignUpForm
    }
  };

  return (
    <div className="login-container">
      <img
        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
        alt="Top Banner"
        className="signup-image"
      />

      <div className="login-box">
        <h2 className="login-title">Log in or Sign Up</h2>

        <label className="label">Mobile Number</label>
        <div className="mobile-input-group">
          <select className="country-code">
            <option>India +91</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="mobile-input"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="captcha-box">
          <label className="captcha-label">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            I'm not a robot
          </label>
          <div className="recaptcha">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
            />
            <small>
              reCAPTCHA <br />
              <a href="#">Privacy</a> - <a href="#">Terms</a>
            </small>
          </div>
        </div>

        {/* ✅ Navigate to /signup when button clicked */}
        <button
          className="next-button"
          disabled={!checked || mobile.length !== 10}
          onClick={handleNext}
        >
          NEXT
        </button>

        <p className="support-text">
          Not able to Login?{' '}
          <a href="tel:+919513392500">Call us at +919513392500</a>
        </p>
      </div>
    </div>
  );
}

export default MainSection;
