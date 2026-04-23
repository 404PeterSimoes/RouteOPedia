import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import ProductList from '../pages/product/ProductList';
import ProductDetail from '../pages/product/ProductDetail';
import ProductLayout from '../layout/ProductLayout';
import AllProducts from '../pages/product/productCategory/AllProducts';
import Electronics from '../pages/product/productCategory/Electronics';
import Clothing from '../pages/product/productCategory/Clothing';
import Books from '../pages/product/productCategory/Books';
import Login from '../pages/auth/Login';
import AdminPortal from '../pages/admin/AdminPortal';
import CustomerPortal from '../pages/customer/CustomerPortal';
import ProtectedRoute from './ProtectedRoute';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPortal />} />
      <Route path="/customer" element={<CustomerPortal />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<AllProducts />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="clothing" element={<Clothing />} />
        <Route path="books" element={<Books />} />
      </Route>
      <Route
        path="/products/item/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
