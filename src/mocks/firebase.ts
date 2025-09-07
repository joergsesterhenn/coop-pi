import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'mock-key',
  authDomain: 'mock.firebaseapp.com',
  projectId: 'mock-project',
};

export const firebaseApp = initializeApp(firebaseConfig);
