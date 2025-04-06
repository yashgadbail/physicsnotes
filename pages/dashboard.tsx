import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

interface UserStats {
  totalNotesViewed: number;
  totalDPPsAttempted: number;
  lastActive: string;
  subscriptionStatus: 'free' | 'premium';
}

interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalNotes: number;
  totalDPPs: number;
}

const Dashboard = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState<'user' | 'admin' | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [adminStats, setAdminStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    // Check authentication and role
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole');
    
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    setUserRole(role as 'user' | 'admin');

    // Fetch user stats
    if (role === 'user') {
      setUserStats({
        totalNotesViewed: 15,
        totalDPPsAttempted: 8,
        lastActive: new Date().toLocaleDateString(),
        subscriptionStatus: 'free'
      });
    }

    // Fetch admin stats
    if (role === 'admin') {
      setAdminStats({
        totalUsers: 150,
        activeUsers: 75,
        totalNotes: 30,
        totalDPPs: 25
      });
    }
  }, [router]);

  if (!userRole) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Dashboard - PhysicsNotes</title>
        <meta name="description" content="Your PhysicsNotes dashboard" />
        <meta name="copyright" content="© 2024 PhysicsNotes. All rights reserved." />
      </Head>

      <div className={styles.pageContainer}>
        <Navbar />
        
        <div className={styles.container}>
          <h1>Dashboard</h1>
          
          {userRole === 'user' && userStats && (
            <div className={styles.userDashboard}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>Notes Viewed</h3>
                  <p>{userStats.totalNotesViewed}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>DPPs Attempted</h3>
                  <p>{userStats.totalDPPsAttempted}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Last Active</h3>
                  <p>{userStats.lastActive}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Subscription</h3>
                  <p className={userStats.subscriptionStatus === 'premium' ? styles.premium : styles.free}>
                    {userStats.subscriptionStatus}
                  </p>
                </div>
              </div>

              <div className={styles.quickActions}>
                <h2>Quick Actions</h2>
                <div className={styles.actionButtons}>
                  <button onClick={() => router.push('/notes')}>View Notes</button>
                  <button onClick={() => router.push('/dpp')}>Practice DPPs</button>
                  {userStats.subscriptionStatus === 'free' && (
                    <button onClick={() => router.push('/premium')}>Upgrade to Premium</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {userRole === 'admin' && adminStats && (
            <div className={styles.adminDashboard}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>Total Users</h3>
                  <p>{adminStats.totalUsers}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Active Users</h3>
                  <p>{adminStats.activeUsers}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Total Notes</h3>
                  <p>{adminStats.totalNotes}</p>
                </div>
                <div className={styles.statCard}>
                  <h3>Total DPPs</h3>
                  <p>{adminStats.totalDPPs}</p>
                </div>
              </div>

              <div className={styles.adminActions}>
                <h2>Admin Actions</h2>
                <div className={styles.actionButtons}>
                  <button onClick={() => router.push('/admin/notes')}>Manage Notes</button>
                  <button onClick={() => router.push('/admin/dpp')}>Manage DPPs</button>
                  <button onClick={() => router.push('/admin/users')}>Manage Users</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard; 