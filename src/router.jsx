import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

export const router = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Login />, path: '/login' },
  { element: <Signup />, path: '/signup' }
]);
