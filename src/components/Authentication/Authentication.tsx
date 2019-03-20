// React
import React from 'react';
import '../../styles.scss';

// Formik
import {Field, Form, Formik} from 'formik';

type Props = {
  error: string;
  onSubmitCredentials: (username: string, password: string) => void;
};

type State = {
  username: string;
  password: string;
};

export class Authentication extends React.Component<Props, State> {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (username: string, password: string) =>
    this.props.onSubmitCredentials(username, password);

  renderError = () => {
    const {error} = this.props;

    if (error) {
      return <div id="rt-authentication-error">{error}</div>;
    }
    return <div />;
  };

  render = () => (
    <>
      <Formik
        initialValues={this.state}
        onSubmit={(values: State) =>
          this.handleSubmit(values.username, values.password)
        }
        render={() => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="rt-authentication-username-input"
              autoComplete="rt-authentication-username"
              name="username"
              type="text"
            />

            <label htmlFor="password">Password</label>
            <Field
              id="rt-authentication-password-input"
              autoComplete="rt-authentication-password"
              name="password"
              type="password"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      />
      {this.renderError()}
    </>
  );
}
