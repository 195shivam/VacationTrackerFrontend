import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
RouteGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouteGuard;
