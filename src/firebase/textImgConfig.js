import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD8MNTIEMhO4bU43PhFba01gBRDgSuO71k",
//   authDomain: "text-image-store.firebaseapp.com",
//   projectId: "text-image-store",
//   storageBucket: "text-image-store.appspot.com",
//   messagingSenderId: "107547766386",
//   appId: "1:107547766386:web:c23d913ec9664907c21ceb"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDx7S2f5-hQ3guXApaRD-kQ22vChrzanU",
  authDomain: "txtimgstore.firebaseapp.com",
  projectId: "txtimgstore",
  storageBucket: "txtimgstore.appspot.com",
  messagingSenderId: "415054163522",
  appId: "1:415054163522:web:6c2c0c48d9793367fe87db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const imgDB = getStorage(app);
const textDB = getFirestore(app);

export {imgDB,textDB}