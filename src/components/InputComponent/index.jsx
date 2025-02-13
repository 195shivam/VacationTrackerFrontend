import PropTypes from 'prop-types';
import './InputComponent.css';
export default function InputComponent({
  label,
  type,
  formData,
  name,
  setFormData,
  errorMessage,
}) {
  function handleChange(e, propertyName) {
    setFormData((data) => ({ ...data, [propertyName]: e.target.value }));
  }
  return (
    <>
      <div className="d-flex flex-column mx-4">
        <label>{label}</label>
        <input
          type={type}
          value={formData[name]}
          onChange={(e) => handleChange(e, name)}
        />{' '}
        <br />
        {errorMessage && <span className="  text-danger">{errorMessage}</span>}
      </div>
    </>
  );
}
InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
