// // src/middleware/AuthMiddleware.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const AuthMiddleware = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
  
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// export default AuthMiddleware;
