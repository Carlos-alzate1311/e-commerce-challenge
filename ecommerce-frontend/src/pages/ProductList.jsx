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


// 2ejemplo
// import { useEffect, useState } from 'react';
// import { Grid, Typography, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { getProductos } from '../services/productService';
// import ProductCard from '../components/ProductCard';

// const ProductList = () => {
//   const [productos, setProductos] = useState([]);
//   const [busqueda, setBusqueda] = useState('');
//   const navigate = useNavigate();

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

//   const productosFiltrados = productos.filter((producto) =>
//     producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Productos Disponibles
//         </Typography>
//         <Button variant="contained" color="primary" onClick={() => navigate('/crear-producto')}>
//           + Agregar Producto
//         </Button>
//       </div>

//       <TextField
//         label="Buscar producto"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={busqueda}
//         onChange={(e) => setBusqueda(e.target.value)}
//       />

//       <Grid container spacing={3}>
//         {productosFiltrados.map((producto) => (
//           <Grid item xs={12} sm={6} md={4} key={producto.id}>
//             <ProductCard producto={producto} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default ProductList;

// Importación de hooks de React
import { useEffect, useState } from 'react';
// Importación de componentes de Material UI
import { Grid, Typography, TextField, Button } from '@mui/material';
// Importación del hook de navegación de React Router
import { useNavigate } from 'react-router-dom';
// Importación de los servicios para obtener y eliminar productos
import { getProductos, deleteProducto } from '../services/productService';
// Importación del componente de tarjeta individual para mostrar cada producto
import ProductCard from '../components/ProductCard';
// (Opcional) Puedes usar alguna librería de alertas como react-toastify
// import { toast } from 'react-toastify';

const ProductList = () => {
  // Estado para guardar los productos traídos desde el backend
  const [productos, setProductos] = useState([]);
  // Estado para controlar lo que el usuario escribe en la barra de búsqueda
  const [busqueda, setBusqueda] = useState('');
  // Hook para redireccionar a otra página (por ejemplo, a crear o editar)
  const navigate = useNavigate();

  // Hook que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llama al servicio que trae los productos del backend
        const data = await getProductos();
        // Guarda los productos en el estado
        setProductos(data);
      } catch (error) {
        // Muestra error en consola si falla la petición
        console.error('Error al obtener los productos:', error);
      }
    };

    // Llama a la función de carga de productos
    fetchData();
  }, []);

  // Función para redirigir al formulario de edición
  const handleEditar = (producto) => {
    navigate(`/editar-producto/${producto.id}`);
  };

  // Función para eliminar un producto
  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
    if (confirmar) {
      try {
        await deleteProducto(id); // Llama al servicio que elimina el producto
        // Filtra y actualiza la lista sin el producto eliminado
        setProductos(productos.filter((p) => p.id !== id));
        // toast.success('Producto eliminado');
      } catch (error) {
        console.error('Error al eliminar producto:', error);
        // toast.error('Error al eliminar el producto');
      }
    }
  };

  // Filtra los productos según el texto ingresado en la búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      {/* Título principal */}
      <Typography variant="h4" align="center" mt={5} mb={3}>
        Productos Disponibles
      </Typography>

      {/* Barra de búsqueda y botón para agregar producto */}
      <Grid container justifyContent="center" spacing={2} mb={3}>
        <Grid item xs={10} md={6}>
          <TextField
            label="Buscar producto"
            variant="outlined"
            fullWidth
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/crear-producto')}
          >
            + AGREGAR PRODUCTO
          </Button>
        </Grid>
      </Grid>

      {/* Grid que renderiza las tarjetas de productos */}
      <Grid container spacing={2} justifyContent="center">
        {productosFiltrados.map((producto) => (
          <Grid item key={producto.id}>
            {/* Se pasan las funciones de editar y eliminar al componente */}
            <ProductCard
              producto={producto}
              onEdit={handleEditar}
              onDelete={handleEliminar}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;

