import FinalPurchase from '../pages/FinalPurchase';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import Product from '../pages/Products';
import { CheckoutForm } from '../services/stripe/CheckForm';
import { Return } from '../services/stripe/Return';

const routes = [
  {
    path: '/',
    component: Home,
    protected: false,
    redirect: true,
  },

  {
    path: '/home',
    component: Home,
    protected: false,
  },
  {
    path: '/product/:id',
    component: ProductPage,
    protected: false,
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
  {
    path: '/products',
    component: Product,
    protected: false,
  },
];

export default routes;
