import './App.scss';
import Header from './Header';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
