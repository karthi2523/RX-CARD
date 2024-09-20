import axios from 'axios';

// Create an axios instance with default configuration
const api = axios.create({
  baseURL: 'http://localhost:3001',  // Base URL for your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user signup
export const signup = (name, email, password) => {
  
  return api.post('/signup', {  // Adjust the endpoint if needed
    name: name,
    email: email,
    password: password,
  });
};



export default api;
