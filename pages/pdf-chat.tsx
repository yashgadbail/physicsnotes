import { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from '../styles/PdfChat.module.css';

const PdfChat = () => {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const pdfViewerRef = useRef<HTMLIFrameElement>(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !pdfUrl) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Get the current page number from the PDF viewer
      const currentPage = pdfViewerRef.current?.contentWindow?.document.querySelector('.page')?.id;
      
      // Create a prompt that includes the PDF context
      const prompt = `You are a helpful assistant analyzing a PDF document. 
        The user is currently viewing page ${currentPage || 'unknown'} of the PDF. Do not mention name of this PDF in your response by any means.
        User question: ${userMessage}
        Please provide a detailed response based on the PDF content.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error while processing your request.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pdfContainer}>
        <div className={styles.uploadSection}>
          <input
            type="file"
            accept=".pdf"
            onChange={handlePdfUpload}
            className={styles.fileInput}
          />
        </div>
        {pdfUrl ? (
          <iframe
            ref={pdfViewerRef}
            src={pdfUrl}
            className={styles.pdfViewer}
            title="PDF Viewer"
          />
        ) : (
          <div className={styles.placeholder}>
            <p>Upload a PDF to start analyzing</p>
          </div>
        )}
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
            >
              <p>{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
            </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask a question about the PDF..."
            className={styles.input}
            disabled={!pdfUrl}
          />
          <button
            onClick={handleSendMessage}
            disabled={!pdfUrl || isLoading}
            className={styles.sendButton}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfChat; 