import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚙️</span>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>MechTech</span>
            <span className={styles.logoSub}>Engineering Hub</span>
          </div>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/posts" className={styles.navLink}>Articles</Link>
        <Link to="/create" className={styles.navLink}>Contribute</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
      </nav>
    </header>
  );
};

export default Header;