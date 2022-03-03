// if (!window._env_) {
//   window._env_ = {};
// }

const AppConfig: { [key: string]: string } = {};

// if (process.env.NODE_ENV == 'development') {
AppConfig['APP_HOST'] = process.env?.APP_HOST ?? '';
AppConfig['APP_PORT'] = process.env?.APP_PORT ?? '';
AppConfig['APP_API_HOST'] = process.env?.APP_API_HOST ?? '';
AppConfig['APP_API_PORT'] = process.env?.APP_API_PORT ?? '';
AppConfig['DEBUG'] = process.env?.APP_GLOBAL_STORE_DEBUG ?? 'false';
// } else {
//   AppConfig['APP_HOST'] = window._env_.APP_HOST;
//   AppConfig['APP_PORT'] = window._env_.APP_PORT;
//   AppConfig['APP_API_HOST'] = window._env_.APP_API_HOST;
//   AppConfig['APP_API_PORT'] = window._env_.APP_API_PORT;
// }

export { AppConfig };
