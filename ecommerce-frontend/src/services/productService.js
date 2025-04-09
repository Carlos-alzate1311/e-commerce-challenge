import axios from 'axios';

export const getProductos = async () => {
  const response = await axios.get('http://localhost:8080/api/productos');
  return response.data;
};
