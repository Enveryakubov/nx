import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import { AuthService } from '@ofr/ui-kit';
import { App } from './App';
import { AppConfig } from '@config';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
  theme: { primaryColor: '#F44532' },
});

if (AppConfig.APP_USE_KEYCLOAK) {
  AuthService.initKeycloak(
    AppConfig['APP_KEYCLOAK_REALM'] ?? '',
    AppConfig['APP_KEYCLOAK_AUTH_SERVER_URL'],
    AppConfig['APP_KEYCLOAK_RESOURCE'] ?? '',
    () => {
      ReactDOM.render(
        <ConfigProvider>
          <App />
        </ConfigProvider>,
        document.getElementById('root'),
      );
    },
  );
} else {
  ReactDOM.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>,
    document.getElementById('root'),
  );
}
