import useLocalStorage from '../hooks/useLocalStorage';
import PostList from '../components/Post/PostList';
import { mechanicalEngineeringPosts } from '../data/mockPosts';
import styles from './Posts.module.css';

const Posts = () => {
  const [localPosts] = useLocalStorage('localPosts', []);
  const [likes, setLikes] = useLocalStorage('likes', {});

  // Combine mock engineering posts with local posts
  const allPosts = [...mechanicalEngineeringPosts, ...localPosts].map(post => ({
    ...post,
    likes: likes[post.id] || 0
  }));

  const handleLike = (postId, liked) => {
    setLikes(prev => ({
      ...prev,
      [postId]: liked ? (prev[postId] || 0) + 1 : Math.max((prev[postId] || 0) - 1, 0)
    }));
  };

  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <h1>Engineering Articles & Insights</h1>
        <p>Discover the latest trends in mechanical engineering and digital transformation</p>
      </div>
      <PostList posts={allPosts} onLike={handleLike} />
    </div>
  );
};

export default Posts;