import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('userRole');
    setIsAuthenticated(!!auth);
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
    router.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">PhysicsNotes</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/notes">Notes</Link>
        <Link href="/dpp">DPP</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/formula-handbook" className={styles.navLink}>
          Formulas
        </Link>
        <Link href="/exam-preparation">Exam Prep</Link>
        
        {isAuthenticated ? (
          <>
            {userRole === 'admin' && <Link href="/admin/dashboard">Admin</Link>}
            <span className={styles.userRole}>{userRole}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className={styles.loginLink}>
            Login for Premium Content
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 