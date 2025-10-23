import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';

import { store } from './features/store';
import Layout from './Layout';
import AuthRedirect from './AuthRedirect';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/SignUp';

import './style.scss';

const Main = () => (
  <main>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout redirectPath={ROUTES.LOGIN} />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route element={<AuthRedirect redirectPath={ROUTES.HOME} />}>
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  </main>
);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

export default Main;
