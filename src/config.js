import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDwVlNqQAD13IAWoimjeXwNhlpdCEhxoNU",
  authDomain: "coco-cat.firebaseapp.com",
  databaseURL: "https://coco-cat-default-rtdb.firebaseio.com/",
  projectId: "coco-cat",
  storageBucket: "coco-cat.appspot.com",
  messagingSenderId: "347054415294",
  appId: "1:347054415294:web:146bf99c9d0f089ccf6def",
  measurementId: "G-WBD2P36VPP"
};

const app = initializeApp(firebaseConfig);

export default app;
