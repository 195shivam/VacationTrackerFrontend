import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../../useUser';

const AdminRouteGuard = ({ children }) => {
  const { userDetails } = useUser();
  console.log(userDetails);

  if (userDetails?.email != 'admin@admin.com') {
    return <Navigate to="/home" />;
  }

  return children;
};
AdminRouteGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRouteGuard;
