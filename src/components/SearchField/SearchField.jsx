import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchField.module.scss'

const SearchField = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(term) {
      navigate(`/?query=${term}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for images..."
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>Search</button>
    </form>
  );
};

export default SearchField;
