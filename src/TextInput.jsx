import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';

const TextInput = ({ register, errors, name, placeholder, rules }) => {
  const hasError = errors[name];

  return (
    <InputWrapper error={hasError}>
      <input
        {...register(name, rules)}
        placeholder={placeholder}
        className={`input ${hasError ? 'input-error' : ''}`}
      />
    </InputWrapper>
  );
};

TextInput.propTypes = {
  errors: PropTypes.objectOf(
    PropTypes.shape({
      type: PropTypes.string,
      message: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object
};

export default TextInput;
