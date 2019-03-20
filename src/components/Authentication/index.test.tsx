import React from 'react';
import AuthenticationContainer from '.';
import {shallow} from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('ConnectedAuthentication', () => {
  let wrapper;
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeEach(() => {
    const initialState = {authentication: {error: ''}};
    store = mockStore(initialState);
    wrapper = shallow(<AuthenticationContainer store={store} />);
  });

  it('mapStateToProps', () => {
    expect(wrapper.props().error).toEqual('');
  });

  it('mapDispatchToProps with wrong login data', () => {
    // When
    wrapper.simulate('submitCredentials');

    // Then
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: '[AUTHENTICATION] SubmitCredentialsStart',
    });
    expect(actions[1]).toEqual({
      payload: 'Invalid authentication data.',
      type: '[AUTHENTICATION] Failed',
    });
  });

  it('mapDispatchToProps with wrong login data [snapshot]', () => {
    // When
    wrapper.simulate('submitCredentials');

    // Then
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
