import FinalPurchase from '../pages/FinalPurchase';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductPage from '../pages/ProductPage';
import { CheckoutForm } from '../services/stripe/CheckForm';
import { Return } from '../services/stripe/Return';

const routes = [
  {
    path: '/',
    component: Login,
    protected: false,
    redirect: true,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
  {
    path: '/home',
    component: Home,
    protected: true,
  },
  {
    path: '/product/:id',
    component: ProductPage,
    protected: true,
  },
  {
    path: '/purchase',
    component: FinalPurchase,
    protected: true,
  },
  {
    path: '/checkout',
    component: CheckoutForm,
    protected: false,
  },
  {
    path: '/return',
    component: Return,
    protected: false,
  },
];

export default routes;
