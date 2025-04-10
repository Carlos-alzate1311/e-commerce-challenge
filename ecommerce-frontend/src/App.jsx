import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Layout from './components/Layout';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct'; // ajusta el nombre si es diferente

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/crear-producto" element={<CreateProduct />} />
          <Route path="/editar-producto/:id" element={<EditProduct />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

