import React from 'react';
import {App} from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App authenticated={true} />);
  });

  it('should be rendered', () => {
    expect(
      wrapper
        .find('PublicRoute')
        .at(0)
        .props().authed,
    ).toBeTruthy();
  });
});
