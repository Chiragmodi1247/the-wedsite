// src/components/Home.js
import React from 'react';
import WelcomeContainer from '../components/WelcomeContainer.js';
import AllEvents from '../components/AllEvents.js';
import BackToTop from '../components/BackToTop';
// import Instagram from './Instagram';
// import Footer from './../components/Footer.js';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <WelcomeContainer />
      <AllEvents />
      {/* <Instagram /> */}
      {/* <Footer /> */}
      <BackToTop />
    </div>
  );
};

export default Home;