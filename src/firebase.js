import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCz6RAyzZBBsehmpbs_8x2CTZSuPXyBHWs",
    authDomain: "chirag-ayushi-wedding.firebaseapp.com",
    projectId: "chirag-ayushi-wedding",
    storageBucket: "chirag-ayushi-wedding.appspot.com",
    messagingSenderId: "1093771406401",
    appId: "1:1093771406401:web:400e616280e34f8e7b6ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };