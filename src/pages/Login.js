// /* src/pages/Login.js */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import styled from 'styled-components';

// // Styled components for the form container and input fields
// const LoginContainer = styled.div`
//   max-width: 400px;
//   margin: auto;
//   padding: 20px;
//   background-color: ${(props) => props.theme.colors.white};
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid ${(props) => props.theme.colors.darkTeal};
//   border-radius: 5px;
//   font-family: ${(props) => props.theme.fonts.primary};
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.white};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-family: ${(props) => props.theme.fonts.secondary};

//   &:hover {
//     background-color: ${(props) => props.theme.colors.accent};
//   }
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform login logic here (e.g., validate user credentials)

//     // Redirect to the dashboard
//     navigate('/'); // Redirects to the root route ("/") which is assumed to be the dashboard
//   };

//   return (
//     <LoginContainer>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <InputField
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <InputField
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <SubmitButton type="submit">Login</SubmitButton>
//       </form>
//     </LoginContainer>
//   );
// };

// export default Login;
/* src/pages/Login.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for the login container
const LoginContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled component for input fields
const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.theme.colors.darkTeal};
  border-radius: 5px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

// Styled component for submit button
const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </LoginContainer>
  );
};

export default Login;
