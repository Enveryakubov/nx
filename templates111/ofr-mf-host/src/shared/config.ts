// if (!window._env_) {
//   window._env_ = {};
// }

const AppConfig: {
  host: string;
  APP_HOST: string;
  APP_KEYCLOAK_REALM: string;
  APP_KEYCLOAK_AUTH_SERVER_URL: string;
  APP_KEYCLOAK_RESOURCE: string;
  APP_PORT?: string;
  APP_USE_KEYCLOAK?: boolean;
  [key: string]: string | boolean | undefined;
} = {
  host: '',
  APP_HOST: '',
  APP_KEYCLOAK_REALM: '',
  APP_KEYCLOAK_AUTH_SERVER_URL: '',
  APP_KEYCLOAK_RESOURCE: '',
};

// if (process.env.NODE_ENV == 'development') {
AppConfig['APP_HOST'] = process?.env?.APP_HOST ?? '';
AppConfig['APP_PORT'] = process?.env?.APP_PORT ?? '';
AppConfig['APP_KEYCLOAK_REALM'] = process.env?.APP_KEYCLOAK_REALM ?? '';
AppConfig['APP_KEYCLOAK_AUTH_SERVER_URL'] = process.env?.APP_KEYCLOAK_AUTH_SERVER_URL ?? '';
AppConfig['APP_KEYCLOAK_RESOURCE'] = process.env?.APP_KEYCLOAK_RESOURCE ?? '';
AppConfig['APP_USE_KEYCLOAK'] = process.env?.APP_USE_KEYCLOAK == 'true';
// } else {
//   AppConfig['APP_HOST'] = window._env_.APP_HOST;
//   AppConfig['APP_PORT'] = window._env_.APP_PORT;
//   AppConfig['APP_KEYCLOAK_REALM'] = window._env_.APP_KEYCLOAK_REALM;
//   AppConfig['APP_KEYCLOAK_AUTH_SERVER_URL'] = window._env_.APP_KEYCLOAK_AUTH_SERVER_URL;
//   AppConfig['APP_KEYCLOAK_RESOURCE'] = window._env_.APP_KEYCLOAK_RESOURCE;
//   AppConfig['APP_USE_KEYCLOAK'] = window._env_.APP_USE_KEYCLOAK == 'true';
// }

AppConfig.host = !!AppConfig['APP_PORT']
  ? `${AppConfig['APP_HOST']}:${AppConfig['APP_PORT']}`
  : AppConfig['APP_HOST'] ?? '';

export { AppConfig };
