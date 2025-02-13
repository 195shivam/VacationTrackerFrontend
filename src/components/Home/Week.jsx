import DayName from '../DayName';

export default function Week() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <div className="weekDays">
      {days.map((el, ind) => (
        <DayName dayName={el} key={ind} />
      ))}
    </div>
  );
}
