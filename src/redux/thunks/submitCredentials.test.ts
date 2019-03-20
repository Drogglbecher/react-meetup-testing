// Actions
import {submitCredentials} from './submitCredentials';

describe('submitCredentials', () => {
  const dispatch = jest.fn();

  it('should dispatch `[AUTHENTICATION] Failed` when `submitCredentials` is called with invalid username or password', () => {
    const state = {
      username: '',
      password: 'password',
    };

    submitCredentials(state.username, state.password)(dispatch);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });

  it('should dispatch `[AUTHENTICATION] Failed` when `submitCredentials` is called with different username and password', () => {
    const state = {
      username: 'user',
      password: 'password',
    };

    submitCredentials(state.username, state.password)(dispatch);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });

  it('should dispatch `[AUTHENTICATION] SubmitCredentialsSuccess` when `submitHandler` is called with same username and password', () => {
    const state = {
      username: 'user',
      password: 'user',
    };

    submitCredentials(state.username, state.password)(dispatch);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
});
