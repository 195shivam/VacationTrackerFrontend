import { useHome } from '../../useHome';
import DateCard from '../Date';

export default function ExtraDate() {
  const { currentDate } = useHome();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay();
  return (
    <>
      {new Array(startingDay).fill().map((v, index) => (
        <div key={index} className="dateCard">
          <DateCard />
        </div>
      ))}
    </>
  );
}
