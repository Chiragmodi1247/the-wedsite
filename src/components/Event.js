// src/components/EventContainer.js
import React from 'react';
import './Event.css';

const Event = ({
  title,
  date,
  time,
  locationMap,
  location,
  invitationText,
  imagePosition,
  imagePath,
  anyNotes = '' // Optional prop with a default value
}) => {
  return (
    <div className={`event-container ${imagePosition}`}>
      <div className="event-text">
        <p className="event-title">{title}</p>

        <p className="event-date">
          {date}
        </p>

        <p className="event-time">
          {time}
        </p>

        <p className="event-invitation">{invitationText}</p>
        {anyNotes && <p className="event-notes">{anyNotes}</p>}
      </div>
      <div className="event-image">
        <img src={imagePath} alt={title} />
      </div>
    </div>
  );
};

export default Event;