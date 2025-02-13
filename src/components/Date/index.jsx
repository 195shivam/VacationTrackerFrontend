import PropTypes from 'prop-types';
import './DateCard.css';
export default function Date({ date }) {
  return (
    <>
      <span className="date">{date}</span>
    </>
  );
}

Date.propTypes = {
  date: PropTypes.number,
};
