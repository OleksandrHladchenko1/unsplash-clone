import { Link } from 'react-router-dom';

import styles from './Tag.module.scss';

const Tag = ({ text }) => {
  return (
    <span className={styles.tag}><Link to={`/?query=${text}`}>{text}</Link></span>
  );
};

export default Tag;
