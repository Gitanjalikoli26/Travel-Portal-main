import React, { useState } from 'react';
import './LoginPage.css'; // reuse your existing CSS file

function SignUpForm() {
  const [form, setForm] = useState({
    mobile: '',
    email: '',
    name: '',
    company: '',
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="signup-container">
      <img
        className="signup-image"
        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
        alt="Signup Banner"
      />

      <div className="signup-box">
        <h2 className="login-title">Sign up</h2>

        <label className="label">Mobile Number</label>
        <div className="mobile-input-group">
          <select className="country-code">
            <option>India +91</option>
          </select>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="mobile-input"
            value={form.mobile}
            onChange={handleChange}
          />
        </div>

        <label className="label">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          className="full-input"
          value={form.email}
          onChange={handleChange}
        />

        <label className="label">Enter Name</label>
        <input
          type="text"
          name="name"
          placeholder="Ex: Richard Parker"
          className="full-input"
          value={form.name}
          onChange={handleChange}
        />

        <label className="label">Enter Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="TravClan"
          className="full-input"
          value={form.company}
          onChange={handleChange}
        />

        <div className="captcha-box">
          <label className="captcha-label">
            <input
              type="checkbox"
              name="checked"
              checked={form.checked}
              onChange={handleChange}
            />
            I'm not a robot
          </label>
          <div className="recaptcha">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
            />
            <small>reCAPTCHA <br /><a href="#">Privacy</a> - <a href="#">Terms</a></small>
          </div>
        </div>

        <button
          className="next-button"
          disabled={!form.checked || form.mobile.length !== 10}
        >
          REQUEST OTP
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
