import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const hasFirebase = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
const app = hasFirebase ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
const provider = new GoogleAuthProvider();

export async function googleLogin() {
  if (!auth) {
    return { uid: 'demo-google-user', displayName: 'Harshith Siripuri', email: 'siripuriharshith05@gmail.com', photoURL: '' };
  }
  const result = await signInWithPopup(auth, provider);
  const u = result.user;
  return { uid: u.uid, displayName: u.displayName, email: u.email, photoURL: u.photoURL };
}

export async function logoutGoogle() { if (auth) await signOut(auth); }
export function listenAuth(callback) { if (!auth) return () => {}; return onAuthStateChanged(auth, callback); }
