import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Master Physics with PhysicsNotes</h1>
        <p>Comprehensive resources for Class 11 & 12 students</p>
        <div className={styles.ctaButtons}>
          <a href="/notes" className={styles.primaryButton}>Start Learning</a>
          <a href="/dpp" className={styles.secondaryButton}>Practice DPP</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 