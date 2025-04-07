import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blogs.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'quantum-mechanics-basics',
    title: 'Understanding Quantum Mechanics: A Beginner\'s Guide',
    author: 'Dr. Sarah Johnson',
    date: '2024-03-15',
    category: 'Quantum Physics',
    readTime: '8 min read',
    excerpt: 'Explore the fundamental concepts of quantum mechanics, from wave-particle duality to the uncertainty principle. Perfect for students starting their quantum journey.',
    image: '/images/blogs/quantum.jpg',
    url: '/blogs/quantum-mechanics-basics'
  },
  {
    id: 'relativity-explained',
    title: 'Einstein\'s Theory of Relativity: Breaking Down the Complex',
    author: 'Prof. Michael Chen',
    date: '2024-03-10',
    category: 'Relativity',
    readTime: '10 min read',
    excerpt: 'A comprehensive guide to understanding special and general relativity, with real-world examples and thought experiments.',
    image: '/images/blogs/relativity.jpg',
    url: '/blogs/relativity-explained'
  },
  {
    id: 'thermodynamics-applications',
    title: 'Thermodynamics in Everyday Life: From Engines to Refrigerators',
    author: 'Dr. Emily Rodriguez',
    date: '2024-03-05',
    category: 'Thermodynamics',
    readTime: '6 min read',
    excerpt: 'Discover how the laws of thermodynamics govern everything from your car engine to your kitchen refrigerator.',
    image: '/images/blogs/thermodynamics.jpg',
    url: '/blogs/thermodynamics-applications'
  },
  {
    id: 'electromagnetism-modern',
    title: 'Electromagnetism: The Force Behind Modern Technology',
    author: 'Prof. David Wilson',
    date: '2024-02-28',
    category: 'Electromagnetism',
    readTime: '7 min read',
    excerpt: 'How electromagnetism powers our modern world, from smartphones to MRI machines.',
    image: '/images/blogs/electromagnetism.jpg',
    url: '/blogs/electromagnetism-modern'
  },
  {
    id: 'astrophysics-black-holes',
    title: 'Black Holes: The Universe\'s Most Mysterious Objects',
    author: 'Dr. Lisa Thompson',
    date: '2024-02-20',
    category: 'Astrophysics',
    readTime: '9 min read',
    excerpt: 'Dive into the fascinating world of black holes, their formation, and their role in the universe.',
    image: '/images/blogs/black-holes.jpg',
    url: '/blogs/astrophysics-black-holes'
  },
  {
    id: 'particle-physics-lhc',
    title: 'The Large Hadron Collider: Unraveling the Universe\'s Secrets',
    author: 'Prof. James Anderson',
    date: '2024-02-15',
    category: 'Particle Physics',
    readTime: '8 min read',
    excerpt: 'An inside look at the world\'s largest particle accelerator and its groundbreaking discoveries.',
    image: '/images/blogs/lhc.jpg',
    url: '/blogs/particle-physics-lhc'
  }
];

const categories = [
  'All',
  'Quantum Physics',
  'Relativity',
  'Thermodynamics',
  'Electromagnetism',
  'Astrophysics',
  'Particle Physics'
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Head>
        <title>PhysicsNotes - Blogs</title>
        <meta name="description" content="Physics blogs and articles" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Physics Blogs</h1>
          <p className={styles.description}>
            Explore our collection of insightful articles covering various topics in physics
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search blogs..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.categoryContainer}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.blogGrid}>
          {filteredPosts.map(post => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogFooter}>
                  <div className={styles.authorInfo}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <Link href={post.url} className={styles.readMore}>
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs; 