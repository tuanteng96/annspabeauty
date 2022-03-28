import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCMCZiRpREWT5-umZcUpzpMON7OBe1-wWE",
    authDomain: "annspabeauty-c89f4.firebaseapp.com",
    projectId: "annspabeauty-c89f4",
    storageBucket: "annspabeauty-c89f4.appspot.com",
    messagingSenderId: "999314278197",
    appId: "1:999314278197:web:402dc27957b7dbf8feee7c",
    measurementId: "G-WVK4WBW3VX"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };