import './App.scss';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
