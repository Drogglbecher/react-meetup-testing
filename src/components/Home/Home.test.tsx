import React from 'react';
import {Home} from './Home';
import {shallow} from 'enzyme';

describe('Authentication', () => {
  let wrapper;
  let logoutSpy = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<Home username="peter" onLogout={logoutSpy} />);
  });

  beforeEach(() => {
    logoutSpy.mockReset();
  });

  it('should be rendered', () => {
    // Then
    expect(wrapper.find('#rt-user-container').text()).toEqual('Hi, peter');
  });

  it('should call logout when button is clicked', () => {
    // When
    wrapper.find('button').simulate('click');

    // Then
    expect(logoutSpy).toHaveBeenCalled();
  });
});
