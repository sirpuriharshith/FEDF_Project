import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { googleLogin, listenAuth, logoutGoogle } from '../services/firebase';
import { load, save } from '../services/storage';

const AuthContext = createContext(null);
const defaultUser = load('user', null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => listenAuth((u) => {
    if (u) {
      const next = { uid: u.uid, displayName: u.displayName, email: u.email, photoURL: u.photoURL };
      setUser(next); save('user', next);
    }
  }), []);

  async function signIn() {
    setLoading(true);
    try { const u = await googleLogin(); setUser(u); save('user', u); return u; }
    finally { setLoading(false); }
  }

  async function signOut() { await logoutGoogle(); setUser(null); save('user', null); }

  const value = useMemo(() => ({ user, loading, signIn, signOut, isAuthed: Boolean(user) }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
