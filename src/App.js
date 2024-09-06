//import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/Reservations';
import Orders from './pages/Orders';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';


function App() {
  const [userRole, setUserRole] = useState(null); // Use state to track the user's role after login

  const handleLogin = (role) => {
    setUserRole(role); // Set the role ('admin' or 'customer')
  };
  const handleAccessDenied = () => {
    alert("You don't have access to this page.");
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>

    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      

      {/* Admin Routes */}
      <Route
        path="/dashboard"
        element={userRole === 'admin' ? <Dashboard /> : <Navigate to="/" />}
        />
      <Route
        path="/orders"
        element={userRole === 'admin' ? <Orders /> : <Navigate to="/" />}
        />

      {/* Shared Routes */}
      <Route
        path="/reservations"
        element={userRole ? <Reservations /> : <Navigate to="/" />}
        />
     <Route 
     path="/login" 
     element={userRole ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/contactus"
        element={userRole ? <ContactUs /> : <Navigate to="/" />}
        />
      </Routes>
        </Router>
        </ThemeProvider>
  );
}

export default App;








// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Dashboard from './components/Dashboard';
// // // import Reservations from './components/Reservations';
// // // import Orders from './components/Orders';
// // // import Login from './components/Login';
// // // import Notifications from './components/Notifications';
// // // import './styles/global.css'; // Import global styles

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div>
// // //       <Routes>
// // //         <Route path="/dashboard" component={<Dashboard/>} />
// // //         <Route path="/reservations" component={<Reservations/>} />
// // //         <Route path="/orders" component={<Orders/>} />
// // //         <Route path="/login" component={<Login/>} />
// // //         <Route path="/notifications" component={<Notifications/>} />
// // //         <Route path="/"  element={<Dashboard/>} /> {/* Default route */}
// // //       </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // /* src/App.js */
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { ThemeProvider } from 'styled-components';
// // import { theme } from './styles/theme';
// // import Dashboard from './pages/Dashboard';
// // import Reservations from './pages/Reservations';
// // import Orders from './pages/Orders';
// // import Login from './pages/Login';

// // const App = () => {
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Dashboard />} />
// //           <Route path="/reservations" element={<Reservations />} />
// //           <Route path="/orders" element={<Orders />} />
// //           <Route path="/login" element={<Login />} />
// //         </Routes>
// //       </Router>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;
// /* src/App.js */
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './styles/theme';
// import Dashboard from './pages/Dashboard';
// import Reservations from './pages/Reservations';
// import Orders from './pages/Orders';
// import Login from './pages/Login';
// //import img1 from '../public/logo192.png';
// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/reservations" element={<Reservations />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
