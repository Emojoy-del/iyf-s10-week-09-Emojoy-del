import { Link } from 'react-router-dom';
import PostCard from '../components/Post/PostCard';
import Button from '../components/shared/Button';
import { mechanicalEngineeringPosts } from '../data/mockPosts';
import styles from './Home.module.css';

const Home = () => {
  // Use mock posts instead of API to show Mechanical Engineering content
  const posts = mechanicalEngineeringPosts.slice(0, 5);

  return (
    <div className={styles.home}>
      <section className={styles.welcome}>
        <h1>Mechanical Engineering & Technology Hub</h1>
        <p>Exploring AI, IoT, and Digital Innovation in Modern Manufacturing</p>
        <Link to="/posts">
          <Button>Explore Articles</Button>
        </Link>
      </section>
      <section className={styles.recentPosts}>
        <h2>Latest Engineering Insights</h2>
        <div className={styles.posts}>
          {posts && posts.map(post => (
            <PostCard key={post.id} post={post} onLike={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;