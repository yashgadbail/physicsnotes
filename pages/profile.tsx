import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Student',
    joinDate: 'January 2024',
    avatar: 'JD',
    stats: {
      notesRead: 24,
      dppCompleted: 12,
      formulasSaved: 8,
      examsAttempted: 3
    }
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user's information
    setUser(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email
    }));
    setIsEditing(false);
  };

  return (
    <>
      <Head>
        <title>Profile | PhysicsNotes</title>
        <meta name="description" content="Manage your PhysicsNotes profile and settings" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.avatar}>{user.avatar}</div>
            <h2>{user.name}</h2>
            <p className={styles.role}>{user.role}</p>
            <p className={styles.joinDate}>Member since {user.joinDate}</p>
          </div>
          <nav className={styles.sidebarNav}>
            <button 
              className={`${styles.navItem} ${activeTab === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === 'activity' ? styles.active : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </button>
          </nav>
        </div>

        <main className={styles.mainContent}>
          {activeTab === 'overview' && (
            <div className={styles.overview}>
              <h1>Profile Overview</h1>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>Notes Read</h3>
                  <p>{user.stats.notesRead}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>DPP Completed</h3>
                  <p>{user.stats.dppCompleted}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Formulas Saved</h3>
                  <p>{user.stats.formulasSaved}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Exams Attempted</h3>
                  <p>{user.stats.examsAttempted}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className={styles.settings}>
              <h1>Account Settings</h1>
              <form onSubmit={handleSubmit} className={styles.settingsForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                {isEditing && (
                  <>
                    <div className={styles.formGroup}>
                      <label htmlFor="currentPassword">Current Password</label>
                      <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="newPassword">New Password</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="confirmPassword">Confirm New Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}
                <div className={styles.buttonGroup}>
                  {isEditing ? (
                    <>
                      <button type="submit" className={styles.saveButton}>
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className={styles.editButton}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className={styles.activity}>
              <h1>Recent Activity</h1>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon}>📚</div>
                  <div className={styles.activityContent}>
                    <p>Read Chapter 3: Newton's Laws of Motion</p>
                    <span className={styles.activityTime}>2 hours ago</span>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon}>📝</div>
                  <div className={styles.activityContent}>
                    <p>Completed DPP Set #5</p>
                    <span className={styles.activityTime}>1 day ago</span>
                  </div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon}>📊</div>
                  <div className={styles.activityContent}>
                    <p>Attempted JEE Mains Mock Test</p>
                    <span className={styles.activityTime}>3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Profile; 