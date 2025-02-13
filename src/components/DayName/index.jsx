import PropTypes from 'prop-types';

export default function DayName({ dayName }) {
  return (
    <div
      className={`dayBox fw-bold d-flex justify-content-center dayName ${dayName == 'Sunday' ? 'text-danger' : ''}`}
    >
      {dayName}
    </div>
  );
}
DayName.propTypes = {
  dayName: PropTypes.string.isRequired,
};
