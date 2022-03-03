import Keycloak from 'keycloak-js';
import { AppConfig } from '@config';

const _kc = Keycloak({
  realm: AppConfig['APP_KEYCLOAK_REALM'] ?? '',
  url: AppConfig['APP_KEYCLOAK_AUTH_SERVER_URL'],
  clientId: AppConfig['APP_KEYCLOAK_RESOURCE'] ?? '',
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: any) => {
  _kc
    .init({
      onLoad: 'login-required',
      redirectUri: window.location.origin,
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log('user is not authenticated..!');
      }

      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => (!AppConfig.APP_USE_KEYCLOAK ? true : !!_kc.token);

const updateToken = (successCallback: any) => _kc.updateToken(5).then(successCallback).catch(doLogin);

// const getUsername = () => _kc.tokenParsed?.preferred_username as any;

// const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const AuthService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  // getUsername,
  // hasRole,
};

export default AuthService;
