import { useState } from 'react';

import { useUser } from '../../useUser';
import LeaveDateInput from '../LeaveDateInput';
import { postLeaveDetails } from '../../ApiMethods';
import PropTypes from 'prop-types';

import { z } from 'zod';

import './ApplyLeave.css';
import FormHeading from '../FormHeading';

const formSchema = z.object({
  fromDate: z.string().min(3, 'Date Of Birth is required'),
  toDate: z.string().min(3, 'Date Of Birth is required'),
  color: z.string().min(3, 'Color is required'),
  email: z.string().email('Invalid Email'),
});

export default function ApplyLeave({
  modalRef,
  setShowLeaveModal,
  setUserLeaveDetails,
  month,
  year,
}) {
  const [errors, setErrors] = useState({});
  const { userDetails } = useUser();
  const [leaveDetail, setLeaveDetail] = useState({
    fromDate: new Date(year, month, 2).toISOString().split('T')[0],
    toDate: new Date(year, month, 2).toISOString().split('T')[0],
    color: userDetails.color,
    email: userDetails.email,
  });

  async function handleLeaveSubmit(e) {
    e.preventDefault();
    try {
      formSchema.parse(leaveDetail);
      console.log(leaveDetail);
      setUserLeaveDetails((data) => [...data, leaveDetail]);
      await postLeaveDetails(leaveDetail);
      setErrors({});
      setShowLeaveModal(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorObj = {};
        err.errors.forEach((error) => {
          errorObj[error.path[0]] = error.message;
        });
        setErrors(errorObj);
      }
    }
  }

  return (
    <div className=" leaveModal">
      <div className="leave " ref={modalRef}>
        <FormHeading heading={'Apply Leave'} />

        <form
          className=" d-flex flex-column justify-content-center"
          onSubmit={(e) => handleLeaveSubmit(e)}
        >
          <div className=" d-flex justify-content-between align-items-center gap-1">
            <LeaveDateInput
              label={'From Date:'}
              formData={leaveDetail}
              name={'fromDate'}
              setFormData={setLeaveDetail}
              errorMessage={errors.fromDate}
              month={month}
              year={year}
            />
          </div>

          <div className=" d-flex justify-content-between align-items-center gap-1">
            <LeaveDateInput
              label={'To Date:'}
              formData={leaveDetail}
              name={'toDate'}
              setFormData={setLeaveDetail}
              errorMessage={errors.toDate}
              month={month}
              year={year}
            />
          </div>
          <br />
          <div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
ApplyLeave.propTypes = {
  modalRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  setUserLeaveDetails: PropTypes.func.isRequired,
  setShowLeaveModal: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
