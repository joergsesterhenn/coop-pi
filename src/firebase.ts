import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

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
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')
