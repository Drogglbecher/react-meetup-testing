import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import renderMergedProps from './renderMergedProps';

export const PublicRoute = ({
  component,
  authed = false,
  redirectTo = '',
  ...rest
}): any => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return authed ? (
          <Redirect
            to={{
              pathname: redirectTo,
              state: {from: routeProps.location},
            }}
          />
        ) : (
          renderMergedProps(component, routeProps, rest)
        );
      }}
    />
  );
};
