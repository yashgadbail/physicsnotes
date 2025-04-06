import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const router = useRouter();
  const { user, loading, signInWithGoogle, signOut } = useAuth();

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
        
        {!loading && (
          user ? (
            <>
              {user.role === 'admin' && (
                <Link href="/admin/dashboard" className={styles.navLink}>
                  Admin
                </Link>
              )}
              <div className={styles.userInfo}>
                <img src={user.picture} alt={user.name} className={styles.userAvatar} />
                <span className={styles.userName}>{user.name}</span>
              </div>
              <button onClick={signOut} className={styles.logoutButton}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={signInWithGoogle} className={styles.loginButton}>
              Login with Google
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar; 