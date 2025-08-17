import { initializeApp } from 'firebase/app'
//import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' // Import getAuth for authentication service
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDMHHM4pxTEanltJAigf2pkAx9YXb5eQoE',
  authDomain: 'coop-pi.firebaseapp.com',
  databaseURL: 'https://coop-pi-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'coop-pi',
  storageBucket: 'coop-pi.firebasestorage.app',
  messagingSenderId: '611841743382',
  appId: '1:611841743382:web:6c542dbd6d947060867337',
}

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
//const db = getFirestore(firebaseApp)

// Get a reference to the Auth service
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
//export const todosRef = collection(db, 'todos')
//export const googleAuthProvider = new GoogleAuthProvider()
