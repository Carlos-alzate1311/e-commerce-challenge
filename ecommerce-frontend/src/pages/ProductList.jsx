// import { useEffect, useState } from 'react';
// import { Grid, Typography } from '@mui/material';
// import { getProductos } from '../services/productService';
// import ProductCard from '../components/ProductCard';

// const ProductList = () => {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getProductos();
//         setProductos(data);
//       } catch (error) {
//         console.error('Error al obtener productos:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <Typography variant="h4" gutterBottom>
//         Productos Disponibles
//       </Typography>
//       <Grid container spacing={3}>
//         {productos.map((producto) => (
//           <Grid item xs={12} sm={6} md={4} key={producto.id}>
//             <ProductCard producto={producto} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default ProductList;

import { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../services/productService';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Productos Disponibles
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/crear-producto')}>
          + Agregar Producto
        </Button>
      </div>

      <TextField
        label="Buscar producto"
        variant="outlined"
        fullWidth
        margin="normal"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <Grid container spacing={3}>
        {productosFiltrados.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <ProductCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;

