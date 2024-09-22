// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYouPage';
import RSVP from './pages/RSVPPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </Router>
  );
}

export default App;