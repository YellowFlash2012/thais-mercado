
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

import { toast } from "react-toastify";

import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from "firebase/firestore"

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

// ***seeding the db
export const addCollAndDocs = async (collectionKeys, objectsToAdd) => {
    const collectionRef = collection(db, collectionKeys);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('Done');
}

// ***retrieving data from db
export const getCatAndDocs = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;

        return acc;
    }, {});

    return categoryMap;
}

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

export const LoginWithEmailPw = async (email, password) => {
    if (!email || !password) {
        return;
    }

    return await signInWithEmailAndPassword(auth, email, password);
}

export const logout = async () => {
    await signOut(auth)
    toast.success("Goodbye for now, see you next time!")
}

export const onAuthStateChangeListener = (callback) => {
    onAuthStateChanged(auth, callback)
}