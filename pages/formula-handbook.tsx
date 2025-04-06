import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/FormulaHandbook.module.css';
import Head from 'next/head';

interface Formula {
  id: string;
  title: string;
  expression: string;
  description: string;
  units: string;
  derivation: string;
  applications: string[];
  examples: {
    problem: string;
    solution: string;
  }[];
  relatedFormulas: string[];
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  formulas: Formula[];
}

const chapters: Chapter[] = [
  {
    id: 'mechanics',
    title: 'Mechanics',
    description: 'Formulas related to motion, forces, and energy',
    formulas: [
      {
        id: 'newtons-second-law',
        title: "Newton's Second Law",
        expression: 'F = ma',
        description: 'Force equals mass times acceleration',
        units: 'N = kg·m/s²',
        derivation: 'Derived from the rate of change of momentum',
        applications: [
          'Calculating force required for acceleration',
          'Determining mass from force and acceleration',
          'Analyzing motion under constant force'
        ],
        examples: [
          {
            problem: 'A 2 kg object accelerates at 3 m/s². What is the force?',
            solution: 'F = ma = 2 kg × 3 m/s² = 6 N'
          }
        ],
        relatedFormulas: ['Momentum', 'Work-Energy Theorem']
      },
      {
        id: 'kinetic-energy',
        title: 'Kinetic Energy',
        expression: 'KE = ½mv²',
        description: 'Energy possessed by a moving object',
        units: 'J = kg·m²/s²',
        derivation: 'Derived from work-energy theorem',
        applications: [
          'Calculating energy of moving objects',
          'Analyzing collisions',
          'Energy conservation problems'
        ],
        examples: [
          {
            problem: 'A 5 kg object moves at 4 m/s. What is its kinetic energy?',
            solution: 'KE = ½ × 5 kg × (4 m/s)² = 40 J'
          }
        ],
        relatedFormulas: ['Potential Energy', 'Work-Energy Theorem']
      }
    ]
  },
  {
    id: 'electromagnetism',
    title: 'Electromagnetism',
    description: 'Formulas related to electricity and magnetism',
    formulas: [
      {
        id: 'coulombs-law',
        title: "Coulomb's Law",
        expression: 'F = k(q₁q₂)/r²',
        description: 'Force between two point charges',
        units: 'N = N·m²/C²',
        derivation: 'Derived from experimental observations',
        applications: [
          'Calculating force between charges',
          'Analyzing electric fields',
          'Electrostatic problems'
        ],
        examples: [
          {
            problem: 'Two 1 μC charges are 1 m apart. What is the force?',
            solution: 'F = (9×10⁹ N·m²/C²)(1×10⁻⁶ C)²/(1 m)² = 9×10⁻³ N'
          }
        ],
        relatedFormulas: ['Electric Field', 'Electric Potential']
      }
    ]
  }
];

const FormulaHandbook = () => {
  const [selectedChapter, setSelectedChapter] = useState<string>('mechanics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);

  const filteredFormulas = chapters
    .find(chapter => chapter.id === selectedChapter)
    ?.formulas.filter(formula => 
      formula.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formula.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <>
      <Head>
        <title>PhysicsNotes - Formula Handbook</title>
        <meta name="description" content="Comprehensive physics formulas and derivations" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Physics Formula Handbook</h1>
          <p className={styles.description}>
            Comprehensive collection of physics formulas with detailed explanations, derivations, and examples
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search formulas..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.chapters}>
              {chapters.map(chapter => (
                <button
                  key={chapter.id}
                  className={`${styles.chapterButton} ${selectedChapter === chapter.id ? styles.active : ''}`}
                  onClick={() => setSelectedChapter(chapter.id)}
                >
                  <span className={styles.chapterTitle}>{chapter.title}</span>
                  <span className={styles.formulaCount}>{chapter.formulas.length} formulas</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.mainContent}>
            {selectedFormula ? (
              <div className={styles.formulaDetail}>
                <button 
                  className={styles.backButton}
                  onClick={() => setSelectedFormula(null)}
                >
                  ← Back to Formulas
                </button>
                
                <div className={styles.formulaHeader}>
                  <h2 className={styles.formulaTitle}>{selectedFormula.title}</h2>
                  <div className={styles.formulaExpression}>{selectedFormula.expression}</div>
                </div>

                <div className={styles.formulaSections}>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Description</h3>
                    <p className={styles.sectionContent}>{selectedFormula.description}</p>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Units</h3>
                    <p className={styles.sectionContent}>{selectedFormula.units}</p>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Derivation</h3>
                    <p className={styles.sectionContent}>{selectedFormula.derivation}</p>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Applications</h3>
                    <ul className={styles.applicationsList}>
                      {selectedFormula.applications.map((app, index) => (
                        <li key={index} className={styles.applicationItem}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Examples</h3>
                    <div className={styles.examplesList}>
                      {selectedFormula.examples.map((example, index) => (
                        <div key={index} className={styles.example}>
                          <div className={styles.problem}>{example.problem}</div>
                          <div className={styles.solution}>{example.solution}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Related Formulas</h3>
                    <div className={styles.relatedFormulas}>
                      {selectedFormula.relatedFormulas.map((formula, index) => (
                        <span key={index} className={styles.relatedFormula}>{formula}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.formulasGrid}>
                {filteredFormulas.map(formula => (
                  <div 
                    key={formula.id} 
                    className={styles.formulaCard}
                    onClick={() => setSelectedFormula(formula)}
                  >
                    <div className={styles.formulaHeader}>
                      <h3 className={styles.formulaTitle}>{formula.title}</h3>
                      <div className={styles.formulaExpression}>{formula.expression}</div>
                    </div>
                    <p className={styles.formulaDescription}>{formula.description}</p>
                    <div className={styles.formulaFooter}>
                      <span className={styles.units}>{formula.units}</span>
                      <span className={styles.viewDetails}>View Details →</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormulaHandbook; 