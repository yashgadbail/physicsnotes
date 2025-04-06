import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import AnimatedCursor from './AnimatedCursor';
import FallingEquations from './FallingEquations';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <FallingEquations />
      <AnimatedCursor />
      <div className={styles.heroContent}>
        <h1>Master Physics with PhysicsNotes</h1>
        <p>Comprehensive resources for Class 11 & 12 students</p>
        <div className={styles.ctaButtons}>
          <Link href="/notes" className={styles.primaryButton}>
            View Notes
          </Link>
          <Link href="/dpp" className={styles.secondaryButton}>
            Practice DPP
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 