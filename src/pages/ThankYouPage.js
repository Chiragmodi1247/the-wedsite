// src/components/ThankYou.js
import React from 'react';
import './ThankYouPage.css'; // Ensure you create this CSS file

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      {/* <header className="thank-you-header">
        <img src="/ca_logo_white.svg" alt="Wedding Logo" className="logo" />
      </header> */}
      <main className="thank-you-content">
        <h1 className="thank-you-message">Thank You!</h1>
        <p className="thank-you-submessage">We appreciate your presence and look forward to celebrating with you.</p>
      </main>
    </div>
  );
};

export default ThankYouPage;