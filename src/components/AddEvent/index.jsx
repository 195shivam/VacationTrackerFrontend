import { useState } from 'react';
import './AddEvent.css';
import InputComponent from '../InputComponent';
import FormHeading from '../FormHeading';
import { useNavigate } from 'react-router-dom';
import { postEvent } from '../../ApiMethods';
import { parceFormData } from './parcer';

export default function AddEvent() {
  const navigate = useNavigate();
  const [eventDetail, setEventDetail] = useState({
    eventName: '',
    eventDate: '',
  });
  const [errors, setErrors] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    if (!parceFormData(eventDetail)) {
      try {
        await postEvent(eventDetail);
        setErrors({});
        navigate('/');
      } catch (err) {
        console.log('Unable to post event', err);
      }
    } else {
      setErrors(parceFormData(eventDetail));
    }
  }
  return (
    <div className="event">
      <div className="eventForm">
        <FormHeading heading={'Add Event'} />
        <form onSubmit={handleSubmit}>
          <InputComponent
            label={'Event Name:'}
            type={'text'}
            formData={eventDetail}
            name={'eventName'}
            setFormData={setEventDetail}
            errorMessage={errors.eventName}
          />

          <InputComponent
            label={'Date:'}
            type={'date'}
            formData={eventDetail}
            name={'eventDate'}
            setFormData={setEventDetail}
            errorMessage={errors.eventDate}
          />
          <div className="buttonDiv">
            <button className="eventSubmitButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
