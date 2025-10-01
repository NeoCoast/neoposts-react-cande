import InputWrapper from './InputWrapper';
import PropTypes from 'prop-types';

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
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object
};

export default TextInput;
