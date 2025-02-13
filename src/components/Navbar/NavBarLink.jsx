import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBarLink({ value, route }) {
  return (
    <li className="p-2 list-unstyled">
      <Link className=" fs text-white text-decoration-none" to={route}>
        {value}
      </Link>
    </li>
  );
}
NavBarLink.propTypes = {
  value: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
