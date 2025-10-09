import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from './helpers/auth';

const Layout = ({ redirectPath = '/login' }) => {
  if (!isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  redirectPath: PropTypes.string
};

export default Layout;
