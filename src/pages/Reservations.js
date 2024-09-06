/* src/pages/Reservations.js */
import React, { useState } from 'react';
import styled from 'styled-components';
import SuccessModal from '../components/SuccessModal';
import Navbar from './Navbar';
//import styled from 'styled-components';
import bg from '../assets/pexels.jpg';

// Styled component for the reservations container
// const ReservationsContainer = styled.div`
//   padding: 20px;
//   background-color: ${(props) => props.theme.colors.lightSand};
//   min-height: 100vh;
//   font-family: ${(props) => props.theme.fonts.primary};

// `;
const ReservationsContainer = styled.div`
  padding: 20px;
  background-color: white; /* White background */
  width: 400px; /* Set width for the square */
  height: 400px; /* Set height for the square */
  border-radius: 20px; /* Rounded corners */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Adds shadow for a card effect */
`;



// Styled component for the reservation form container
// const ReservationContainer = styled.div`
//    padding: 20px;
//    background-color: ${(props) => props.theme.colors.white};
//    border-radius: 10px;
//    max-width: 600px;
//    margin: auto;
//  `;

const ReservationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.lightSand};
  background-image: url(${(props) => props.bg}); /* Corrected background-image */
  background-size: cover;
  background-position: center;
`;


const parentStyle = {
  display: 'grid',
  placeItems: 'center',      // Centers content both horizontally and vertically
  height: '0vh',           // Full viewport height
};

// Define a style object for the child container
const containerStyle = {
  width: '100%',              // Adjust width as needed
  padding: '0px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
};

const Reservations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to save reservation (e.g., API call)
    // Simulate a successful reservation for demonstration
    console.log('Reservation made:', formData);

    // Open the success modal after submitting the reservation
    setIsModalOpen(true);
  };

  return (
    <div style={parentStyle}>
      <div style={containerStyle}>
      <Navbar/>
    <ReservationsWrapper bg={bg}>

    <ReservationsContainer>
      <h1>Make Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:     </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="date">Date:     </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="time">Time:     </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="guests">Number of Guests:      </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
            />
        </div>
        <button type="submit">Reserve</button>
      </form>

      {/* Success modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ReservationsContainer>
            </ReservationsWrapper>
            </div>
          </div>
  );
};

export default Reservations;
