import css from './ImageCard.module.css';

import { FaRegGrinHearts, FaRegUser } from 'react-icons/fa';

export default function ImageCard({
  image: {
    description,
    urls,
    likes,
    user: { name },
  },
  onOpenModal,
}) {
  return (
    <div className={css.card}>
      <img
        onClick={() =>
          onOpenModal({
            imgRegular: urls.regular,
            description,
            likes,
            name,
          })
        }
        src={urls.small}
        alt={description}
      />
      <div className={css.container}>
        <div className={css.info}>
          <FaRegUser className={css.icon} />
          <p className={css.description}>{name}</p>
        </div>
        <div className={css.info}>
          <FaRegGrinHearts className={css.icon} />
          <p className={css.description}>{likes}</p>
        </div>
      </div>
    </div>
  );
}
