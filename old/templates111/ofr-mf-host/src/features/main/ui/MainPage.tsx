import { getPath, PrivateRoute, ProtectedRoute, ProtectedRoutes } from '@routes';
import React, { lazy, useState } from 'react';
import { DrawerButton } from '@components';
// import { AuthService } from '@services';
import { UiLayout, UiDrawer, UiHeader, UiContent, UiMenuItem, UiMenu, ErrorBoundary, AuthService } from '@ofr/ui-kit';
import { Link, useRouteMatch } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const routes: Array<ProtectedRoute> = [
  // {
  //   path: getPath('applications'),
  //   component: lazy(() => import('ofr_mf_applications/Applications')),
  // },
  // {
  //   path: getPath('tasks'),
  //   component: lazy(() => import('ofr_mf_tasks/Tasks')),
  // },
  // {
  //   path: getPath('tasks'),
  //   component: lazy(() => import('ofr_mf_tasks/Tasks')),
  // },
];

const MainPage: React.FC = () => {
  let match = useRouteMatch();
  // const isAuth = AuthService.isLoggedIn();
  const [cookie] = useCookies();

  const isAuth = !!cookie['token'];

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <UiLayout>
      <DrawerButton isOpen={visible} onClick={showDrawer} />
      <UiDrawer visible={visible} onClose={onClose}>
        <UiMenu>
          <UiMenuItem onClick={onClose}>
            <Link to={getPath('applications')}>Заявки</Link>
          </UiMenuItem>
          <UiMenuItem onClick={onClose}>
            <Link to={getPath('tasks')}>Задачи</Link>
          </UiMenuItem>
        </UiMenu>
      </UiDrawer>
      <UiHeader>Header</UiHeader>
      <UiContent>
        <PrivateRoute isAuthenticated={isAuth}>
          <ErrorBoundary>
            <ProtectedRoutes routes={routes} />
          </ErrorBoundary>
        </PrivateRoute>
      </UiContent>
    </UiLayout>
  );
};

export default MainPage;
