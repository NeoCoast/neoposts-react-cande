import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
  children,
  ...properties
}) => (
  <button
    type={type}
    className={`btn btn--${variant}`}
    disabled={disabled}
    onClick={onClick}
    {...properties}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
