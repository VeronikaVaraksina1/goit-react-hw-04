import css from './ImageModal.module.css';

import Modal from 'react-modal';
import { FaRegGrinHearts, FaRegUser } from 'react-icons/fa';

export default function ImageModal({
  value: { imgRegular, description, likes, name },
  modalIsOpen,
  onCloseModal,
}) {
  const customStyles = {
    content: {
      width: '800px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
    },
    overlay: {
      backgroundColor: '#151516db',
    },
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <img src={imgRegular} alt={description} />
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
    </Modal>
  );
}
