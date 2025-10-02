import PropTypes from 'prop-types';

const InputWrapper = ({ children, error }) => (
  <div style={{ width: '100%' }}>
    {children}
    {error && <p style={{ alignItems: 'flex-start', color: '#BD1212', display: 'flex', fontSize: '0.875rem', marginBottom: '0px', textAlign: 'justify' }}>{error.message}</p>}
  </div>
);

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.object
};

export default InputWrapper;
