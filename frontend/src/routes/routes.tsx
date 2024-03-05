import Home from '../pages/Home';
import Login from '../pages/Login';

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
];

export default routes;
