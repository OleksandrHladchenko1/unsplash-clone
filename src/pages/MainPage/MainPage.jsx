import { useContext } from 'react';
import { Image } from '../../components/Image';

import styles from './MainPage.module.scss';
import { UnsplashContext } from '../../context';
import { Link } from 'react-router-dom';
import { SearchField } from '../../components/SearchField';

const MainPage = () => {
  const { images } = useContext(UnsplashContext);

  return (
    <section>
      <div className={styles.container}>
        <SearchField />
        <ul className={styles.grid}>
          {images.map((image, index) => (
            <li key={image.id} className={styles.grid__item}>
              <Link to={`/image/${image.id}`}>
                <Image src={image.urls.regular} alt={image.alt_description} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainPage;
