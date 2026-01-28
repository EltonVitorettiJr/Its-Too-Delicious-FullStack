import { Route, Routes, Navigate } from 'react-router-dom';
import {
  Login,
  Register,
  Home,
  Menu,
  Cart,
  Checkout,
  CompletePayment,
  Orders,
  NewProduct,
  EditProduct,
  Products,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { useUser } from '../hooks/UserContext'
import { Categories } from '../containers/Admin/Categories';

export function Router() {

  const { userInfo } = useUser();

  function PrivateRoute({ children }) {
    const { userInfo } = useUser();

    if (!userInfo || Object.keys(userInfo).length === 0) {
      return <Navigate to="/login" replace />;
    }

    return children;
  }

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<PrivateRoute>
          <Home />
        </PrivateRoute>} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />}></Route>
        <Route path="/admin/novo-produto" element={<NewProduct />}></Route>
        <Route path="/admin/editar-produto" element={<EditProduct />}></Route>
        <Route path="/admin/produtos" element={<Products />}></Route>
        <Route path="/admin/categorias" element={<Categories />}></Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pagamento-concluido" element={<CompletePayment />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
