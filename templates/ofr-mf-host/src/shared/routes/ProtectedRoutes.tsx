import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Loader } from '@components';
import { ProtectedRoute } from '.';

type ProtectedRoutesType = {
  routes: Array<ProtectedRoute>;
};

const ProtectedRoutes: React.FC<ProtectedRoutesType> = ({ routes }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map(({ component, path, exact }) => (
          <Route path={path} key={path} exact={exact} component={component} />
        ))}

        <Route path="**">
          <Redirect to={routes[0].path} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default ProtectedRoutes;
