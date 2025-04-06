import styles from '../styles/Features.module.css';

const features = [
  {
    title: 'Comprehensive Notes',
    description: 'Detailed chapter-wise notes with interactive diagrams, solved examples, and concept maps. Perfect for both quick revision and in-depth study.',
    icon: '📚',
    link: '/notes',
    stats: '20+ Chapters'
  },
  {
    title: 'Daily Practice Problems',
    description: 'Daily curated problems with step-by-step solutions, difficulty levels, and performance tracking. Build your problem-solving skills systematically.',
    icon: '📝',
    link: '/dpp',
    stats: '1000+ Problems'
  },
  {
    title: 'Formula Handbook',
    description: 'Complete collection of physics formulas with derivations, applications, and memory techniques. Includes quick reference tables and unit conversions.',
    icon: '📖',
    link: '/formula-handbook',
    stats: '500+ Formulas'
  },
  {
    title: 'Exam Preparation',
    description: 'Access comprehensive study materials and resources for various physics exams',
    icon: '📚',
    link: '/exam-preparation',
    stats: '1000+ Resources'
  },
  {
    title: 'Physics Blogs',
    description: 'Engaging articles on physics concepts, study tips, career guidance, and real-world applications. Updated weekly with new content.',
    icon: '✍️',
    link: '/blogs',
    stats: '50+ Articles'
  },
  {
    title: 'Video Lectures',
    description: 'High-quality video lectures covering all topics with animations, demonstrations, and problem-solving techniques. Learn at your own pace.',
    icon: '🎥',
    link: '/video-lectures',
    stats: '100+ Hours'
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <h2>What We Offer</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <a key={index} href={feature.link} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className={styles.stats}>{feature.stats}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Features; 