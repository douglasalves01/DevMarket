import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import routes from './routes/routes';
import { useAuth0 } from '@auth0/auth0-react';
import SkeletonChildren from './components/Skeleton';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <SkeletonChildren />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              isAuthenticated || !route.protected ? (
                <route.component />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
