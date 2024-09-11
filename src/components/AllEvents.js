// src/components/AllEvents.js
import React from 'react';
import Event from './Event';
import './AllEvents.css';
import { useIsMobile } from '../utils/hooks';

const AllEvents = () => {
  const isMobile = useIsMobile();
  
  const getImagePath = (event) => {
    let EVENT_TO_IMAGE_MAP = {
      'haldi': {
        mobile: '/haldi-mobile.jpg',
        desktop: '/haldi-desktop.jpeg'
      },
      'sangeet': {
        mobile: '/sangeet-mobile.jpg',
        desktop: '/sangeet-desktop.jpeg'
      },
      'wedding': {
        mobile: '/wedding-mobile.jpg',
        desktop: '/wedding-desktop.jpeg'
      }
    }
    if (isMobile) {
      return EVENT_TO_IMAGE_MAP[event].mobile;
    } else {
      return EVENT_TO_IMAGE_MAP[event].desktop;
    }
  };

  return (
    <section id="events" className="all-events">
      <Event
        title="Haldi Ceremony"
        date="November 16, 2024"
        time="4:30 PM"
        locationMap="https://maps.google.com"
        location="Modheswari bhavan, Pethapur - Randheja Rd, Gandhinagar, Gujarat 382610"
        invitationText="Join us for the Haldi ceremony to bless the couple."
        imagePosition="right"
        imagePath={getImagePath('haldi')}
      />
      <Event
        title="Engagement & Sangeet Night"
        date="November 16, 2024"
        time="8:00 PM"
        locationMap="https://maps.google.com"
        location="Moonlight Ballroom, Downtown"
        invitationText="Dance the night away at our Sangeet celebration."
        imagePosition="left"
        imagePath={getImagePath('sangeet')}
      />
      <Event
        title="Wedding Ceremony"
        date="November 17, 2024"
        time="5:30 PM"
        locationMap="https://maps.google.com"
        location="The Grand Venue, City"
        invitationText="Celebrate the union of love and commitment."
        imagePosition="right"
        imagePath={getImagePath('wedding')}
      />
    </section>
  );
};

export default AllEvents;