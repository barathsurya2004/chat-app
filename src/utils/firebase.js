
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
    authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_PUBLIC_APP_ID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signupEmailPassword = async ({ email, password }) => {
    if (!email || !password) {
        return null;
    }
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;

}

export const signinEmailPassword = async ({ email, password }) => {
    if (!email || !password) {
        return null;
    }
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
}

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export const signUserOut = async () => {
    await signOut(auth);
}

export const db = getFirestore();

export const createUserRefWithAuthGoogle = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);

    const docRef = await getDoc(userDocRef);
    if (!docRef.exists()) {
        const displayName = user.displayName;
        const email = user.email;
        const createdAt = new Date();
        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (er) {
            console.log(er.message);
        }

    }
    return docRef;
}

export const createUserRefWithAuth = async (user, displayName) => {
    const userDocRef = doc(db, 'users', user.uid);

    const docRef = await getDoc(userDocRef);
    if (!docRef.exists()) {
        const email = user.email;
        const createdAt = new Date();
        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (er) {
            console.log(er.message);
        }

    }
    return docRef;
}

export const getUserRefWithAuth = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);

    const docRef = await getDoc(userDocRef);
    return docRef;
}