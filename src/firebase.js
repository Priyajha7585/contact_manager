import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDHPz8QM-nTaVBiK4qzbOv69StzbqnEnGc",
    authDomain: "contact-manager-25809.firebaseapp.com",
    projectId: "contact-manager-25809",
    storageBucket: "contact-manager-25809.appspot.com",
    messagingSenderId: "981269059747",
    appId: "1:981269059747:web:e9be7714dee8cbd804c716"
  };

// const fireDb = firebase.initializeApp(firebaseConfig);
// export default fireDb.database().ref();

const app = firebase.initializeApp(firebaseConfig);
const fireDb = firebase.database().ref();
export default fireDb;