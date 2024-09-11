import React from 'react';
import './Header.css';

const HeaderContainer = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRSVP = () => {
    const eventsSection = document.getElementById('rsvpContainer');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="header-container">
      <nav className="navbar">

        <div className="navbar-left-corner">
          <p onClick={scrollToEvents}>Events</p>
        </div>

        <div className="navbar-center">
            <img src="/ca_logo_white.svg" alt="Chirag&Ayushi" />
        </div>

        <div className="navbar-right-corner">
            <p onClick={scrollToRSVP} className="rsvp-button">RSVP</p>
        </div>
      </nav>
    </section>
  );
};

export default HeaderContainer;