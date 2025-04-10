// import { useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';

// const ProductForm = ({ onSubmit }) => {
//   const [producto, setProducto] = useState({
//     nombre: '',
//     descripcion: '',
//     precio: '',
//     categoria: '',
//     imagen: ''
//   });

//   const handleChange = (e) => {
//     setProducto({ ...producto, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(producto);
//     setProducto({
//       nombre: '',
//       descripcion: '',
//       precio: '',
//       categoria: '',
//       imagen: ''
//     });
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
//       <Typography variant="h5" gutterBottom>Nuevo Producto</Typography>
//       <TextField name="nombre" label="Nombre" fullWidth margin="normal" value={producto.nombre} onChange={handleChange} required />
//       <TextField name="descripcion" label="Descripción" fullWidth margin="normal" value={producto.descripcion} onChange={handleChange} />
//       <TextField name="precio" label="Precio" fullWidth margin="normal" type="number" value={producto.precio} onChange={handleChange} required />
//       <TextField name="categoria" label="Categoría" fullWidth margin="normal" value={producto.categoria} onChange={handleChange} />
//       <TextField name="imagen" label="URL Imagen" fullWidth margin="normal" value={producto.imagen} onChange={handleChange} />

//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Guardar Producto
//       </Button>
//     </Box>
//   );
// };

// export default ProductForm;




import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { postProducto } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  });

  const navigate = useNavigate();

  // Maneja los cambios de los inputs
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  // Envia los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postProducto(producto); // llama al servicio para guardar
      navigate('/productos'); // redirecciona después de guardar
    } catch (error) {
      console.error('Error al guardar el producto', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Campo: Nombre */}
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            name="nombre"
            fullWidth
            value={producto.nombre}
            onChange={handleChange}
          />
        </Grid>

        {/* Campo: Descripción */}
        <Grid item xs={12}>
          <TextField
            label="Descripción"
            name="descripcion"
            fullWidth
            value={producto.descripcion}
            onChange={handleChange}
          />
        </Grid>

        {/* Campo: Precio */}
        <Grid item xs={12}>
          <TextField
            label="Precio"
            name="precio"
            type="number"
            fullWidth
            value={producto.precio}
            onChange={handleChange}
          />
        </Grid>

        {/* Campo: URL Imagen */}
        <Grid item xs={12}>
          <TextField
            label="Imagen (URL)"
            name="imagen"
            fullWidth
            value={producto.imagen}
            onChange={handleChange}
          />
        </Grid>

        {/* Botón Guardar */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Guardar Producto
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
