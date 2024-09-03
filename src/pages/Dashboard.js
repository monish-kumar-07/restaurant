import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* src/pages/Dashboard.js */
//import React from 'react';
//import styled from 'styled-components';
//import Navbar from '../components/Navbar';
//import img1 from '.../public/logo192.png';
import Navbar from './Navbar';
import { FaDollarSign, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import {  Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
//import backgroundImage from '../assets/bg.jpg';
//import bg
// Styled component for the dashboard container
// const DashboardContainer = styled.div`
//   padding: 20px;
//   background-color: ${(props) => props.theme.colors.lightSand};
//   background-image:
//   min-height: 100vh; /* Ensures the dashboard takes the full height of the screen */
// `;

const sectionStyle = {
  width: '100%',
  height: '100vh',
//  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

// Styled component for the overview cards
// const OverviewCardsContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-top: 20px;
// `;

// // Styled component for individual overview cards
// const OverviewCard = styled.div`
//   background-color: ${(props) => props.theme.colors.white};
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex: 1;
//   margin: 0 10px;
// `;





















const Dashboard = () => {
  // Mock data for demonstration purposes
  // const totalSales = 1250; // Replace with actual data
  // const totalReservations = 45; // Replace with actual data
  // const totalOrders = 102; // Replace with actual data


  const [dashboardData, setDashboardData] = useState({
    totalSales: 0,
    reservationsToday: 0,
    activeOrders: 0,
    recentReservations: [],
    activeOrdersList: [],
  });

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => setDashboardData(response.data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  const data = {
    labels: ['Sales', 'Reservations', 'Orders'],
    datasets: [{
      label: 'Statistics',
      data: [dashboardData.totalSales, dashboardData.reservationsToday, dashboardData.activeOrders],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  };


  return (
    <>
        <div style={sectionStyle}>
      <Navbar />
      {/* <DashboardContainer>
          
        <h2>Dashboard Overview</h2>
        <OverviewCardsContainer>
          <OverviewCard>
            <h3>Total Sales</h3>
            <p>${totalSales.toFixed(2)}</p>
          </OverviewCard>
          <OverviewCard>
            <h3>Total Reservations</h3>
            <p>{totalReservations}</p>
          </OverviewCard>
          <OverviewCard>
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </OverviewCard>
        </OverviewCardsContainer>
      </DashboardContainer> */}
        <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-overview">
        <div className="overview-item">
          <FaDollarSign className="icon" />
          <h2>Total Sales</h2>
          <p>${dashboardData.totalSales}</p>
        </div>
        <div className="overview-item">
          <FaConciergeBell className="icon" />
          <h2>Reservations Today</h2>
          <p>{dashboardData.reservationsToday}</p>
        </div>
        <div className="overview-item">
          <FaUtensils className="icon" />
          <h2>Active Orders</h2>
          <p>{dashboardData.activeOrders}</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h3>Sales and Reservations Overview</h3>
        <Line data={data} />
      </div>
    </div>
        </div>
    </>
  );
};

export default Dashboard;
