import React from "react";
import "./RSVPContainer.css";
import RSVPForm from "./RSVPForm";

const RSVPContainer = () => {
  return (
    <section id="rsvpContainer" className="rsvp-container">
      <p className="rsvp-container-title">We would love to see you at our wedding!</p>
      <RSVPForm />
    </section>
  );
}

export default RSVPContainer;