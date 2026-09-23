import React, { createContext, useContext, useState } from 'react';
import NotificationModal from '../components/common/NotificationModal';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    show: false,
    title: '',
    message: '',
    variant: 'primary',
    onCloseCallback: null,
  });

  const showNotification = (message, title = 'Atención', variant = 'primary', onCloseCallback = null) => {
    setModalState({
      show: true,
      title,
      message,
      variant,
      onCloseCallback,
    });
  };

  const handleClose = () => {
    const callback = modalState.onCloseCallback;
    setModalState((prev) => ({ ...prev, show: false }));
    if (callback) callback();
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationModal
        show={modalState.show}
        handleClose={handleClose}
        title={modalState.title}
        message={modalState.message}
        variant={modalState.variant}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);