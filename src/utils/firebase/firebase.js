
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"

import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA-8TnGheHNytUawI-R1vyYqztzFQnRNOU",
    authDomain: "thaismercado-db.firebaseapp.com",
    projectId: "thaismercado-db",
    storageBucket: "thaismercado-db.appspot.com",
    messagingSenderId: "211927446733",
    appId: "1:211927446733:web:43ef1caad25447f27aa584",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// ***firestore config
export const db = getFirestore();

export const newUser = async (userAuth, otherData={}) => {
    if (!userAuth) {
        return;
    }
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...otherData });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const newUserWithEmailPw = async (email, password) => {
    if (!email||!password) {
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);
}