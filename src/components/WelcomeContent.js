// src/components/Welcome.js
import React from 'react';
import './WelcomeContent.css';
import CountdownTimer from './CountdownTimer';

const WelcomeContent = () => {
  return (
    <div className="welcome-content">
      <CountdownTimer />
      {/* <p className="welcome-content-sub-title">We are getting married!</p> */}
      <p className="welcome-content-main-title">Chirag & Ayushi</p>
      {/* <p className="welcome-content-date">Nov 17, 2024</p> */}
    </div>
  );
};

export default WelcomeContent;