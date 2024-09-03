/* src/pages/Reservations.js */
import React, { useState } from 'react';
import styled from 'styled-components';
import SuccessModal from '../components/SuccessModal';
import Navbar from './Navbar';
//import styled from 'styled-components';

// Styled component for the reservations container
const ReservationsContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.lightSand};
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};

`;

// Styled component for the reservation form container
// const ReservationContainer = styled.div`
//    padding: 20px;
//    background-color: ${(props) => props.theme.colors.white};
//    border-radius: 10px;
//    max-width: 600px;
//    margin: auto;
//  `;

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

    <ReservationsContainer>
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="date">Date:</label>
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
          <label htmlFor="time">Time:</label>
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
          <label htmlFor="guests">Number of Guests:</label>
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
            </div>
          </div>
  );
};

export default Reservations;
