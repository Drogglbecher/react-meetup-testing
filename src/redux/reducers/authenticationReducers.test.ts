// Actions
import {
  failed,
  logout,
  submitCredentialsSuccess,
} from '../actions/authenticationActions';

// Reducers
import authenticationReducer, {initialState} from './authenticationReducer';

describe('Authentication Reducers', () => {
  it('should set initial state', () => {
    const action = {type: 'dummy_action', payload: null};
    expect(authenticationReducer(undefined, action)).toMatchSnapshot();
  });

  it('should set `user` and `authenticated` to true when a `SubmitCredentialsSuccess` action is dispatched', () => {
    const action = submitCredentialsSuccess('user');
    expect(authenticationReducer(undefined, action)).toMatchSnapshot();
  });

  it('should set `error` and `user` to null when a `Failed` action is dispatched', () => {
    const initialStateLocal = {
      ...initialState,
      user: 'user',
    };

    const action = failed('Nix gut.');
    expect(authenticationReducer(initialStateLocal, action)).toMatchSnapshot();
  });

  it('should set `authenticated` to false when a `Logout` action is dispatched', () => {
    const initialStateLocal = {
      ...initialState,
      authenticated: true,
      user: 'user',
    };

    const action = logout();
    expect(authenticationReducer(initialStateLocal, action)).toMatchSnapshot();
  });
});
