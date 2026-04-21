import { Link } from 'react-router-dom';
import { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import styles from './PostCard.module.css';

const PostCard = ({ post, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(post.id, !liked);
  };

  return (
    <Card className={styles.postCard}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <div className={styles.actions}>
        <Link to={`/posts/${post.id}`}>
          <Button variant="secondary">Read More</Button>
        </Link>
        <Button onClick={handleLike} variant={liked ? 'danger' : 'primary'}>
          {liked ? 'Unlike' : 'Like'} ({post.likes || 0})
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;