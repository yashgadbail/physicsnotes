import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Here you would typically make an API call to your authentication service
      // For now, we'll use a simple mock authentication
      if (email === 'admin@physicsnotes.com' && password === 'admin123' && isAdmin) {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/admin/dashboard');
      } else if (email === 'user@physicsnotes.com' && password === 'user123' && !isAdmin) {
        localStorage.setItem('userRole', 'user');
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1>Welcome to PhysicsNotes</h1>
        <p className={styles.subtitle}>Please login to continue</p>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              Login as Admin
            </label>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>

        <div className={styles.demoCredentials}>
          <h3>Demo Credentials:</h3>
          <p>Admin: admin@physicsnotes.com / admin123</p>
          <p>User: user@physicsnotes.com / user123</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 