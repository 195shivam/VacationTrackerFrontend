import PropTypes from 'prop-types';
import { useState } from 'react';
import { HomeContext } from './HomeContext';
export const HomeProvider = ({ children }) => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveDetails, setLeaveDetails] = useState();
  const [eventDetails, setEventDetails] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());

  // const monthYear = `${firstDay.toLocaleString('default', {
  //   month: 'long',
  // })} ${year}`;

  return (
    <HomeContext.Provider
      value={{
        leaveDetails,
        setLeaveDetails,
        eventDetails,
        setEventDetails,
        currentDate,
        setCurrentDate,
        showLeaveModal,
        setShowLeaveModal,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
