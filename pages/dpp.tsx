import { useState, useEffect } from 'react';
import styles from '../styles/DPP.module.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Chapter {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Class {
  id: number;
  name: string;
  chapters: Chapter[];
}

const classes: Class[] = [
  {
    id: 11,
    name: "Class 11",
    chapters: [
      {
        id: 1,
        title: "Units and Measurements",
        description: "Fundamental units, dimensional analysis, and measurement techniques",
        questions: [
          {
            id: 1,
            question: "Which of the following is not a fundamental unit?",
            options: ["Meter", "Kilogram", "Newton", "Second"],
            correctAnswer: 2,
            explanation: "Newton is a derived unit, not a fundamental unit. It is derived from kg.m/s²."
          },
          {
            id: 2,
            question: "The dimensional formula for force is:",
            options: ["MLT⁻²", "ML²T⁻²", "ML⁻¹T⁻²", "MLT⁻¹"],
            correctAnswer: 0,
            explanation: "Force = mass × acceleration = M × LT⁻² = MLT⁻²"
          },
          {
            id: 3,
            question: "Which instrument is used to measure small lengths?",
            options: ["Vernier calipers", "Meter scale", "Measuring tape", "Ruler"],
            correctAnswer: 0,
            explanation: "Vernier calipers are used to measure small lengths with high precision, typically up to 0.1 mm."
          },
          {
            id: 4,
            question: "The number of significant figures in 0.0005 is:",
            options: ["1", "2", "3", "4"],
            correctAnswer: 0,
            explanation: "Only the digit 5 is significant in 0.0005. Leading zeros are not significant."
          },
          {
            id: 5,
            question: "Which of the following is a dimensionless quantity?",
            options: ["Strain", "Force", "Velocity", "Acceleration"],
            correctAnswer: 0,
            explanation: "Strain is a dimensionless quantity as it is the ratio of two lengths."
          },
          {
            id: 6,
            question: "The SI unit of luminous intensity is:",
            options: ["Candela", "Lumen", "Lux", "Watt"],
            correctAnswer: 0,
            explanation: "The candela (cd) is the SI unit of luminous intensity."
          },
          {
            id: 7,
            question: "The error in measurement of radius of a sphere is 1%. The error in measurement of its volume is:",
            options: ["1%", "2%", "3%", "4%"],
            correctAnswer: 2,
            explanation: "Volume ∝ r³, so error in volume = 3 × error in radius = 3%"
          },
          {
            id: 8,
            question: "Which of the following is not a unit of time?",
            options: ["Parsec", "Second", "Minute", "Hour"],
            correctAnswer: 0,
            explanation: "Parsec is a unit of distance, not time. It is approximately 3.26 light-years."
          },
          {
            id: 9,
            question: "The dimensional formula for power is:",
            options: ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
            correctAnswer: 0,
            explanation: "Power = Work/Time = ML²T⁻²/T = ML²T⁻³"
          },
          {
            id: 10,
            question: "The number of significant figures in 6.023 × 10²³ is:",
            options: ["3", "4", "23", "24"],
            correctAnswer: 1,
            explanation: "The number 6.023 has 4 significant figures. The power of 10 does not affect the number of significant figures."
          }
        ]
      },
      {
        id: 2,
        title: "Motion in a Straight Line",
        description: "Kinematics, equations of motion, and graphical analysis",
        questions: [
          {
            id: 1,
            question: "A body moving with uniform acceleration has a velocity of 12 m/s when its position is x = 0. If its position is x = 28 m after 2 seconds, what is its acceleration?",
            options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
            correctAnswer: 1,
            explanation: "Using s = ut + ½at², 28 = 12×2 + ½×a×4, solving gives a = 4 m/s²"
          },
          {
            id: 2,
            question: "The slope of velocity-time graph gives:",
            options: ["Displacement", "Acceleration", "Distance", "Speed"],
            correctAnswer: 1,
            explanation: "The slope of a velocity-time graph represents acceleration, as acceleration is the rate of change of velocity."
          },
          {
            id: 3,
            question: "A body starts from rest and moves with uniform acceleration. The ratio of distances covered in the nth second to the distance covered in n seconds is:",
            options: ["(2n-1)/n²", "n²/(2n-1)", "2n-1", "1/n²"],
            correctAnswer: 0,
            explanation: "Distance in nth second = u + a/2(2n-1), Total distance in n seconds = ½an². For u=0, ratio = (2n-1)/n²"
          },
          {
            id: 4,
            question: "The area under acceleration-time graph gives:",
            options: ["Displacement", "Velocity", "Change in velocity", "Distance"],
            correctAnswer: 2,
            explanation: "The area under an acceleration-time graph represents the change in velocity, as acceleration is the rate of change of velocity."
          },
          {
            id: 5,
            question: "A body is thrown vertically upwards. At the highest point:",
            options: ["Velocity is zero and acceleration is zero", "Velocity is zero and acceleration is g", "Velocity is maximum and acceleration is zero", "Velocity is maximum and acceleration is g"],
            correctAnswer: 1,
            explanation: "At the highest point, velocity becomes zero but acceleration due to gravity (g) still acts downward."
          },
          {
            id: 6,
            question: "The equation of motion v² = u² + 2as is valid when:",
            options: ["Motion is uniform", "Motion is uniformly accelerated", "Motion is non-uniform", "Motion is circular"],
            correctAnswer: 1,
            explanation: "The equation v² = u² + 2as is valid only for uniformly accelerated motion."
          },
          {
            id: 7,
            question: "A body moving with uniform velocity has:",
            options: ["Zero acceleration", "Constant acceleration", "Variable acceleration", "Infinite acceleration"],
            correctAnswer: 0,
            explanation: "When velocity is constant, there is no change in velocity, hence acceleration is zero."
          },
          {
            id: 8,
            question: "The displacement of a particle is given by x = t³ - 3t² + 2t. The acceleration of the particle at t = 2s is:",
            options: ["6 m/s²", "8 m/s²", "10 m/s²", "12 m/s²"],
            correctAnswer: 2,
            explanation: "Differentiating twice: v = 3t² - 6t + 2, a = 6t - 6. At t=2s, a = 12-6 = 6 m/s²"
          },
          {
            id: 9,
            question: "A body is moving with uniform acceleration. Its velocity after 5 seconds is 25 m/s and after 8 seconds is 34 m/s. The distance travelled in 12th second is:",
            options: ["5.5 m", "6.5 m", "7.5 m", "8.5 m"],
            correctAnswer: 2,
            explanation: "Using v = u + at for both cases, solving gives a = 3 m/s² and u = 10 m/s. Distance in 12th second = u + a/2(2×12-1) = 7.5 m"
          },
          {
            id: 10,
            question: "The velocity-time graph of a particle is a straight line parallel to time axis. This indicates:",
            options: ["Uniform velocity", "Uniform acceleration", "Variable acceleration", "Zero acceleration"],
            correctAnswer: 0,
            explanation: "A straight line parallel to time axis in velocity-time graph indicates constant velocity."
          }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Class 12",
    chapters: [
      {
        id: 1,
        title: "Electrostatics",
        description: "Electric charges, fields, potential, and capacitance",
        questions: [
          {
            id: 1,
            question: "The electric field inside a charged spherical shell is:",
            options: ["Zero", "Constant", "Inversely proportional to distance", "Directly proportional to distance"],
            correctAnswer: 0,
            explanation: "According to Gauss's law, the electric field inside a charged spherical shell is zero."
          },
          {
            id: 2,
            question: "The work done in moving a charge between two points in an equipotential surface is:",
            options: ["Zero", "Maximum", "Minimum", "Infinite"],
            correctAnswer: 0,
            explanation: "Since potential difference is zero on an equipotential surface, work done = qΔV = 0"
          },
          {
            id: 3,
            question: "The unit of electric flux is:",
            options: ["N/C", "N.m²/C", "V/m", "C/m²"],
            correctAnswer: 1,
            explanation: "Electric flux = E.A = (N/C).m² = N.m²/C"
          },
          {
            id: 4,
            question: "The capacitance of a parallel plate capacitor increases when:",
            options: ["Distance between plates increases", "Area of plates decreases", "Dielectric constant of medium increases", "Potential difference increases"],
            correctAnswer: 2,
            explanation: "C = εA/d, where ε is the permittivity of the medium. Higher dielectric constant means higher ε, hence higher capacitance."
          },
          {
            id: 5,
            question: "The electric potential at a point due to a point charge:",
            options: ["Is a vector quantity", "Is always positive", "Decreases with distance", "Is independent of medium"],
            correctAnswer: 2,
            explanation: "V = kq/r, where k = 1/4πε. Potential decreases with increasing distance r."
          },
          {
            id: 6,
            question: "The force between two point charges is F. If the distance between them is doubled, the force becomes:",
            options: ["F/2", "F/4", "2F", "4F"],
            correctAnswer: 1,
            explanation: "According to Coulomb's law, F ∝ 1/r². When r is doubled, F becomes F/4."
          },
          {
            id: 7,
            question: "The electric field due to an infinite plane sheet of charge is:",
            options: ["Zero", "Constant", "Inversely proportional to distance", "Directly proportional to distance"],
            correctAnswer: 1,
            explanation: "For an infinite plane sheet, E = σ/2ε₀, which is constant and independent of distance."
          },
          {
            id: 8,
            question: "The energy stored in a capacitor is given by:",
            options: ["½CV", "½CV²", "CV", "CV²"],
            correctAnswer: 1,
            explanation: "The energy stored in a capacitor is U = ½CV², where C is capacitance and V is potential difference."
          },
          {
            id: 9,
            question: "The electric field inside a conductor in electrostatic equilibrium is:",
            options: ["Zero", "Constant", "Infinite", "Variable"],
            correctAnswer: 0,
            explanation: "In electrostatic equilibrium, the electric field inside a conductor is zero."
          },
          {
            id: 10,
            question: "The potential energy of a system of two point charges is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            correctAnswer: 2,
            explanation: "U = kq₁q₂/r. If charges are of same sign, U is positive; if opposite, U is negative."
          }
        ]
      }
    ]
  }
];

export default function DPP() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && !isSubmitted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimerActive(false);
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanations(false);
    setTimeLeft(600);
    setTimerActive(false);
  };

  const handleBackToClasses = () => {
    setSelectedClass(null);
    setSelectedChapter(null);
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanations(false);
    setTimeLeft(600);
    setTimerActive(false);
  };

  const handleBackToChapters = () => {
    if (isSubmitted) {
      setSelectedChapter(null);
      setUserAnswers({});
      setIsSubmitted(false);
      setShowExplanations(false);
      setTimeLeft(600);
      setTimerActive(false);
    }
  };

  const calculateScore = () => {
    if (!selectedChapter) return 0;
    let correct = 0;
    selectedChapter.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / selectedChapter.questions.length) * 100;
  };

  if (!selectedClass) {
    return (
      <>
        <Head>
          <title>PhysicsNotes - Daily Practice Problems</title>
          <meta name="description" content="Daily practice problems and exercises for physics" />
          <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
        </Head>
        <Navbar />
        <div className={styles.container}>
          <h1>Daily Practice Problems</h1>
          <p className={styles.description}>Select your class to start practicing</p>
          <div className={styles.classGrid}>
            {classes.map(cls => (
              <div
                key={cls.id}
                className={styles.classCard}
                onClick={() => setSelectedClass(cls)}
              >
                <div className={styles.classHeader}>
                  <h3>{cls.name}</h3>
                </div>
                <div className={styles.classFooter}>
                  <span className={styles.chapterCount}>
                    {cls.chapters.length} Chapters
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!selectedChapter) {
    return (
      <>
        <Head>
          <title>PhysicsNotes - Daily Practice Problems</title>
          <meta name="description" content="Daily practice problems and exercises for physics" />
          <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
        </Head>
        <div className={styles.container}>
          <div className={styles.header}>
            <button className={styles.backButton} onClick={handleBackToClasses}>
              ← Back to Classes
            </button>
            <h1>{selectedClass.name}</h1>
          </div>
          <p className={styles.description}>Select a chapter to start practicing</p>
          <div className={styles.chapterGrid}>
            {selectedClass.chapters.map(chapter => (
              <div
                key={chapter.id}
                className={styles.chapterCard}
                onClick={() => {
                  setSelectedChapter(chapter);
                  setTimerActive(true);
                }}
              >
                <div className={styles.chapterHeader}>
                  <h3>{chapter.title}</h3>
                </div>
                <p className={styles.chapterDescription}>{chapter.description}</p>
                <div className={styles.chapterFooter}>
                  <span className={styles.questionCount}>
                    {chapter.questions.length} Questions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>PhysicsNotes - Daily Practice Problems</title>
        <meta name="description" content="Daily practice problems and exercises for physics" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          {isSubmitted && (
            <button className={styles.backButton} onClick={handleBackToChapters}>
              ← Back to Chapters
            </button>
          )}
          <h1>{selectedChapter.title}</h1>
          {!isSubmitted && (
            <div className={styles.timer}>
              Time Remaining: {formatTime(timeLeft)}
            </div>
          )}
        </div>
        <p className={styles.description}>{selectedChapter.description}</p>
        
        <div className={styles.questionsContainer}>
          {selectedChapter.questions.map(question => (
            <div key={question.id} className={styles.questionCard}>
              <h3>Question {question.id}</h3>
              <p>{question.question}</p>
              <div className={styles.options}>
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`${styles.option} ${
                      isSubmitted
                        ? index === question.correctAnswer
                          ? styles.correct
                          : userAnswers[question.id] === index
                          ? styles.incorrect
                          : ''
                        : userAnswers[question.id] === index
                        ? styles.selected
                        : ''
                    }`}
                    onClick={() => handleAnswerSelect(question.id, index)}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={userAnswers[question.id] === index}
                      onChange={() => {}}
                    />
                    {option}
                  </div>
                ))}
              </div>
              {isSubmitted && showExplanations && (
                <div className={styles.explanation}>
                  <p>{question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          {!isSubmitted ? (
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              Submit Answers
            </button>
          ) : (
            <div className={styles.resultContainer}>
              <div className={styles.score}>
                Your Score: {calculateScore().toFixed(1)}%
              </div>
              <div className={styles.resultActions}>
                <button
                  className={styles.explanationButton}
                  onClick={() => setShowExplanations(!showExplanations)}
                >
                  {showExplanations ? 'Hide Explanations' : 'Show Explanations'}
                </button>
                <button className={styles.resetButton} onClick={handleReset}>
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 