import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Authentication from '../Authentication';
import Home from '../Home';
import {PrivateRoute} from '../../routeTypes/PrivateRoute';
import {PublicRoute} from '../../routeTypes/PublicRoute';

type Props = {
  authenticated: boolean;
};

export class App extends React.Component<Props> {
  render() {
    const {authenticated} = this.props;

    return (
      <Router>
        <Switch>
          <PublicRoute
            authed={authenticated}
            path="/auth"
            component={Authentication}
            redirectTo="/home"
          />
          <PrivateRoute
            authed={authenticated}
            path="/home"
            component={Home}
            redirectTo="/auth"
          />
          <PublicRoute
            authed={authenticated}
            exact
            path="/"
            component={Authentication}
            redirectTo="/auth"
          />
        </Switch>
      </Router>
    );
  }
}
