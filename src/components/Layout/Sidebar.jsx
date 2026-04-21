import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.statsCard}>
        <h3>📊 Hub Statistics</h3>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Articles Published</span>
          <span className={styles.statValue}>250+</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Active Engineers</span>
          <span className={styles.statValue}>5,000+</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Topics Covered</span>
          <span className={styles.statValue}>45+</span>
        </div>
      </div>
      <div className={styles.activityCard}>
        <h3>🔥 Trending Topics</h3>
        <ul>
          <li>AI in Manufacturing</li>
          <li>Digital Twins & Simulation</li>
          <li>Industry 4.0</li>
          <li>Predictive Maintenance</li>
          <li>Autonomous Systems</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;