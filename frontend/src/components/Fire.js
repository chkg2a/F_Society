// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt4Dh5SHWGeU36614OxregtAL77IEI3ik",
  authDomain: "test-555cf.firebaseapp.com",
  projectId: "test-555cf",
  storageBucket: "test-555cf.appspot.com",
  messagingSenderId: "40894423209",
  appId: "1:40894423209:web:4ca8da4c10b39139dcc9b8",
  databaseURL:"https://test-555cf-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;