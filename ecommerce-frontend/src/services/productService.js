// Importamos axios para hacer peticiones HTTP
import axios from 'axios';

// Definimos la URL base de la API para los productos
const API_URL = 'http://localhost:8080/api/productos';

// ----------------------------------------------
// FUNCIONES DEL SERVICIO
// ----------------------------------------------

// Función para obtener la lista de todos los productos
export const getProductos = async () => {
  const response = await axios.get(API_URL); // Petición GET a la URL base
  return response.data; // Retorna los datos (lista de productos)
};

// Función para obtener un solo producto por su ID (útil para editar)
export const getProductoById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`); // GET con ID en la URL
  return response.data; // Retorna el producto específico
};

// Función para crear un nuevo producto (POST)
export const postProducto = async (producto) => {
  const response = await axios.post(API_URL, producto); // POST con los datos del producto
  return response.data; // Retorna el producto creado (puede incluir su ID u otros datos)
};

// Función para actualizar un producto existente (PUT)
export const updateProducto = async (id, productoActualizado) => {
  const response = await axios.put(`${API_URL}/${id}`, productoActualizado); // PUT con ID y datos nuevos
  return response.data; // Retorna el producto actualizado
};

// Función para eliminar un producto por su ID (DELETE)
export const deleteProducto = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`); // DELETE con ID en la URL
  return response.data; // Retorna algún mensaje o estado
};
