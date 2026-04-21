import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../shared/Card';
import Input from '../shared/Input';
import Button from '../shared/Button';
import styles from './CreatePostForm.module.css';

const CreatePostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      onCreatePost({ title, body });
      setTitle('');
      setBody('');
      navigate('/posts');
    }
  };

  return (
    <Card className={styles.formCard}>
      <h2>Share Your Engineering Insights</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Your content here... Share insights about mechanical engineering, AI, IoT, and digital transformation"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <Button type="submit">Publish Article</Button>
      </form>
    </Card>
  );
};

export default CreatePostForm;