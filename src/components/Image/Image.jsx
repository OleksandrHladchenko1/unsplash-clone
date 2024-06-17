import styles from './Image.module.scss';

const Image = ({
  alt,
  src,
}) => {
  return (
    <img className={styles.image} alt={alt} src={src} />
  );
};

export default Image;
