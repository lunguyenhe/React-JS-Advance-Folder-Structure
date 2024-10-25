// // src/context/AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { login as loginService } from '../services/authService';

// // Tạo context
// const AuthContext = createContext();

// // Provider cho AuthContext
// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Kiểm tra xem người dùng đã đăng nhập hay chưa khi ứng dụng khởi động
//   useEffect(() => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       setIsAuthenticated(true);
//     }
//     setLoading(false); // Khi đã kiểm tra xong trạng thái đăng nhập
//   }, []);

//   // Hàm xử lý login
//   const login = async (payload) => {
//     const success = await loginService(payload);
//     if (success) {
//       setIsAuthenticated(true);
//     }
//     return success;
//   };

//   // Hàm xử lý logout
//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, AuthContext };
