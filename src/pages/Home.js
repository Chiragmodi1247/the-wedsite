// src/components/Home.js
import React from 'react';
import WelcomeContainer from '../components/WelcomeContainer.js';
import AllEvents from '../components/AllEvents.js';
import RSVPContainer from '../components/RSVPContainer.js';
// import Instagram from './Instagram';
// import Footer from './../components/Footer.js';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <WelcomeContainer />
      <AllEvents />
      <RSVPContainer />
      {/* <Instagram /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;