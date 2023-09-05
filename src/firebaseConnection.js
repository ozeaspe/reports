import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDrKFpE3tu4MQS2c11x1Y5NCIeJ2yinfN0",
    authDomain: "reldtec.firebaseapp.com",
    projectId: "reldtec",
    storageBucket: "reldtec.appspot.com",
    messagingSenderId: "258328966823",
    appId: "1:258328966823:web:709db02a1ee8eb472d0d82",
    measurementId: "G-5KHT354FCK"
  };

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export{ db, auth, storage };