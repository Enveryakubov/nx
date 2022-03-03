import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type PublicRouteType = {
  isAuthenticated: boolean;
};

const PublicRoute: React.FC<PublicRouteType> = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
