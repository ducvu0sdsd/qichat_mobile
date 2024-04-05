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
    apiKey: "AIzaSyCyfApSOhmzntN8JTQmBVuw3uHHSXnqrC4",
    authDomain: "qichat-c35cf.firebaseapp.com",
    projectId: "qichat-c35cf",
    storageBucket: "qichat-c35cf.appspot.com",
    messagingSenderId: "751868249418",
    appId: "1:751868249418:web:552c397998bdbceddc2db3",
    measurementId: "G-X551QCY7NT"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export const auth = getAuth()

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