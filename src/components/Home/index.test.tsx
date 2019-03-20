import React from 'react';
import HomeContainer from '.';
import {shallow} from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('ConnectedAuthentication', () => {
  let wrapper;
  let store;
  const mockStore = configureMockStore([thunk]);

  beforeEach(() => {
    const initialState = {authentication: {username: 'peter'}};
    store = mockStore(initialState);
    wrapper = shallow(<HomeContainer store={store} />);
  });

  it('mapStateToProps', () => {
    expect(wrapper.props().username).toEqual('peter');
  });

  it('mapDispatchToProps', () => {
    // When
    wrapper.simulate('logout');

    // Then
    const actions = store.getActions();
    expect(actions[0].type).toEqual('[AUTHENTICATION] Logout');
  });
});
