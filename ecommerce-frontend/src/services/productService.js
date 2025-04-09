import axios from 'axios';

const API_URL = 'http://localhost:8080/api/productos'; // ajusta si tu endpoint es distinto

export const getProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const postProducto = async (producto) => {
  const response = await axios.post(API_URL, producto);
  return response.data;
};

