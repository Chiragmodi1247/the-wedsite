import { firestore } from './../firebase'; // Make sure this is your firebase.js file
import { collection, addDoc } from 'firebase/firestore';

// Example function to submit an RSVP
const submitRSVP = async (rsvpData) => {
    const rsvpCollection = collection(firestore, 'rsvps');
    await addDoc(rsvpCollection, rsvpData);
};

export { submitRSVP };