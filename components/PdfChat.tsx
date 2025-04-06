import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/PdfChat.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PdfChat = ({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const isPremium = localStorage.getItem('isPremium') === 'true';

    if (!isAuthenticated && messageCount >= 1) {
      setShowLoginPrompt(true);
      return;
    }

    if (!isPremium && messageCount >= 5) {
      setShowLoginPrompt(true);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const prompt = `You are a physics tutor. The user is viewing a PDF document. Please help them understand the physics concepts in the document. Current page: ${pdfUrl}. User's question: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
      setMessageCount(prev => prev + 1);
    } catch (err) {
      setError('Failed to generate response. Please try again.');
      console.error('Error generating response:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>Physics Assistant</h2>
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>

      <div className={styles.messagesContainer}>
        {messages.length === 0 && (
          <div className={styles.welcomeMessage}>
            <h3>Welcome to Physics Assistant!</h3>
            <p>Ask me anything about the physics concepts in your PDF. I can help you understand:</p>
            <ul>
              <li>Formulas and their derivations</li>
              <li>Problem-solving techniques</li>
              <li>Conceptual explanations</li>
              <li>Real-world applications</li>
            </ul>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
          >
            <div className={styles.messageContent}>
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className={styles.loadingMessage}>
            <div className={styles.spinner}></div>
            <span>Thinking...</span>
          </div>
        )}
        
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask a question about the physics concepts..."
          className={styles.input}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !input.trim()}
          className={styles.sendButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>

      {showLoginPrompt && (
        <div className={styles.loginPrompt}>
          <h3>Continue Learning</h3>
          <p>Sign up or log in to continue asking questions about physics concepts.</p>
          <div className={styles.loginButtons}>
            <button onClick={handleLogin} className={styles.loginButton}>
              Log In
            </button>
            <button onClick={handleSignup} className={styles.signupButton}>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfChat; 