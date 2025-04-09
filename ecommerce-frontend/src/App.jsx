import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Layout from './components/Layout';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/crear-producto" element={<CreateProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

