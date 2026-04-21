import useLocalStorage from '../hooks/useLocalStorage';
import CreatePostForm from '../components/Post/CreatePostForm';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  const [localPosts, setLocalPosts] = useLocalStorage('localPosts', []);

  const handleCreatePost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(), // Simple ID generation
      userId: 1
    };
    setLocalPosts([...localPosts, post]);
  };

  return (
    <div className={styles.createPost}>
      <div className={styles.header}>
        <h1>Share Your Knowledge</h1>
        <p>Contribute an article about mechanical engineering and technology</p>
      </div>
      <CreatePostForm onCreatePost={handleCreatePost} />
    </div>
  );
};

export default CreatePost;