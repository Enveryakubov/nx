import React, { Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { withErrorBoundary } from '@utils';
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
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <Route path="**">
          <Redirect to={routes[0].path} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default withErrorBoundary(ProtectedRoutes);
