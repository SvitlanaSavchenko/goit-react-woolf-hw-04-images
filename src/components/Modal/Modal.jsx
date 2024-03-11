import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={handleClickOutside}
    >
      <div className={styles.modalContent}>
        <img className={styles.modalImage} src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
