/* src/components/SuccessModal.js */
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// Ensure Modal's root element is correctly set (for accessibility reasons)
Modal.setAppElement('#root');

// Styled component for the modal content
const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.lightSand};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

// Styled component for the close button
const CloseButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: '400px',
          margin: 'auto',
          border: 'none',
          padding: '0',
          borderRadius: '10px',
        },
      }}
    >
      <ModalContent>
        <h2>Reservation Successful!</h2>
        <p>Your reservation has been confirmed.</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
