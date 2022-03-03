import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { getPath, PrivateRoute, ProtectedRoute, ProtectedRoutes } from '@routes';
import { Provider } from 'react-redux';
import store, { history } from '@store';
import { CookiesProvider } from 'react-cookie';
import { MainLayout } from '@features/layout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LoginPage } from '@features/auth';
import { useCookies } from 'react-cookie';

const App: React.FC = () => {
  const [cookies, setCookies] = useCookies();
  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    if (cookies.token === 'secure_token') {
      setAuth(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route path={'/auth'} component={LoginPage} />
              <PrivateRoute isAuthenticated={auth}>
                <React.Suspense fallback={null}>
                  <Route
                    exact
                    path={getPath('initial')}
                    component={lazy(() => import('@features/product-list/ProductList'))}
                  />
                  <Route
                    exact
                    path={getPath('programs', ':id')}
                    component={lazy(() => import('@features/contacts/GetContacts'))}
                  />
                  <Route
                    exact
                    path={getPath('payment', ':id')}
                    component={lazy(() => import('@features/payment/PaymentPage'))}
                  />
                </React.Suspense>
              </PrivateRoute>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  );
};

export default App;
