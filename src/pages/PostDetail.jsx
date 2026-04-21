import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import styles from './PostDetail.module.css';

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [localPosts] = useLocalStorage('localPosts', []);
  const [likes, setLikes] = useLocalStorage('likes', {});
  const [liked, setLiked] = useState(false);

  const localPost = localPosts.find(p => p.id == id);
  const displayPost = post || localPost;

  if (!displayPost && !loading) return <div>Post not found</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => ({
      ...prev,
      [displayPost.id]: !liked ? (prev[displayPost.id] || 0) + 1 : Math.max((prev[displayPost.id] || 0) - 1, 0)
    }));
  };

  return (
    <div className={styles.postDetail}>
      <Card>
        <h1>{displayPost.title}</h1>
        <p>{displayPost.body}</p>
        <div className={styles.actions}>
          <Button onClick={handleLike} variant={liked ? 'danger' : 'primary'}>
            {liked ? 'Unlike' : 'Like'} ({likes[displayPost.id] || 0})
          </Button>
          <Link to="/posts">
            <Button variant="secondary">Back to Posts</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;