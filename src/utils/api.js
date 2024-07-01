// Sample API functions
import axios from 'axios';

const API_URL = 'http://example.com/api';

export const fetchGasTypes = async () => {
  const response = await axios.get(`${API_URL}/gastypes`);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchRefills = async () => {
  const response = await axios.get(`${API_URL}/refills`);
  return response.data;
};
