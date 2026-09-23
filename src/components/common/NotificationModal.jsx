import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NotificationModal = ({ show, handleClose, title, message, variant = 'primary' }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton className="buttonNaranjaDegrade text-white">
        <Modal.Title>{title || 'Notificación'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4 text-center">
        <p className="mb-0 fs-5">{message}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleClose} className="px-4 buttonNaranjaDegrade text-white border-0">
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal;