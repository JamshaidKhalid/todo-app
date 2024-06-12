import axios from 'axios';
// import { BASE_URL } from '../config/urls';

// const BASE_URL = `http://localhost:5000`
const BASE_URL = `todo-app-node-backend.vercel.app`
export const login = async (email: string, password: string) => {
  try {
    console.log(BASE_URL)
    const response = await axios.post(`${BASE_URL}/auth/signin`, { email, password });
    const { token, userEmail } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('email', userEmail)
    return response.data;
  } catch (error) {
    throw new Error();
  }
};



export const signup = async (email: string, password: string) => {
  try {
    console.log(BASE_URL)
    const response = await axios.post(`${BASE_URL}/auth/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
