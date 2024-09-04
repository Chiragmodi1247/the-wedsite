import React from 'react';
import './Header.css';

const HeaderContainer = () => {
  return (
    <section className="header-container">
      <nav className="navbar">

        <div className="navbar-left-corner">
          <p>Home</p>
          <p>Events</p>
        </div>

        <div className="navbar-center">
            <img src="/ca_logo_white.svg" alt="Chirag&Ayushi" />
        </div>

        <div className="navbar-right-corner">
            <p className="rsvp-button">RSVP</p>
        </div>
      </nav>
    </section>
  );
};

export default HeaderContainer;