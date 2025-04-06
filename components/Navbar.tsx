import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin' | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole');
    setIsAuthenticated(auth);
    setUserRole(role as 'user' | 'admin');
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
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/notes" className={styles.navLink}>Notes</Link>
        <Link href="/dpp" className={styles.navLink}>DPP</Link>
        <Link href="/blogs" className={styles.navLink}>Blogs</Link>
        <Link href="/formula-handbook" className={styles.navLink}>Formulas</Link>
        <Link href="/exam-preparation" className={styles.navLink}>Exam Prep</Link>
        
        {isAuthenticated ? (
          <div className={styles.userSection}>
            {userRole === 'admin' && (
              <Link href="/admin/dashboard" className={styles.adminBadge}>
                Admin
              </Link>
            )}
            <div 
              className={styles.profileButton}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className={styles.userAvatar}>
                {/* Default avatar with first letter */}
                {userRole?.[0].toUpperCase() || 'U'}
              </div>
              <span className={styles.userName}>
                {userRole === 'admin' ? 'Admin User' : 'Student'}
              </span>
              <span className={styles.dropdownArrow}>▼</span>
              
              {showDropdown && (
                <div className={styles.dropdown}>
                  <Link href="/dashboard" className={styles.dropdownItem}>
                    Dashboard
                  </Link>
                  <Link href="/profile" className={styles.dropdownItem}>
                    Profile Settings
                  </Link>
                  <button onClick={handleLogout} className={styles.dropdownItem}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link href="/login" className={styles.premiumButton}>
            Get Unlimited Access
            <span className={styles.buttonSubtext}>Premium features</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 