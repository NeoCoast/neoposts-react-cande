import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './containers/login/index.jsx';
import Signup from './containers/signup/index.jsx';

export const router = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Login />, path: '/login' },
  { element: <Signup />, path: '/signup' }
]);
