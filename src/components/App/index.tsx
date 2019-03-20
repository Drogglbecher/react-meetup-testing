// Redux
import {connect} from 'react-redux';
import {State} from '../../redux/reducers';

// Components
import {App} from './App';

const mapStateToProps = (state: State) => {
  return {
    authenticated: state.authentication.authenticated,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
