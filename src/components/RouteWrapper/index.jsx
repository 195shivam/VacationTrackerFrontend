import PropTypes from 'prop-types';
import RouteGaurd from '../RouteGaurd';
import Navbar from '../Navbar';

export default function RouteWrapper({ children }) {
  return (
    <div>
      <RouteGaurd>
        <Navbar />
        {children}
      </RouteGaurd>
    </div>
  );
}
RouteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
