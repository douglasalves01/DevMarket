import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductPage from '../pages/ProductPage';

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
];

export default routes;
