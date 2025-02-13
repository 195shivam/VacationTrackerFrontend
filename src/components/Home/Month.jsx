import PropTypes from 'prop-types';
import ExtraDate from './ExtraDate';
import ActualDate from './ActualDate';

export default function Month({ handleDateClick }) {
  return (
    <div className="dateBox row">
      <ExtraDate />
      <ActualDate handleDateClick={handleDateClick} />
    </div>
  );
}

Month.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
};
