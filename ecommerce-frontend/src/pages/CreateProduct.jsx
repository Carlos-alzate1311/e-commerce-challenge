// import { useNavigate } from 'react-router-dom';
// import ProductForm from '../components/ProductForm';
// import { postProducto } from '../services/productService';
// import { toast } from 'react-toastify';

// const CreateProduct = () => {
//   const navigate = useNavigate();

//   const handleCrear = async (producto) => {
//     try {
//       await postProducto(producto);
//       toast.success('Producto creado con éxito');
//       navigate('/productos'); // redirige al listado
//     } catch (error) {
//       toast.error('Error al crear producto');
//       console.error(error);
//     }
//   };

//   return <ProductForm onSubmit={handleCrear} />;
// };

// export default CreateProduct;
// Importa la función `useNavigate` para redirigir al usuario luego de crear el producto
import { useNavigate } from 'react-router-dom';

// Importa el formulario de producto que será reutilizado (crear y editar)
import ProductForm from '../components/ProductForm';

// Importa la función que envía la petición POST para crear el producto
import { postProducto } from '../services/productService';

// Importa la librería de notificaciones
import { toast } from 'react-toastify';

const CreateProduct = () => {
  // Hook para redireccionar a otra ruta programáticamente
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleCrear = async (producto) => {
    try {
      // Envía el producto al backend
      await postProducto(producto);

      // Muestra una notificación de éxito
      toast.success('Producto creado con éxito');

      // Redirige al usuario al listado de productos
      navigate('/productos');
    } catch (error) {
      // Muestra una notificación de error
      toast.error('Error al crear producto');
      console.error(error); // También muestra el error en consola para depuración
    }
  };

  // Renderiza el formulario, pasándole la función `onSubmit` como prop
  return <ProductForm onSubmit={handleCrear} />;
};

export default CreateProduct;
