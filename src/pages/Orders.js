// import React from 'react';
// import './Orders.css';
// import { Container, Typography } from '@mui/material';

// const Orders = () => {
//   return (
//     <Container className="container">
//       <Typography variant="h4">Orders</Typography>
//       {/* Add order management functionality here */}
//     </Container>
//   );
// };

// export default Orders;
/* src/pages/Orders.js */
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
// Styled component for the orders container
const OrdersContainer = styled.div`
  padding: 0px;
  background-color: ${(props) => props.theme.colors.lightSand};
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
`;

// Styled component for individual order card
const OrderCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Orders = () => {
  // Mock data
  const orders = [
    { id: 1, customer: 'John Doe', items: ['Pizza', 'Salad'], total: 45.99 },
    { id: 2, customer: 'Jane Smith', items: ['Burger', 'Fries'], total: 25.49 },
  ];

  return (
    <OrdersContainer>
      <Navbar/>
      <h2>Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Customer: {order.customer}</p>
          <p>Items: {order.items.join(', ')}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
        </OrderCard>
      ))}
    </OrdersContainer>
  );
};

export default Orders;
