import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    google: any;
  }
}

interface AuthContextType {
  user: any;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
      setLoading(false);
    };

    return unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      if (typeof window !== 'undefined' && window.google) {
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
          scope: 'email profile',
          callback: async (response: any) => {
            if (response.access_token) {
              const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${response.access_token}` },
              }).then(res => res.json());

              const userData = {
                email: userInfo.email,
                name: userInfo.name,
                picture: userInfo.picture,
                role: userInfo.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? 'admin' : 'user'
              };

              localStorage.setItem('user', JSON.stringify(userData));
              setUser(userData);
              router.push('/physicsnotes');
            }
          },
        });
        client.requestAccessToken();
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      router.push('/physicsnotes');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 