// src/components/AllEvents.js
import React from 'react';
import Event from './Event';
import './AllEvents.css';

const AllEvents = () => {
  return (
    <section className="all-events">
      <Event
        title="Haldi Ceremony"
        date="November 8, 2024"
        time="10:00 AM"
        locationMap="https://maps.google.com"
        location="Modheswari bhavan, Pethapur - Randheja Rd, Gandhinagar, Gujarat 382610"
        invitationText="Join us for the Haldi ceremony to bless the couple."
        imagePosition="right"
        imagePath="/haldi-image.jpeg"
        // anyNotes="Wear yellow for this event."
      />
      <Event
        title="Sangeet Night"
        date="November 9, 2024"
        time="7:00 PM"
        locationMap="https://maps.google.com"
        location="Moonlight Ballroom, Downtown"
        invitationText="Dance the night away at our Sangeet celebration."
        imagePosition="left"
        imagePath="/sangeet-image.jpeg"
      />
      <Event
        title="Wedding Ceremony"
        date="November 10, 2024"
        time="5:00 PM"
        locationMap="https://maps.google.com"
        location="The Grand Venue, City"
        invitationText="Celebrate the union of love and commitment."
        imagePosition="right"
        imagePath="/wedding-image.jpeg"
        // anyNotes="Please arrive 15 minutes early."
      />
    </section>
  );
};

export default AllEvents;