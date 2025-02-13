import PropTypes from 'prop-types';
import { useHome } from '../../useHome';

export default function LeaveDetails({ index }) {
  const { leaveDetails, currentDate } = useHome();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <>
      {Array.isArray(leaveDetails)
        ? leaveDetails.map((leaveDetail, i) => {
            return new Date(year, month, index + 1).setHours(0, 0, 0, 0) >=
              new Date(leaveDetail.fromDate).setHours(0, 0, 0, 0) &&
              new Date(year, month, index + 1).setHours(0, 0, 0, 0) <=
                new Date(leaveDetail.toDate).setHours(0, 0, 0, 0) ? (
              <div
                key={i}
                className={`leaveStrip ${new Date(year, month, index + 1).setHours(0, 0, 0, 0) == new Date(leaveDetail.fromDate).setHours(0, 0, 0, 0) ? 'borderRadiusLeft' : ''} ${new Date(year, month, index + 1).setHours(0, 0, 0, 0) == new Date(leaveDetail.toDate).setHours(0, 0, 0, 0) ? 'borderRadiusRight' : ''}`}
                style={{ backgroundColor: `${leaveDetail['color']}` }}
              >
                {new Date(year, month, index + 1).setHours(0, 0, 0, 0) ==
                new Date(leaveDetail.fromDate).setHours(0, 0, 0, 0) ? (
                  <p className=" text-white">{leaveDetail.email}</p>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            );
          })
        : ''}
    </>
  );
}
LeaveDetails.propTypes = {
  index: PropTypes.number.isRequired,
};
