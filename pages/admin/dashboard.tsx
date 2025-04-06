import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminDashboard.module.css';

interface ContentStats {
  formulas: number;
  videos: number;
  blogs: number;
  examMaterials: number;
}

interface RecentActivity {
  id: string;
  type: 'formula' | 'video' | 'blog' | 'exam';
  title: string;
  action: 'created' | 'updated' | 'deleted';
  timestamp: string;
  user: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'formulas' | 'videos' | 'blogs' | 'exams'>('overview');
  const [contentStats] = useState<ContentStats>({
    formulas: 500,
    videos: 100,
    blogs: 50,
    examMaterials: 1000
  });

  const [recentActivity] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'formula',
      title: "Newton's Second Law",
      action: 'updated',
      timestamp: '2 hours ago',
      user: 'Admin'
    },
    {
      id: '2',
      type: 'video',
      title: 'Quantum Mechanics Introduction',
      action: 'created',
      timestamp: '5 hours ago',
      user: 'Content Manager'
    },
    {
      id: '3',
      type: 'blog',
      title: 'Understanding Relativity',
      action: 'created',
      timestamp: '1 day ago',
      user: 'Writer'
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.replace('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <div className={styles.userInfo}>
          <span className={styles.username}>Admin</span>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'formulas' ? styles.active : ''}`}
          onClick={() => setActiveTab('formulas')}
        >
          Formulas
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'videos' ? styles.active : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'blogs' ? styles.active : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          Blogs
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'exams' ? styles.active : ''}`}
          onClick={() => setActiveTab('exams')}
        >
          Exam Materials
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className={styles.overview}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>Formulas</h3>
              <div className={styles.statValue}>{contentStats.formulas}</div>
              <div className={styles.statLabel}>Total Formulas</div>
            </div>
            <div className={styles.statCard}>
              <h3>Videos</h3>
              <div className={styles.statValue}>{contentStats.videos}</div>
              <div className={styles.statLabel}>Total Videos</div>
            </div>
            <div className={styles.statCard}>
              <h3>Blogs</h3>
              <div className={styles.statValue}>{contentStats.blogs}</div>
              <div className={styles.statLabel}>Total Blogs</div>
            </div>
            <div className={styles.statCard}>
              <h3>Exam Materials</h3>
              <div className={styles.statValue}>{contentStats.examMaterials}</div>
              <div className={styles.statLabel}>Total Materials</div>
            </div>
          </div>

          <div className={styles.recentActivity}>
            <h2>Recent Activity</h2>
            <div className={styles.activityList}>
              {recentActivity.map(activity => (
                <div key={activity.id} className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    {activity.type === 'formula' && '📐'}
                    {activity.type === 'video' && '🎥'}
                    {activity.type === 'blog' && '✍️'}
                    {activity.type === 'exam' && '📚'}
                  </div>
                  <div className={styles.activityContent}>
                    <div className={styles.activityTitle}>{activity.title}</div>
                    <div className={styles.activityMeta}>
                      <span className={styles.activityAction}>{activity.action}</span>
                      <span className={styles.activityUser}>by {activity.user}</span>
                      <span className={styles.activityTime}>{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Manage Formulas</h2>
            <button className={styles.addButton}>Add New Formula</button>
          </div>
          {/* Formula management interface will go here */}
        </div>
      )}

      {activeTab === 'videos' && (
        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Manage Videos</h2>
            <button className={styles.addButton}>Add New Video</button>
          </div>
          {/* Video management interface will go here */}
        </div>
      )}

      {activeTab === 'blogs' && (
        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Manage Blogs</h2>
            <button className={styles.addButton}>Add New Blog</button>
          </div>
          {/* Blog management interface will go here */}
        </div>
      )}

      {activeTab === 'exams' && (
        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2>Manage Exam Materials</h2>
            <button className={styles.addButton}>Add New Material</button>
          </div>
          {/* Exam materials management interface will go here */}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 