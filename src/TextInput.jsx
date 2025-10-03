import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';

const TextInput = ({ register, errors = {}, name, placeholder, rules }) => {
  const hasError = errors?.[name];

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
  })
};

export default TextInput;
