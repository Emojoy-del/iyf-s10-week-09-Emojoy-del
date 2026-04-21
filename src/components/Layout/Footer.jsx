import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>MechTech Hub</h4>
          <p>Advancing mechanical engineering through technology and innovation</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Topics</h4>
          <ul>
            <li>AI & Machine Learning</li>
            <li>IoT & Sensors</li>
            <li>Manufacturing</li>
            <li>Digital Twins</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 MechTech Engineering Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;