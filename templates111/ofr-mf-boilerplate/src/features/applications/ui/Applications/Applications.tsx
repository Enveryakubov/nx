import React, { lazy } from 'react';

import { getPath, ProtectedRoute, ProtectedRoutes } from '@routes';
import { rootStore } from '@data-access/root';
import { Provider } from 'react-redux';
import { AuthService } from '@ofr/ui-kit'

import styles from './Applications.module.scss';

const routes: Array<ProtectedRoute> = [
  {
    path: getPath('applications'),
    exact: true,
    component: lazy(() =>
      import('@features/application-list').then(({ ApplicationList }) => ({
        default: ApplicationList,
      })),
    ),
  },

  {
    path: getPath('createApplication'),
    exact: true,
    component: lazy(() =>
      import('@features/create-application').then(({ CreateApplication }) => ({
        default: CreateApplication,
      })),
    ),
  },
  {
    path: getPath('application', ':id'),
    component: lazy(() =>
      import('@features/application-item').then(({ ApplicationItem }) => ({
        default: ApplicationItem,
      })),
    ),
  },
];

const Applications: React.FC = () => {
  console.log(AuthService.getToken());
  return (
    <div className={styles.app}>
      <Provider store={rootStore}>
        <ProtectedRoutes routes={routes} />
      </Provider>
    </div>
  );
};

export default Applications;
