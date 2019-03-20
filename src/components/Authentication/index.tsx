// Redux
import {connect} from 'react-redux';
import {submitCredentials} from '../../redux/thunks/submitCredentials';
import {State} from '../../redux/reducers';

// Components
import {Authentication} from './Authentication';
import {Action} from '../../redux/actions/authenticationActions';

const mapStateToProps = (state: State) => {
  return {
    error: state.authentication.error,
  };
};

const mapDispatchToProps = (dispatch: any | ((action: Action) => any)) => ({
  onSubmitCredentials: (username: string, password: string) => {
    dispatch(submitCredentials(username, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentication);
