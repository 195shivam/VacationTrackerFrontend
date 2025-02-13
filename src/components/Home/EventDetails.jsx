import PropTypes from 'prop-types';
import { useHome } from '../../useHome';
import { useUser } from '../../useUser';
import { Link } from 'react-router-dom';

export default function EventDetails({ index }) {
  const { userDetails } = useUser();
  const { eventDetails, currentDate } = useHome();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  return (
    <>
      {Array.isArray(eventDetails)
        ? eventDetails.map((event, i) => {
            if (
              new Date(year, month, index + 1).setHours(0, 0, 0, 0) ==
              new Date(event.eventDate).setHours(0, 0, 0, 0)
            ) {
              if (userDetails.email == 'admin@admin.com') {
                return (
                  <Link
                    className=" d-flex justify-content-center eventDate"
                    key={i}
                    to={`/updateEvent/${event._id}`}
                  >
                    {event.eventName}
                  </Link>
                );
              } else {
                return (
                  <div
                    className=" d-flex justify-content-center eventDate"
                    key={i}
                  >
                    {event.eventName}
                  </div>
                );
              }
            }
          })
        : null}
    </>
  );
}
EventDetails.propTypes = {
  index: PropTypes.number.isRequired,
};
