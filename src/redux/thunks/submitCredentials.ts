// Redux
import {Dispatch} from 'redux';

// Actions
import {
  Action,
  SubmitCredentialsStartAction,
  failed,
  submitCredentialsStart,
  submitCredentialsSuccess,
} from '../actions/authenticationActions';

export const submitCredentials = (username: string, password: string) => (
  dispatch: Dispatch<Action | SubmitCredentialsStartAction>,
) => {
  dispatch(submitCredentialsStart());

  if (!username || !password) {
    return dispatch(failed('Invalid authentication data.'));
  } else if (password === username) {
    return dispatch(submitCredentialsSuccess(username));
  } else {
    return dispatch(failed('Username and password are not the same.'));
  }
};
