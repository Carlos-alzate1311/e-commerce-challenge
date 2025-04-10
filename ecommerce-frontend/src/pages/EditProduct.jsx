// src/pages/EditProduct.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import { getProductoById, updateProducto } from '../services/productService';

const EditProduct = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  });

  // Cargar los datos del producto al montar el componente
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getProductoById(id);
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };
    fetchProducto();
  }, [id]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  // Guardar los cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProducto(id, producto);
      navigate('/productos');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={5}>
      <Typography variant="h5" mb={3}>Editar Producto</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="URL de la Imagen"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </form>
    </Box>
  );
};

export default EditProduct;
