// helpers/axiosHelper.js
import axios from 'axios';
import { notification } from 'antd'; // Import notification từ Ant Design

// Tạo instance Axios
const axiosInstance = axios.create({
  baseURL: 'https://demo.vnresearchlab.com/dvc/', 
  timeout: 10000, 
});

const handleError = (error) => {
    if (error.response) {
      notification.error({
        message: 'Lỗi',
        description: error.response.data?.message || 'Có lỗi xảy ra!',
      });
    } else if (error.request) {
      notification.error({
        message: 'Lỗi kết nối',
        description: 'Không thể kết nối với server. Vui lòng thử lại sau.',
      });
    } else {
      notification.error({
        message: 'Lỗi',
        description: `Có lỗi xảy ra: ${error.message}`,
      });
    }
  };
  
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      handleError(error);
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  });
  
  export default axiosInstance;