// import { Toaster } from 'react-hot-toast';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import ContactsPage from './pages/ContactsPage/ContactsPage';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

// function App() {
//    return (
//      <>
//        <Toaster position="top-right" />
//        <Routes>
//    <Route path="/" element={<HomePage />} />
//    <Route path="/register" element={<RestrictedRoute component={RegistrationPage} />} />
//    <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
//    <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
//  </Routes>
//      </>
//    );
//  }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';  

function App() {
  return (
    <Router>
      <RoutesComponent />  
    </Router>
  );
}



export default App;








