import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, name, required = false }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

export default Input;