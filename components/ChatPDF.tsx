import { useState, useEffect } from 'react';
import styles from '../styles/ChatPDF.module.css';
import { useRouter } from 'next/router';

const ChatPDF = ({ pdfUrl }: { pdfUrl: string }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(auth);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);

    // Simulate response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "This is a simulated response. In the actual implementation, this would be replaced with an AI response based on the PDF content.",
        isUser: false
      }]);
    }, 1000);

    setMessage('');
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginPrompt}>
        <h3>Login Required</h3>
        <p>Please login to access the Chat PDF feature.</p>
        <button 
          onClick={() => router.push('/login')}
          className={styles.loginButton}
        >
          Login to Continue
        </button>
      </div>
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.isUser ? styles.userMessage : styles.botMessage}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question about this PDF..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPDF; 