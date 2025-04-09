// import { Typography } from '@mui/material';

// const ProductList = () => {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Lista de Productos
//       </Typography>
//       {/* Aquí luego listaremos los productos */}
//     </div>
//   );
// };

// export default ProductList;

import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { getProductos } from '../services/productService';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

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

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Productos Disponibles
      </Typography>
      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <ProductCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
