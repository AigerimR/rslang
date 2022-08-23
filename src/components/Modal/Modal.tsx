import TModalProps from '../../@types/modal';
import React, { FC, useEffect } from 'react';
import classes from './modal.module.scss';
import ReactPortal from '../../components/ReactPortal/ReactPortal';

const Modal: FC<TModalProps> = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
      <div className={classes.modal}>
        <div className={classes.container}>
          <button onClick={handleClose} className={classes.closeBtn}>
            X
          </button>
          <div className={classes.children}>{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
