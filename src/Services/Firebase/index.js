// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//Hay que importar esto de "getFirestore" para linkearlo al los documentos .js
//Esto es la conexión al proyecto.
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJePiQAFv1u-u0QMVFdui4Hx0dIoF9XCk",
    authDomain: "my1st-eshop.firebaseapp.com",
    projectId: "my1st-eshop",
    storageBucket: "my1st-eshop.appspot.com",
    messagingSenderId: "717173203085",
    appId: "1:717173203085:web:34c366aeebcb0ebc9a42c4",
    measurementId: "G-1S8XBFB5EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Generar la referencia a mi BD que creé en Firebase. Ponerle el "export" al principio.
export const db = getFirestore(app)
