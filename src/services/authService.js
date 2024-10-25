import axios from 'axios';
import axiosInstance from '../helpers/axiosHelper';



const login = async (payload) => {
  console.log(payload);
  try {
    const response = await axiosInstance.post('/api/auth/login', payload);

    if (response.data?.data.access_token && response.data?.data.refresh_token) {
      localStorage.setItem('accessToken', response.data.data?.access_token);
      localStorage.setItem('refreshToken', response.data?.data.refresh_token);
      console.log('Access token saved:', response.data?.data.access_token);
      return true;
    }

    return false;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return false;
  }
};

export { login };
