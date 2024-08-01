import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, handleConfirm, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-actions">
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={handleConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;