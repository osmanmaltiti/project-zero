import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const config = {
    apiKey: "AIzaSyBziMt2E4tRDSUw7vXRqPMWIMJZxorHWL4",
    authDomain: "test-zozys.firebaseapp.com",
    projectId: "test-zozys",
    storageBucket: "test-zozys.appspot.com",
    messagingSenderId: "554139830508",
    appId: "1:554139830508:web:bcc5377dbf553ab4d47dc9"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.collection('users').doc(`${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;