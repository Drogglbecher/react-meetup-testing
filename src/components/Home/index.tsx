// Redux
import {connect} from 'react-redux';
import {State} from '../../redux/reducers';
import {Action, logout} from '../../redux/actions/authenticationActions';

// Components
import {Home} from './Home';

const mapStateToProps = (state: State) => {
  return {
    username: state.authentication.username,
  };
};

const mapDispatchToProps = (dispatch: any | ((action: Action) => any)) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
