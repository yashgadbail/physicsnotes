import { useEffect, useRef, useState } from 'react';
import styles from '../styles/FallingEquations.module.css';
import heroStyles from '../styles/Hero.module.css';

interface Equation {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  isCaught: boolean;
  rotation: number;
  size: number;
}

const equations = [
  'F = ma',
  'E = mc²',
  'v = u + at',
  's = ut + ½at²',
  'F = G(m₁m₂)/r²',
  'E = hf',
  'λ = h/p',
  'ΔE = Δmc²',
  'F = qE',
  'F = BIL',
];

const FallingEquations = () => {
  const [equationsList, setEquationsList] = useState<Equation[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const caughtEquationRef = useRef<Equation | null>(null);
  const textElementsRef = useRef<HTMLDivElement[]>([]);
  const spawnTimerRef = useRef<NodeJS.Timeout>();
  const rainDurationRef = useRef<number>(30); // 30 seconds duration

  const createEquation = (id: number): Equation => ({
    id,
    x: Math.random() * window.innerWidth,
    y: -50,
    vx: (Math.random() - 0.5) * 0.5,
    vy: 0.2 + Math.random() * 0.3,
    text: equations[Math.floor(Math.random() * equations.length)],
    isCaught: false,
    rotation: (Math.random() - 0.5) * 15,
    size: 0.8 + Math.random() * 0.4,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all text elements and buttons in hero content
    const heroContent = document.querySelector(`.${heroStyles.heroContent}`);
    if (heroContent) {
      textElementsRef.current = Array.from(heroContent.querySelectorAll(
        `h1, p, .${heroStyles.ctaButtons}, .${heroStyles.primaryButton}, .${heroStyles.secondaryButton}`
      ));
    }

    let equationId = 0;

    // Start spawning equations
    const spawnEquation = () => {
      setEquationsList(prev => [...prev, createEquation(equationId++)]);
    };

    // Spawn equations every 500ms
    spawnTimerRef.current = setInterval(spawnEquation, 500);

    // Stop spawning after 30 seconds
    setTimeout(() => {
      if (spawnTimerRef.current) {
        clearInterval(spawnTimerRef.current);
      }
    }, rainDurationRef.current * 1000);

    const checkCollision = (eq: Equation) => {
      const equationRect = {
        left: eq.x - 50,
        right: eq.x + 50,
        top: eq.y - 25,
        bottom: eq.y + 25,
      };

      for (const element of textElementsRef.current) {
        const rect = element.getBoundingClientRect();
        
        if (
          equationRect.right > rect.left &&
          equationRect.left < rect.right &&
          equationRect.bottom > rect.top &&
          equationRect.top < rect.bottom
        ) {
          const centerX = (rect.left + rect.right) / 2;
          const centerY = (rect.top + rect.bottom) / 2;
          const dx = eq.x - centerX;
          const dy = eq.y - centerY;
          const angle = Math.atan2(dy, dx);
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate bounce strength based on element type
          let bounceStrength = 0.8;
          if (element.classList.contains(heroStyles.primaryButton) || element.classList.contains(heroStyles.secondaryButton)) {
            bounceStrength = 1.2; // Stronger bounce for buttons
          }
          
          return {
            bounce: true,
            angle,
            distance,
            bounceStrength,
          };
        }
      }
      
      return { bounce: false };
    };

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const deltaTime = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      setEquationsList(prev => {
        return prev.map(eq => {
          if (eq.isCaught) return eq;

          let newX = eq.x + eq.vx * deltaTime * 100;
          let newY = eq.y + eq.vy * deltaTime * 100;
          let newVy = eq.vy;
          let newRotation = eq.rotation + 0.2;

          // Check collision with text elements and buttons
          const collision = checkCollision({ ...eq, x: newX, y: newY });
          if (collision.bounce && collision.angle !== undefined) {
            const speed = Math.sqrt(eq.vx * eq.vx + eq.vy * eq.vy);
            const bounceSpeed = speed * (collision.bounceStrength || 0.8);
            const newVx = Math.cos(collision.angle) * bounceSpeed;
            const newVy = Math.sin(collision.angle) * bounceSpeed;
            newX = eq.x + newVx * deltaTime * 100;
            newY = eq.y + newVy * deltaTime * 100;
            return {
              ...eq,
              x: newX,
              y: newY,
              vx: newVx,
              vy: newVy,
              rotation: newRotation,
            };
          }

          // Remove equations that fall below the screen
          if (newY > window.innerHeight + 100) {
            return null;
          }

          // Bounce off walls
          if (newX < 0 || newX > window.innerWidth) {
            newX = Math.max(0, Math.min(newX, window.innerWidth));
            eq.vx *= -0.8;
          }

          // Apply gravity
          newVy += 2 * deltaTime;

          return {
            ...eq,
            x: newX,
            y: newY,
            vy: newVy,
            rotation: newRotation,
          };
        }).filter(Boolean) as Equation[];
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (spawnTimerRef.current) {
        clearInterval(spawnTimerRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!caughtEquationRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setEquationsList(prev => {
      return prev.map(eq => {
        if (eq.id === caughtEquationRef.current?.id) {
          return {
            ...eq,
            x: mouseX,
            y: mouseY,
            vx: 0,
            vy: 0,
          };
        }
        return eq;
      });
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Find equation under cursor
    const equationUnderCursor = equationsList.find(eq => {
      const dx = mouseX - eq.x;
      const dy = mouseY - eq.y;
      return Math.sqrt(dx * dx + dy * dy) < 50 && !eq.isCaught;
    });

    if (equationUnderCursor) {
      caughtEquationRef.current = equationUnderCursor;
      setEquationsList(prev => {
        return prev.map(eq => {
          if (eq.id === equationUnderCursor.id) {
            return { ...eq, isCaught: true };
          }
          return eq;
        });
      });
    }
  };

  const handleMouseUp = () => {
    if (caughtEquationRef.current) {
      // Throw the equation
      setEquationsList(prev => {
        return prev.map(eq => {
          if (eq.id === caughtEquationRef.current?.id) {
            return {
              ...eq,
              isCaught: false,
              vx: (Math.random() - 0.5) * 5,
              vy: -5,
            };
          }
          return eq;
        });
      });
      caughtEquationRef.current = null;
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {equationsList.map(eq => (
        <div
          key={eq.id}
          className={styles.equation}
          style={{
            left: `${eq.x}px`,
            top: `${eq.y}px`,
            transform: `rotate(${eq.rotation}deg) scale(${eq.size})`,
            opacity: eq.isCaught ? 0.8 : 1,
          }}
        >
          {eq.text}
        </div>
      ))}
    </div>
  );
};

export default FallingEquations; 