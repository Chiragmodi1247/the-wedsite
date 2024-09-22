// src/components/ThankYou.js
import React from 'react';
import RSVPForm from "../components/RSVPForm";
import HeaderContainer from '../components/Header';
import './RSVPPage.css';

const RSVPPage = () => {
  return (
    <div className="rsvp-page">
      <div className='rsvp-page-header'>
        <HeaderContainer />
      </div>
      <p className="rsvp-container-title">We would love to see you at our wedding!</p>
      <RSVPForm />
    </div>
  );
};

export default RSVPPage;