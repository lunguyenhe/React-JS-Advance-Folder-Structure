// context/ToastContext.js
import React, { createContext, useContext } from 'react';
import { notification } from 'antd'; // Import notification từ Ant Design

// Tạo Context
const ToastContext = createContext();

// Tạo Provider
export const ToastProvider = ({ children }) => {
  // Hàm notify với nhiều loại toast khác nhau
  const notify = (message, type = 'success', options = {}) => {
    // Kiểu mặc định là 'success'
    const titleMap = {
      success: 'Success',
      error: 'Error',
      info: 'Information',
      warn: 'Warning',
    };

    notification[type]({
      message: titleMap[type] || 'Notification',
      description: message,
      placement: options.placement || 'topRight', // Vị trí
      duration: options.duration || 3, // Thời gian hiển thị (mặc định 3 giây)
      ...options, // Các tùy chọn khác như icon, style
    });
  };

  return (
    <ToastContext.Provider value={notify}>
      {children}
    </ToastContext.Provider>
  );
};

// Hook để sử dụng ToastContext
export const useToast = () => {
  return useContext(ToastContext);
};
