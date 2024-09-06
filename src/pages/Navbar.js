/* src/components/Navbar.js */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './logo192.png';
//import './Navbar.css';
const logoStyles = {
    maxHeight: '50px',
    marginRight: '20px',
  }
// Styled component for the navbar container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px 30px;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

// Styled component for navbar links
const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
       <img src={img} alt='logo' style={logoStyles}></img>
      <h1 style={{ color: 'white' }}>Da Vinci Dining</h1>
      <NavLinks>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Logout</Link>
        <Link to="/contactus">Contact Us</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
