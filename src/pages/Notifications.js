// /* src/components/Notification.js */
// import React from 'react';
// import styled from 'styled-components';

// // Styled component for the notification container
// const NotificationContainer = styled.div`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   background-color: ${(props) => props.type === 'success' ? props.theme.colors.secondary : props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.white};
//   padding: 15px 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   font-family: ${(props) => props.theme.fonts.primary};
//   z-index: 1000;
//   display: flex;
//   align-items: center;
// `;

// // Styled component for notification text
// const NotificationText = styled.span`
//   margin-left: 10px;
// `;

// const Notification = ({ message, type }) => {
//   return (
//     <NotificationContainer type={type}>
//       <NotificationText>{message}</NotificationText>
//     </NotificationContainer>
//   );
// };

// export default Notification;
/* src/pages/Reservations.js */
import React, { useState } from 'react';
import Notification from '../components/Notification';

const Reservations = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleReservation = () => {
    // Logic for handling reservation
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div>
      {showNotification && <Notification message="Reservation Successful!" type="success" />}
      <h2>Reservations Page</h2>
      <button onClick={handleReservation}>Make a Reservation</button>
    </div>
  );
};

export default Reservations;

