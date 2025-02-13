import PropTypes from 'prop-types';
import { useState } from 'react';
import { UserContext } from './UserContext';
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ name: '' });

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
