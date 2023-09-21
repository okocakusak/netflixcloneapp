import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6FYCG9ZqT2HjRtehBma8kZsUJDVPLYok",
    authDomain: "netflix-clone-64667.firebaseapp.com",
    projectId: "netflix-clone-64667",
    storageBucket: "netflix-clone-64667.appspot.com",
    messagingSenderId: "16461152997",
    appId: "1:16461152997:web:cf4549ad0b67e747ecca0c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth };
export default db;
