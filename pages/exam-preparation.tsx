import { useState } from 'react';
import styles from '../styles/ExamPreparation.module.css';
import Head from 'next/head';

interface StudyMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'quiz';
  description: string;
  url: string;
  duration?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

interface ExamCategory {
  id: string;
  name: string;
  description: string;
}

const examCategories: ExamCategory[] = [
  {
    id: 'jee',
    name: 'JEE (Main & Advanced)',
    description: 'Comprehensive resources for Joint Entrance Examination'
  },
  {
    id: 'neet',
    name: 'NEET',
    description: 'Study materials for National Eligibility cum Entrance Test'
  },
  {
    id: 'board',
    name: 'Board Exams',
    description: 'Resources for CBSE and State Board examinations'
  },
  {
    id: '11th',
    name: 'Class 11th',
    description: 'Detailed study materials for 11th grade physics'
  },
  {
    id: '12th',
    name: 'Class 12th',
    description: 'Comprehensive resources for 12th grade physics'
  }
];

const studyMaterials: StudyMaterial[] = [
  {
    id: 'jee-formulas',
    title: 'JEE Physics Formulas Handbook',
    type: 'pdf',
    description: 'Comprehensive collection of all important physics formulas with derivations and examples',
    url: '/pdfs/exams/jee-formulas.pdf',
    difficulty: 'medium',
    category: 'jee'
  },
  {
    id: 'jee-video-lectures',
    title: 'JEE Physics Video Lectures',
    type: 'video',
    description: 'Complete video course covering all JEE physics topics with problem-solving techniques',
    url: '/videos/jee-lectures',
    duration: '50 hours',
    difficulty: 'hard',
    category: 'jee'
  },
  {
    id: 'jee-syllabus',
    title: 'Complete JEE Syllabus',
    type: 'pdf',
    description: 'Detailed syllabus for JEE Main and Advanced',
    url: '/pdfs/exams/jee-syllabus.pdf',
    difficulty: 'medium',
    category: 'jee'
  },
  {
    id: 'jee-prev-year',
    title: 'Previous Year Questions',
    type: 'pdf',
    description: 'Collection of previous year JEE questions with solutions',
    url: '/pdfs/exams/jee-previous.pdf',
    difficulty: 'hard',
    category: 'jee'
  },
  {
    id: 'jee-mock-test',
    title: 'Mock Test Series',
    type: 'quiz',
    description: 'Full-length mock tests with detailed solutions',
    url: '/quizzes/jee-mock',
    duration: '3 hours',
    difficulty: 'hard',
    category: 'jee'
  },
  {
    id: 'neet-formulas',
    title: 'NEET Physics Formulas Guide',
    type: 'pdf',
    description: 'Essential physics formulas and concepts for NEET preparation',
    url: '/pdfs/exams/neet-formulas.pdf',
    difficulty: 'medium',
    category: 'neet'
  },
  {
    id: 'neet-video-course',
    title: 'NEET Physics Video Course',
    type: 'video',
    description: 'Detailed video lectures focusing on NEET physics syllabus and important topics',
    url: '/videos/neet-course',
    duration: '40 hours',
    difficulty: 'medium',
    category: 'neet'
  },
  {
    id: 'neet-syllabus',
    title: 'NEET Physics Syllabus',
    type: 'pdf',
    description: 'Complete physics syllabus for NEET',
    url: '/pdfs/exams/neet-syllabus.pdf',
    difficulty: 'medium',
    category: 'neet'
  },
  {
    id: 'neet-important',
    title: 'Important Topics',
    type: 'video',
    description: 'Video lectures on important NEET physics topics',
    url: '/videos/neet-important',
    duration: '2 hours',
    difficulty: 'medium',
    category: 'neet'
  },
  {
    id: 'neet-practice',
    title: 'Practice Questions',
    type: 'quiz',
    description: 'Topic-wise practice questions for NEET',
    url: '/quizzes/neet-practice',
    duration: '1 hour',
    difficulty: 'medium',
    category: 'neet'
  },
  {
    id: 'board-formulas',
    title: 'Board Exam Formulas Handbook',
    type: 'pdf',
    description: 'Complete collection of physics formulas for Class 11 and 12 board exams',
    url: '/pdfs/exams/board-formulas.pdf',
    difficulty: 'easy',
    category: 'board'
  },
  {
    id: 'board-video-tutorials',
    title: 'Board Physics Video Tutorials',
    type: 'video',
    description: 'Conceptual video tutorials for board exam preparation',
    url: '/videos/board-tutorials',
    duration: '30 hours',
    difficulty: 'easy',
    category: 'board'
  },
  {
    id: 'board-syllabus',
    title: 'Board Exam Syllabus',
    type: 'pdf',
    description: 'Class 11 and 12 physics syllabus',
    url: '/pdfs/exams/board-syllabus.pdf',
    difficulty: 'easy',
    category: 'board'
  },
  {
    id: 'board-sample',
    title: 'Sample Papers',
    type: 'pdf',
    description: 'Board exam sample papers with solutions',
    url: '/pdfs/exams/board-sample.pdf',
    difficulty: 'medium',
    category: 'board'
  },
  {
    id: 'board-revision',
    title: 'Quick Revision Notes',
    type: 'pdf',
    description: 'Important formulas and concepts for quick revision',
    url: '/pdfs/exams/board-revision.pdf',
    difficulty: 'easy',
    category: 'board'
  },
  {
    id: '11th-kinematics',
    title: 'Kinematics - Class 11',
    type: 'pdf',
    description: 'Complete notes on motion in one and two dimensions, including graphs and numerical problems',
    url: '/materials/11th/kinematics.pdf',
    difficulty: 'easy',
    category: '11th'
  },
  {
    id: '11th-laws-motion',
    title: 'Laws of Motion - Class 11',
    type: 'video',
    description: 'Detailed video lectures on Newton\'s laws and their applications',
    url: '/materials/11th/laws-motion.mp4',
    difficulty: 'medium',
    duration: '2h 30m',
    category: '11th'
  },
  {
    id: '11th-work-energy',
    title: 'Work, Energy & Power - Class 11',
    type: 'quiz',
    description: 'Practice questions on work-energy theorem and power calculations',
    url: '/materials/11th/work-energy-quiz',
    difficulty: 'medium',
    category: '11th'
  },
  {
    id: '12th-electrostatics',
    title: 'Electrostatics - Class 12',
    type: 'pdf',
    description: 'Complete notes on electric charges, fields, and potential',
    url: '/materials/12th/electrostatics.pdf',
    difficulty: 'medium',
    category: '12th'
  },
  {
    id: '12th-current-electricity',
    title: 'Current Electricity - Class 12',
    type: 'video',
    description: 'Video lectures on Ohm\'s law, Kirchhoff\'s laws, and electrical circuits',
    url: '/materials/12th/current-electricity.mp4',
    difficulty: 'hard',
    duration: '3h 15m',
    category: '12th'
  },
  {
    id: '12th-magnetism',
    title: 'Magnetism - Class 12',
    type: 'quiz',
    description: 'Practice questions on magnetic fields and electromagnetic induction',
    url: '/materials/12th/magnetism-quiz',
    difficulty: 'hard',
    category: '12th'
  }
];

