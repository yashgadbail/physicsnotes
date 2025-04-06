import { useRouter } from 'next/router';
import styles from '../styles/Unauthorized.module.css';

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Unauthorized Access</h1>
        <p>You don't have permission to access this page.</p>
        <button onClick={() => router.push('/')} className={styles.button}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized; 