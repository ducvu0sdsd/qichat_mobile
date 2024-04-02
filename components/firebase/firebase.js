// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { TypeHTTP, api } from "../../utils/api";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const firebaseConfig = {
    apiKey: "AIzaSyCsnPmi-wt1yQ_wyy7Ly4h90mRrzzVYlgE",
    authDomain: "qichat-fe150.firebaseapp.com",
    projectId: "qichat-fe150",
    storageBucket: "qichat-fe150.appspot.com",
    messagingSenderId: "325928910574",
    appId: "1:325928910574:web:5524cbb44293230525fdff",
    measurementId: "G-KQ45TTZL23"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const signWithGoogle = (type) => new Promise((rejects, resolve) => {
    signInWithPopup(auth, provider)
        .then(result => {
            const { email, photoURL } = result.user
            if (type === 'sign-up') {
                api({ body: { email, avatar: photoURL }, path: '/sign-up-with-google', type: TypeHTTP.POST, sendToken: false })
                    .then(user => {
                        rejects(user)
                    })
                    .catch(error => {
                        resolve(error)
                    })
            } else if (type === 'sign-in') {
                api({ body: { email }, path: '/sign-in-with-google', type: TypeHTTP.POST, sendToken: false })
                    .then(user => {
                        rejects(user)
                    })
                    .catch(error => {
                        resolve(error)
                    })
                console.log(email, photoURL)
            }
        })
        .catch(error => {
            resolve(error)
        })
})