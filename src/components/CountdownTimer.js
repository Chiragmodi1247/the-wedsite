// src/components/CountdownTimer.js
import React from 'react';
import Countdown from 'react-countdown';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const weddingDate = new Date('2024-11-17T12:00:00Z');

  // Renderer callback with conditionals
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>It's wedding time!</span>;
    } else {
      // Render the countdown
      return (
        <div className="countdown-container">
          <div className="countdown-item">
            <span>{days}</span> days
          </div>
          <div className="countdown-item">
            <span>{hours}</span> hours
          </div>
          <div className="countdown-item">
            <span>{minutes}</span> minutes
          </div>
          <div className="countdown-item">
            <span>{seconds}</span> seconds
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-timer">
      <p className='countdown-timer-title'>We are getting married in:</p>
      <Countdown date={weddingDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;