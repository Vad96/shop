import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvgEst1F3-aFUUhjGHAfgmbx8YHXZBBYI",
  authDomain: "ecommerce-255d7.firebaseapp.com",
  databaseURL: "https://ecommerce-255d7.firebaseio.com",
  projectId: "ecommerce-255d7",
  storageBucket: "ecommerce-255d7.appspot.com",
  messagingSenderId: "358711457540",
  appId: "1:358711457540:web:ad23dc887d06c912ad8251"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider();
