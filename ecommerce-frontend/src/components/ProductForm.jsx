import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProductForm = ({ onSubmit }) => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    imagen: ''
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(producto);
    setProducto({
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: '',
      imagen: ''
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Nuevo Producto</Typography>
      <TextField name="nombre" label="Nombre" fullWidth margin="normal" value={producto.nombre} onChange={handleChange} required />
      <TextField name="descripcion" label="Descripción" fullWidth margin="normal" value={producto.descripcion} onChange={handleChange} />
      <TextField name="precio" label="Precio" fullWidth margin="normal" type="number" value={producto.precio} onChange={handleChange} required />
      <TextField name="categoria" label="Categoría" fullWidth margin="normal" value={producto.categoria} onChange={handleChange} />
      <TextField name="imagen" label="URL Imagen" fullWidth margin="normal" value={producto.imagen} onChange={handleChange} />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar Producto
      </Button>
    </Box>
  );
};

export default ProductForm;
