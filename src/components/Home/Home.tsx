// React
import React from 'react';

type Props = {
  username: string;
  onLogout: () => void;
};

export class Home extends React.Component<Props> {
  handleLogout = () => {
    this.props.onLogout();
  };

  render() {
    const {username} = this.props;

    return (
      <>
        <h2 className="rt-greeting">React Testing Example</h2>
        <br />
        <div id="rt-user-container">{`Hi, ${username}`}</div>
        <br />
        <button id="rt-logout-button" onClick={this.handleLogout}>
          LOGOUT
        </button>
      </>
    );
  }
}
