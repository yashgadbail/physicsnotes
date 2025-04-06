import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/VideoLectures.module.css';
import Head from 'next/head';

interface VideoLecture {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  views: number;
  likes: number;
  comments: Comment[];
  playlist: VideoLecture[];
  relatedNotes: {
    title: string;
    url: string;
    type: 'formula' | 'theory' | 'example';
  }[];
}

interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

const videoLectures: VideoLecture[] = [
  {
    id: 'quantum-mechanics-intro',
    title: 'Introduction to Quantum Mechanics',
    instructor: 'Dr. Sarah Johnson',
    duration: '2h 15m',
    level: 'beginner',
    category: 'Quantum Physics',
    description: 'A comprehensive introduction to quantum mechanics, covering wave-particle duality, uncertainty principle, and basic quantum states.',
    thumbnail: '/images/videos/quantum.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 12500,
    likes: 850,
    comments: [
      {
        id: '1',
        author: 'PhysicsStudent123',
        text: 'This lecture really helped me understand the basics of quantum mechanics!',
        timestamp: '2 days ago',
        likes: 45,
        replies: []
      },
      {
        id: '2',
        author: 'QuantumEnthusiast',
        text: 'Great explanation of wave-particle duality. Could you do a follow-up on quantum entanglement?',
        timestamp: '1 day ago',
        likes: 32,
        replies: [
          {
            id: '2.1',
            author: 'Dr. Sarah Johnson',
            text: 'Thanks for the suggestion! I\'ll definitely cover quantum entanglement in the next lecture.',
            timestamp: '1 day ago',
            likes: 15,
            replies: []
          }
        ]
      }
    ],
    playlist: [
      {
        id: 'quantum-states',
        title: 'Quantum States and Superposition',
        instructor: 'Dr. Sarah Johnson',
        duration: '1h 45m',
        level: 'beginner',
        category: 'Quantum Physics',
        description: 'Understanding quantum states and the principle of superposition.',
        thumbnail: '/images/videos/quantum-states.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: 9800,
        likes: 720,
        comments: [],
        playlist: [],
        relatedNotes: []
      },
      {
        id: 'quantum-measurement',
        title: 'Quantum Measurement Problem',
        instructor: 'Dr. Sarah Johnson',
        duration: '2h',
        level: 'intermediate',
        category: 'Quantum Physics',
        description: 'Exploring the measurement problem in quantum mechanics.',
        thumbnail: '/images/videos/quantum-measurement.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: 7500,
        likes: 620,
        comments: [],
        playlist: [],
        relatedNotes: []
      }
    ],
    relatedNotes: [
      {
        title: 'Wave-Particle Duality Formulas',
        url: '/formulas#wave-particle-duality',
        type: 'formula'
      },
      {
        title: 'Heisenberg Uncertainty Principle',
        url: '/formulas#uncertainty-principle',
        type: 'formula'
      },
      {
        title: 'Quantum States Theory',
        url: '/theory/quantum-states',
        type: 'theory'
      },
      {
        title: 'Double-Slit Experiment Example',
        url: '/examples/double-slit',
        type: 'example'
      }
    ]
  },
  {
    id: 'special-relativity',
    title: 'Special Relativity Explained',
    instructor: 'Prof. Michael Chen',
    duration: '1h 45m',
    level: 'intermediate',
    category: 'Relativity',
    description: 'Understanding Einstein\'s theory of special relativity, time dilation, length contraction, and the twin paradox.',
    thumbnail: '/images/videos/relativity.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 9800,
    likes: 780,
    comments: [],
    playlist: [],
    relatedNotes: []
  },
  {
    id: 'thermodynamics-laws',
    title: 'The Laws of Thermodynamics',
    instructor: 'Dr. Emily Rodriguez',
    duration: '1h 30m',
    level: 'beginner',
    category: 'Thermodynamics',
    description: 'Master the fundamental laws of thermodynamics with real-world applications and examples.',
    thumbnail: '/images/videos/thermodynamics.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 7500,
    likes: 650,
    comments: [],
    playlist: [],
    relatedNotes: []
  },
  {
    id: 'electromagnetic-waves',
    title: 'Electromagnetic Waves and Light',
    instructor: 'Prof. David Wilson',
    duration: '2h',
    level: 'intermediate',
    category: 'Electromagnetism',
    description: 'Explore the nature of electromagnetic waves, their properties, and applications in modern technology.',
    thumbnail: '/images/videos/electromagnetism.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 11200,
    likes: 900,
    comments: [],
    playlist: [],
    relatedNotes: []
  },
  {
    id: 'black-holes-astrophysics',
    title: 'Black Holes and Astrophysics',
    instructor: 'Dr. Lisa Thompson',
    duration: '2h 30m',
    level: 'advanced',
    category: 'Astrophysics',
    description: 'Deep dive into the physics of black holes, their formation, and their role in the universe.',
    thumbnail: '/images/videos/black-holes.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 8900,
    likes: 700,
    comments: [],
    playlist: [],
    relatedNotes: []
  },
  {
    id: 'particle-physics-basics',
    title: 'Introduction to Particle Physics',
    instructor: 'Prof. James Anderson',
    duration: '1h 50m',
    level: 'intermediate',
    category: 'Particle Physics',
    description: 'Learn about fundamental particles, the Standard Model, and particle accelerators.',
    thumbnail: '/images/videos/particle-physics.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    views: 6800,
    likes: 550,
    comments: [],
    playlist: [],
    relatedNotes: []
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

const levels = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced'
];

const VideoLectures = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');

  const filteredVideos = videoLectures.filter(video => {
    const categoryMatch = selectedCategory === 'All' || video.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || video.level === selectedLevel.toLowerCase();
    const searchMatch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && levelMatch && searchMatch;
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && selectedVideo) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Current User',
        text: newComment,
        timestamp: 'Just now',
        likes: 0,
        replies: []
      };
      selectedVideo.comments.push(comment);
      setNewComment('');
    }
  };

  return (
    <>
      <Head>
        <title>PhysicsNotes - Video Lectures</title>
        <meta name="description" content="Physics video lectures and tutorials" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Physics Video Lectures</h1>
          <p className={styles.description}>
            Watch high-quality physics lectures from expert instructors
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search lectures..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Category</div>
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
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Level</div>
            <div className={styles.levelContainer}>
              {levels.map(level => (
                <button
                  key={level}
                  className={`${styles.levelButton} ${selectedLevel === level ? styles.active : ''}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedVideo ? (
          <div className={styles.videoPlayerContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              />
              <div className={styles.videoInfo}>
                <h2 className={styles.videoTitle}>{selectedVideo.title}</h2>
                <div className={styles.videoMeta}>
                  <span className={styles.views}>{selectedVideo.views.toLocaleString()} views</span>
                  <span className={styles.likes}>❤️ {selectedVideo.likes}</span>
                </div>
                <div className={styles.videoDescription}>{selectedVideo.description}</div>
                
                <div className={styles.relatedNotes}>
                  <h3 className={styles.relatedNotesTitle}>Related Notes</h3>
                  <div className={styles.notesGrid}>
                    {selectedVideo.relatedNotes.map((note, index) => (
                      <Link key={index} href={note.url} className={styles.noteCard}>
                        <div className={`${styles.noteType} ${styles[note.type]}`}>
                          {note.type === 'formula' ? '📐' : note.type === 'theory' ? '📚' : '💡'}
                        </div>
                        <div className={styles.noteContent}>
                          <h4 className={styles.noteTitle}>{note.title}</h4>
                          <span className={styles.noteTypeLabel}>
                            {note.type.charAt(0).toUpperCase() + note.type.slice(1)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.commentsSection}>
                <h3 className={styles.commentsTitle}>Comments</h3>
                <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className={styles.commentInput}
                  />
                  <button type="submit" className={styles.commentButton}>Comment</button>
                </form>
                <div className={styles.commentsList}>
                  {selectedVideo.comments.map(comment => (
                    <div key={comment.id} className={styles.comment}>
                      <div className={styles.commentHeader}>
                        <span className={styles.commentAuthor}>{comment.author}</span>
                        <span className={styles.commentTimestamp}>{comment.timestamp}</span>
                      </div>
                      <p className={styles.commentText}>{comment.text}</p>
                      <div className={styles.commentActions}>
                        <button className={styles.likeButton}>👍 {comment.likes}</button>
                        <button className={styles.replyButton}>Reply</button>
                      </div>
                      {comment.replies.map(reply => (
                        <div key={reply.id} className={styles.reply}>
                          <div className={styles.commentHeader}>
                            <span className={styles.commentAuthor}>{reply.author}</span>
                            <span className={styles.commentTimestamp}>{reply.timestamp}</span>
                          </div>
                          <p className={styles.commentText}>{reply.text}</p>
                          <div className={styles.commentActions}>
                            <button className={styles.likeButton}>👍 {reply.likes}</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.recommendedVideos}>
              <h3 className={styles.recommendedTitle}>Recommended Videos</h3>
              {selectedVideo.playlist.map(video => (
                <div key={video.id} className={styles.recommendedVideo} onClick={() => setSelectedVideo(video)}>
                  <img src={video.thumbnail} alt={video.title} className={styles.recommendedThumbnail} />
                  <div className={styles.recommendedInfo}>
                    <h4 className={styles.recommendedVideoTitle}>{video.title}</h4>
                    <span className={styles.recommendedInstructor}>{video.instructor}</span>
                    <div className={styles.recommendedMeta}>
                      <span className={styles.recommendedViews}>{video.views.toLocaleString()} views</span>
                      <span className={styles.recommendedDuration}>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.videoGrid}>
            {filteredVideos.map(video => (
              <div key={video.id} className={styles.videoCard} onClick={() => setSelectedVideo(video)}>
                <div className={styles.thumbnailContainer}>
                  <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
                  <div className={styles.duration}>{video.duration}</div>
                </div>
                <div className={styles.videoContent}>
                  <div className={styles.videoMeta}>
                    <span className={styles.category}>{video.category}</span>
                    <span className={`${styles.level} ${styles[`level${video.level}`]}`}>
                      {video.level}
                    </span>
                  </div>
                  <h2 className={styles.videoTitle}>{video.title}</h2>
                  <p className={styles.videoDescription}>{video.description}</p>
                  <div className={styles.videoFooter}>
                    <div className={styles.instructorInfo}>
                      <span className={styles.instructor}>{video.instructor}</span>
                      <div className={styles.stats}>
                        <span className={styles.views}>{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VideoLectures; 