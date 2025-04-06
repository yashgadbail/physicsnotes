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
        <Link href="/physicsnotes">PhysicsNotes</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/physicsnotes" className={styles.navLink}>Home</Link>
        <Link href="/physicsnotes/notes" className={styles.navLink}>Notes</Link>
        <Link href="/physicsnotes/dpp" className={styles.navLink}>DPP</Link>
        <Link href="/physicsnotes/blogs" className={styles.navLink}>Blogs</Link>
        <Link href="/physicsnotes/formula-handbook" className={styles.navLink}>Formulas</Link>
        <Link href="/physicsnotes/exam-preparation" className={styles.navLink}>Exam Prep</Link>
        <Link href="/physicsnotes/login" className={styles.navLink}>Login</Link>
        
        {isAuthenticated ? (
          <>
            {userRole === 'admin' && <Link href="/admin/dashboard">Admin</Link>}
            <span className={styles.userRole}>{userRole}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/physicsnotes/login" className={styles.loginLink}>
            Login for Premium Content
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 