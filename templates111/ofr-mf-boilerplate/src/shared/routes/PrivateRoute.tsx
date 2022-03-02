import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getPath } from './router-paths';

type PrivateRouteType = {
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<PrivateRouteType> = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: getPath('auth'),
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
