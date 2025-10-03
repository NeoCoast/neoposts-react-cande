import { useState } from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';

import Eye from './assets/icons/eye.png';
import EyeOff from './assets/icons/eye-off.png';

const PasswordInput = ({ register, errors = {}, name = 'password', placeholder = 'Password', rules }) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = errors?.[name];

  return (
    <InputWrapper error={hasError}>
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          {...register(name, rules)
          }
          type={showPassword ? 'text' : 'password'}
          className={`input ${hasError ? 'input-error' : ''}`}
          placeholder={placeholder}
          style={{ paddingRight: '2.5rem', width: '100%' }}
        />
        <img
          src={showPassword ? EyeOff : Eye}
          alt={showPassword ? 'Hide password' : 'Show password'}
          onClick={() => setShowPassword(!showPassword)}
          style={{
            cursor: 'pointer',
            height: '20px',
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '20px'
          }}
        />
      </div>
    </InputWrapper>
  );
};

PasswordInput.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.shape({
    minLength: PropTypes.number,
    pattern: PropTypes.instanceOf(RegExp),
    required: PropTypes.bool
  })
};

export default PasswordInput;
