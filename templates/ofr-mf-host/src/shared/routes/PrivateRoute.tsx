import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getPath } from './router-paths';
import { useCookies } from 'react-cookie';

type PrivateRouteType = {
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<PrivateRouteType> = ({ children, isAuthenticated, ...rest }) => {
  const [cookies, setCookies] = useCookies();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated || cookies.token === 'secure_token' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
