import Card from '../components/shared/Card';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Card>
        <h1>About MechTech Hub</h1>
        <p>
          MechTech Hub is a premier platform for mechanical engineers and technology enthusiasts to share knowledge about the intersection of mechanical engineering and emerging technologies. Our mission is to foster innovation and collaboration in the era of Industry 4.0, where artificial intelligence, IoT, digital twins, and automation are reshaping manufacturing.
        </p>
        <h2>Our Focus Areas</h2>
        <ul>
          <li>🤖 AI & Machine Learning in Manufacturing</li>
          <li>📡 IoT Sensors & Real-Time Analytics</li>
          <li>🏭 Industry 4.0 & Digital Transformation</li>
          <li>🔮 Digital Twins & Predictive Maintenance</li>
          <li>🔧 Robotics & Automation</li>
          <li>⚡ Advanced Manufacturing Techniques</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;