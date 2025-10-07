import { createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home/index.jsx';
import Login from './containers/Login/index.jsx';
import Signup from './containers/SignUp/index.jsx';

export const router = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Login />, path: '/login' },
  { element: <Signup />, path: '/signup' }
]);
