import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <span>{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
