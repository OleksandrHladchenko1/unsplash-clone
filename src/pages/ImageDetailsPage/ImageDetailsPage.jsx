import { useParams } from 'react-router-dom';
import { Image } from '../../components/Image';
import { Tag } from '../../components/Tag';
import { useGetImageById } from '../../hooks/useGetImageById';
import styles from './ImageDetailsPage.module.scss';

const ImageDetailsPage = () => {
  const { imageId } = useParams();
  const { isLoading, data } = useGetImageById(imageId);

  if(isLoading) {
    return <span>Loading</span>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src={data.urls.raw} />
        </div>
        <div className={styles.description}>
          <h3>Author: <span>{data.user.name}</span></h3>
          <h3>Likes: <span>{data.likes}</span></h3>
          <h3>Tags:</h3>
          {data.tags.map((tag, index) => (
            <Tag key={index} text={tag.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDetailsPage;
