import { useState } from 'react';
import PropTypes from 'prop-types';

import Eye from '../../assets/icons/eye.png';
import EyeOff from '../../assets/icons/eye-off.png';
import './styles.scss';

const TextInput = ({ register, errors = {}, name, placeholder, rules, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = errors?.[name];

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className = "text-input__container">
      <input
        type={inputType}
        {...register(name, rules)}
        placeholder={placeholder}
        className={`text-input__field ${hasError ? 'text-input__error' : ''}`}
      />
      {type === 'password' && (
        <img
          src={showPassword ? EyeOff : Eye}
          alt= "Toggle Password Visibility"
          onClick={() => setShowPassword(!showPassword)}
          className = "text-input__eye-icon"
        />
      )}
      {hasError && (
        <p className = "text-input__error-msg">
          {hasError.message}
        </p>
      )}
    </div>
  );
};

TextInput.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.shape({
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    pattern: PropTypes.instanceOf(RegExp),
    required: PropTypes.bool
  }),
  type: PropTypes.oneOf(['text', 'password', 'email'])
};

export default TextInput;
