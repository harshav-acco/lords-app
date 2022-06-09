import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOrID79xz1phek_5ykoL7w4vAHHvUzUV0",
  authDomain: "lords-7b938.firebaseapp.com",
  databaseURL: "https://lords-7b938-default-rtdb.firebaseio.com",
  projectId: "lords-7b938",
  storageBucket: "lords-7b938.appspot.com",
  messagingSenderId: "325900299574",
  appId: "1:325900299574:web:3e6e4afec2c8798d6b9797"
})

export const auth = firebase.auth();
export default app;