const ExamPreparation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredMaterials = studyMaterials.filter(material => {
    const categoryMatch = selectedCategory === 'all' || material.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || material.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <>
      <Head>
        <title>PhysicsNotes - Exam Preparation</title>
        <meta name="description" content="Physics exam preparation materials and resources" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Exam Preparation</h1>
          <p className={styles.description}>
            Access comprehensive study materials for various competitive exams and classes
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category</label>
            <select
              className={styles.filterSelect}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {examCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Difficulty</label>
            <select
              className={styles.filterSelect}
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <div className={styles.materialsGrid}>
          {filteredMaterials.map(material => (
            <div key={material.id} className={styles.materialCard}>
              <div className={styles.materialHeader}>
                <h3 className={styles.materialTitle}>{material.title}</h3>
                <span className={styles.materialType}>{material.type}</span>
              </div>
              <p className={styles.materialDescription}>{material.description}</p>
              <div className={styles.materialFooter}>
                <a href={material.url} className={styles.materialLink} target="_blank" rel="noopener noreferrer">
                  Access Material
                </a>
                <span className={`${styles.materialDifficulty} ${styles[`difficulty${material.difficulty.charAt(0).toUpperCase() + material.difficulty.slice(1)}`]}`}>
                  {material.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamPreparation; 