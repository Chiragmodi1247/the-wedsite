import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const HeaderContainer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <section className="header-container">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <nav className={`navbar ${isMobileMenuOpen ? 'is-mobile-menu-open' : ''}`}>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {location.pathname === '/' && (
            <>
              <p onClick={scrollToEvents}>Events</p>
              <p onClick={() => navigate('/rsvp')} className="rsvp-button">RSVP</p>
            </>
          )}
          {(location.pathname === '/rsvp' || location.pathname === '/thank-you') && (
            <p onClick={() => navigate('/')}>Home</p>
          )}
        </div>

        {/* Navbar for larger screens */}
        <div className="navbar-left-corner">
          {location.pathname === '/' && (
            <>
              <p onClick={scrollToEvents}>Events</p>
              <p onClick={() => navigate('/rsvp')} className="rsvp-button">RSVP</p>
            </>
          )}
          {location.pathname === '/rsvp' && (
            <p onClick={() => navigate('/')}>Home</p>
          )}
        </div>

        <div className="navbar-center">
          <img src="/ca_logo_white.svg" alt="Chirag&Ayushi" />
        </div>
      </nav>
    </section>
  );
};

export default HeaderContainer;