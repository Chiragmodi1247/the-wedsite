// src/components/Welcome.js
import React from 'react';
import HeaderContainer from './Header';
import WelcomeContent from './WelcomeContent';
import './WelcomeContainer.css';

const WelcomeContainer = () => {
  return (
    <section className="welcome-container">
      <HeaderContainer />
      <WelcomeContent />
    </section>
  );
};

export default WelcomeContainer;