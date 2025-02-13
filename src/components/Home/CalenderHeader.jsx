import PropTypes from 'prop-types';

export default function CalenderHeader({ monthYear, changeMonth }) {
  return (
    <div>
      <div className="row justify-content-between calenderHeader">
        <h1 className="col-3 fw-bold monthYear">{monthYear}</h1>
        <div className="col-6 d-flex align-items-center justify-content-end gap-2"></div>
        <div className="col-3 d-flex justify-content-center align-items-center fs-1 ">
          <i
            className="fa-solid fa-chevron-left p-1 bg-white rounded m-1 calenderChange"
            onClick={() => changeMonth(-1)}
          ></i>
          <i
            className="fa-solid fa-chevron-right p-1 bg-white rounded calenderChange"
            onClick={() => changeMonth(1)}
          ></i>
        </div>
      </div>
    </div>
  );
}

CalenderHeader.propTypes = {
  monthYear: PropTypes.string.isRequired,
  changeMonth: PropTypes.func.isRequired,
};
