import { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedCursor.module.css';

const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div className={styles.cursorTrail}></div>
    </div>
  );
};

export default AnimatedCursor; 