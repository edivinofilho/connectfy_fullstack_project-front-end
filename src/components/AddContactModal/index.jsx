import React, { useState } from 'react';

export const AddContactModal = ({ isOpen, closeModal, children }) => {
  return (
    <div
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '1',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};