import PropTypes from 'prop-types';
export default function FormHeading({ heading }) {
  return <h1 className=" d-flex justify-content-center">{heading}</h1>;
}
FormHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};
