import React from 'react';
import {Authentication} from './Authentication';
import {mount} from 'enzyme';

describe('Authentication', () => {
  let wrapper;
  let onSubmitCredentialSpy = jest.fn();

  beforeAll(() => {
    wrapper = mount(
      <Authentication error="" onSubmitCredentials={onSubmitCredentialSpy} />,
    );
  });

  beforeEach(() => {
    onSubmitCredentialSpy.mockReset();
  });

  it('should be rendered', () => {
    // Then
    expect(wrapper.find('Formik').props().initialValues).toEqual(
      wrapper.state(),
    );
  });

  it('should call onSubmitCredentials when handleSubmit is emitted', () => {
    // When
    wrapper.instance().handleSubmit('peter', 'binder');

    // Then
    expect(wrapper.props().onSubmitCredentials).toHaveBeenCalled();
  });
});
