import PropTypes from 'prop-types';
export default function LeaveDateInput({
  label,
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
      <label>{label}</label>
      <input
        type="date"
        value={formData[name]}
        onChange={(e) => handleChange(e, name)}
      />{' '}
      <br />
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </>
  );
}
LeaveDateInput.propTypes = {
  label: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
