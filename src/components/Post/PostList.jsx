import { useState } from 'react';
import PostCard from './PostCard';
import Input from '../shared/Input';
import styles from './PostList.module.css';

const PostList = ({ posts, onLike }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.postList}>
      <div className={styles.search}>
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.posts}>
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} onLike={onLike} />
        ))}
      </div>
    </div>
  );
};

export default PostList;