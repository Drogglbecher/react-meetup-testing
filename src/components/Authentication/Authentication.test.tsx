import React from 'react';
import {Authentication} from './Authentication';
import {shallow} from 'enzyme';

describe('Authentication', () => {
  let wrapper;
  let submitCredentialSpy = jest.fn();

  beforeAll(() => {
    wrapper = shallow(
      <Authentication error="" onSubmitCredentials={submitCredentialSpy} />,
    );
  });

  beforeEach(() => {
    submitCredentialSpy.mockReset();
  });

  it('should be rendered', () => {
    // Then
    expect(wrapper.find('Formik').props().initialValues).toEqual(
      wrapper.state(),
    );
  });

  it('should call onSubmitCredentials when handleSubmit is emitted', () => {
    // Given
    const credentials = {username: 'user', password: 'password'};

    // When
    wrapper.find('Formik').simulate('submit', {values: credentials});

    // Then
    expect(submitCredentialSpy).toHaveBeenCalled();
  });
});
