/* src/pages/Login.js */
/* src/pages/Login.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import img from './background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Login.css';

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
    color: ${(props) => props.theme.colors.black}; /* Change text color to black on hover */
  }
`;

// Styled wrapper for password input and icon
const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${(props) => props.theme.colors.darkTeal};
`;

const Login = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [role, setRole] = useState('customer'); // Default role is customer
  const navigate = useNavigate();

  // Define default credentials for admin and customer
  const defaultCredentials = {
    admin: { email: 'admin@example.com', password: 'admin123' },
    customer: { email: 'customer@example.com', password: 'customer123' },
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Check the role and authenticate
    if (role === 'admin' && email === defaultCredentials.admin.email && password === defaultCredentials.admin.password) {
      onLogin('admin'); // Pass 'admin' role to App.js
      navigate('/dashboard'); // Navigate to admin dashboard
    } else if (role === 'customer' && email === defaultCredentials.customer.email && password === defaultCredentials.customer.password) {
      onLogin('customer'); // Pass 'customer' role to App.js
      navigate('/reservations'); // Navigate to customer reservations
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Check the role and authenticate based on the role
  //   if (role === 'admin' && email === defaultCredentials.admin.email && password === defaultCredentials.admin.password) {
  //     onLogin('admin'); // Pass 'admin' role
  //     navigate('/dashboard'); // Admin can access all components
  //   } else if (role === 'customer' && email === defaultCredentials.customer.email && password === defaultCredentials.customer.password) {
  //     onLogin('customer'); // Pass 'customer' role
  //     navigate('/reservations'); // Customer can access limited components
  //   } else {
  //     alert('Invalid credentials. Please try again.');
  //   }
  // };
  

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const logoStyles = {
    maxHeight: '50px',
  };

  return (
    <LoginContainer>
      <img src='./logo192.png' alt='logo' style={logoStyles}></img>
      <br />
      <img src={img} alt='background' style={{ textAlign: 'center', height: '300px', width: '400px' }}></img>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordWrapper>
          <InputField
            type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Toggle Eye Icon */}
          <EyeIcon 
            icon={showPassword ? faEyeSlash : faEye} 
            onClick={togglePasswordVisibility}
          />
        </PasswordWrapper>
        <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <SubmitButton type="submit"><p>Login</p></SubmitButton>
      </form>
    </LoginContainer>
  );
};

export default Login;









// /* src/pages/Login.js */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import img from './background.png';
// import './Login.css';

// // Styled component for the login container
// const LoginContainer = styled.div`
//   max-width: 400px;
//   margin: auto;
//   padding: 20px;
//   background-color: ${(props) => props.theme.colors.white};
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// // Styled component for input fields
// const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid ${(props) => props.theme.colors.darkTeal};
//   border-radius: 5px;
//   font-family: ${(props) => props.theme.fonts.primary};
// `;

// // Styled component for submit button
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
//     color: ${(props) => props.theme.colors.black}; /* Change text color to black on hover */
//   }
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };

//   const logoStyles = {
//     maxHeight: '50px',
//   };

//   return (
//     <LoginContainer>
//       <img src='./logo192.png' alt='logo' style={logoStyles}></img>
//       <br />
//       <img src={img} alt='background' style={{ textAlign: 'center', height: '300px', width: '400px' }}></img>
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
//         <select name='Admin'>
//           <option value='admin'>Admin</option>
//           <option value='staff'>Staff</option>
//           <option value='user'>User</option>
//         </select>
//         <SubmitButton type="submit"><p>Login</p></SubmitButton>
//       </form>
//     </LoginContainer>
//   );
// };

// export default Login;
