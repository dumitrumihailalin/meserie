import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

var firebaseConfig = {
    projectId: 'meserie-client-app',
    appId: '1:494277770258:web:d66381b0b2c95434116ccb',
    storageBucket: 'meserie-client-app.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyD5s1Z1JIPXMN-7dWZPl7iG8Xpp4yCGDYU',
    authDomain: 'meserie-client-app.firebaseapp.com',
    messagingSenderId: '494277770258',
    measurementId: 'G-YPFTJEEFVT'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// db.firestore().settings({timestampsInSnapshots: true})
export { db }