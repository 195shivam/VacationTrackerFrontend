import { useEffect, useRef } from 'react';
import ApplyLeave from '../ApplyLeave';
import './Home.css';
import { getLeaveDetails } from '../../ApiMethods';
import { getEvent } from '../../ApiMethods';
import CalenderHeader from './CalenderHeader';
import Week from './Week';
import Month from './Month';
import { useHome } from '../../useHome';

function Home() {
  const {
    setLeaveDetails,
    setEventDetails,
    currentDate,
    setCurrentDate,
    showLeaveModal,
    setShowLeaveModal,
  } = useHome();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  // const lastDay = new Date(year, month + 1, 0);
  // const daysInMonth = lastDay.getDate();

  const monthYear = `${firstDay.toLocaleString('default', {
    month: 'long',
  })} ${year}`;
  function changeMonth(counter) {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + counter);
    setCurrentDate(newDate);
  }
  function handleDateClick() {
    if (!showLeaveModal) {
      setShowLeaveModal(true);
    }
  }

  const modalRef = useRef(null);
  useEffect(() => {
    function handleModal(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLeaveModal(false);
      }
    }
    document.addEventListener('mousedown', handleModal);

    Promise.all([getLeaveDetails(), getEvent()])
      .then((value) => {
        setLeaveDetails(value[0]);
        setEventDetails(value[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CalenderHeader monthYear={monthYear} changeMonth={changeMonth} />
      <Week />
      <Month handleDateClick={handleDateClick} />
      {/* {showLeaveModal && } */}

      {showLeaveModal && localStorage.getItem('authToken') && (
        <>
          <div className="backdrop"></div>
          <ApplyLeave
            setShowLeaveModal={setShowLeaveModal}
            modalRef={modalRef}
            setUserLeaveDetails={setLeaveDetails}
            month={month}
            year={year}
          />
        </>
      )}
    </>
  );
}

export default Home;
