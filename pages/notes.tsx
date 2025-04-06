import { useState, useRef } from 'react';
import styles from '../styles/Notes.module.css';
import PdfChat from '../components/PdfChat';

interface Chapter {
  id: string;
  title: string;
  pdfUrl: string;
  description: string;
}

interface ClassNotes {
  class: '11' | '12';
  chapters: Chapter[];
}

const notes: ClassNotes[] = [
  {
    class: '11',
    chapters: [
      {
        id: 'units',
        title: 'Units and Measurements',
        pdfUrl: '/pdfs/class11/units.pdf',
        description: 'Fundamental and derived units, dimensional analysis, and measurement techniques.'
      },
      {
        id: 'motion',
        title: 'Motion in a Straight Line',
        pdfUrl: '/pdfs/class11/motion.pdf',
        description: 'Kinematics, equations of motion, and graphical analysis.'
      },
      {
        id: 'laws',
        title: 'Laws of Motion',
        pdfUrl: '/pdfs/class11/laws.pdf',
        description: 'Newton\'s laws, friction, and applications.'
      },
      {
        id: 'work',
        title: 'Work, Energy and Power',
        pdfUrl: '/pdfs/class11/work.pdf',
        description: 'Work-energy theorem, conservation of energy, and power.'
      }
    ]
  },
  {
    class: '12',
    chapters: [
      {
        id: 'electrostatics',
        title: 'Electrostatics',
        pdfUrl: '/pdfs/class12/electrostatics.pdf',
        description: 'Electric charges, Coulomb\'s law, and electric fields.'
      },
      {
        id: 'current',
        title: 'Current Electricity',
        pdfUrl: '/pdfs/class12/current.pdf',
        description: 'Ohm\'s law, Kirchhoff\'s laws, and electrical circuits.'
      },
      {
        id: 'magnetism',
        title: 'Magnetism',
        pdfUrl: '/pdfs/class12/magnetism.pdf',
        description: 'Magnetic fields, Biot-Savart law, and electromagnetic induction.'
      },
      {
        id: 'optics',
        title: 'Ray Optics',
        pdfUrl: '/pdfs/class12/optics.pdf',
        description: 'Reflection, refraction, and optical instruments.'
      }
    ]
  }
];

const Notes = () => {
  const [selectedClass, setSelectedClass] = useState<'11' | '12'>('11');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const pdfViewerRef = useRef<HTMLObjectElement>(null);

  const handlePdfClick = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
    setShowChat(true);
  };

  return (
    <div className={styles.container}>
      <h1>Physics Notes</h1>
      <p className={styles.description}>Comprehensive notes for Class 11 and 12 Physics</p>

      <div className={styles.classSelector}>
        <button
          className={`${styles.classButton} ${selectedClass === '11' ? styles.active : ''}`}
          onClick={() => setSelectedClass('11')}
        >
          Class 11
        </button>
        <button
          className={`${styles.classButton} ${selectedClass === '12' ? styles.active : ''}`}
          onClick={() => setSelectedClass('12')}
        >
          Class 12
        </button>
      </div>

      <div className={styles.chaptersGrid}>
        {notes
          .find(n => n.class === selectedClass)
          ?.chapters.map(chapter => (
            <div key={chapter.id} className={styles.chapterCard}>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <button
                onClick={() => handlePdfClick(chapter.pdfUrl)}
                className={styles.downloadButton}
              >
                View PDF
              </button>
            </div>
          ))}
      </div>

      {selectedPdf && showChat && (
        <div className={styles.pdfChatOverlay}>
          <div className={styles.pdfViewerContainer}>
            <object
              data={selectedPdf}
              type="application/pdf"
              className={styles.pdfViewer}
              onContextMenu={(e) => e.preventDefault()}
            >
              <div className={styles.pdfError}>
                <p>Unable to display PDF file. Please try again later.</p>
                <button onClick={() => setShowChat(false)} className={styles.closeButton}>
                  Close
                </button>
              </div>
            </object>
          </div>
          <div className={styles.chatContainer}>
            <PdfChat pdfUrl={selectedPdf} onClose={() => setShowChat(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes; 