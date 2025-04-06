import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProtectedRoute.module.css';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
  isPremium?: boolean;
}

const ProtectedRoute = ({ children, requiredRole, isPremium = false }: ProtectedRouteProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const userRole = localStorage.getItem('userRole');

      if (requiredRole && userRole !== requiredRole) {
        router.push('/unauthorized');
        return;
      }

      if (isPremium && !isAuthenticated) {
        setShowLoginPrompt(true);
      }

      setIsLoading(false);
    };

    checkAuth();
  }, [router, requiredRole, isPremium]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        Loading...
      </div>
    );
  }

  if (showLoginPrompt) {
    return (
      <div className={styles.premiumPrompt}>
        <h2>Premium Content</h2>
        <p>This content is available only to registered users. Please login to access.</p>
        <button onClick={() => router.push('/login')} className={styles.loginButton}>
          Login Now
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute; 