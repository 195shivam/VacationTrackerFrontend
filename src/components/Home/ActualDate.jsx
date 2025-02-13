import DateCard from '../Date';
import PropTypes from 'prop-types';
import { useHome } from '../../useHome';
import EventDetails from './EventDetails';
import LeaveDetails from './LeaveDetails';

export default function ActualDate({ handleDateClick }) {
  const { currentDate } = useHome();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  return (
    <>
      {new Array(daysInMonth).fill().map((_, index) => (
        <div
          className={` ${new Date(year, month, index + 1).getDay() == 0 ? 'disabledDate' : 'dateCard'} ${new Date(year, month, index + 1).getDay() == 6 ? 'disabledDate' : 'dateCard'} ${
            currentDate.getDate() == index + 1 &&
            currentDate.getMonth() == new Date().getMonth() &&
            currentDate.getFullYear() == new Date().getFullYear()
              ? 'currentDate'
              : ''
          } eventCard`}
          key={index}
          onClick={() => handleDateClick()}
        >
          <EventDetails index={index} />

          <div>
            <DateCard date={index + 1} month={month} year={year} />
          </div>
          <LeaveDetails index={index} />
        </div>
      ))}
    </>
  );
}
ActualDate.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
};
