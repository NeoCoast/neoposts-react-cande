import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './helpers/auth';
import PropTypes from 'prop-types';

const AuthRedirect = ({ redirectPath = '/' }) => {
  if (isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

AuthRedirect.propTypes = {
  redirectPath: PropTypes.string
};

export default AuthRedirect;
