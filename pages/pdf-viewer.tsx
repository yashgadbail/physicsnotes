import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PdfViewer.module.css';

const PdfViewer = () => {
  const router = useRouter();
  const { url } = router.query;
  const pdfRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    // Prevent right-click and context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!url) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div className={styles.pdfContainer}>
      <object
        ref={pdfRef}
        data={url as string}
        type="application/pdf"
        className={styles.pdfObject}
      >
        <p>Unable to display PDF file. <a href={url as string} target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
      </object>
    </div>
  );
};

export default PdfViewer; 