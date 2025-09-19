import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/'
  },
  {
    element: <Login />,
    path: '/login'
  },
  {
    element: <Signup />,
    path: '/signup'
  }
]);

const Main = () => (
  <main>
    <RouterProvider router={router} />
  </main>
);

export default Main;
