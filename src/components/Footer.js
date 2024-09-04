// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2>RSVP</h2>
      <p>Please let us know if you can make it to our wedding by filling out the RSVP form.</p>
      <a href="/rsvp" className="rsvp-link">RSVP Here</a>
    </footer>
  );
};

export default Footer;