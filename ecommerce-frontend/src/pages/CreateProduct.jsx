import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { postProducto } from '../services/productService';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const navigate = useNavigate();

  const handleCrear = async (producto) => {
    try {
      await postProducto(producto);
      toast.success('Producto creado con éxito');
      navigate('/productos'); // redirige al listado
    } catch (error) {
      toast.error('Error al crear producto');
      console.error(error);
    }
  };

  return <ProductForm onSubmit={handleCrear} />;
};

export default CreateProduct;
