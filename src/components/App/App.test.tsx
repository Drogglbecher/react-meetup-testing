import React from 'react';
import {App} from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App authenticated={false} />);
  });

  it('should be rendered', () => {
    expect(wrapper.find('PublicRoute').props.authed).toBeFalsy();
  });
});
