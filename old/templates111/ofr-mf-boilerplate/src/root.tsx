import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Applications } from '@features';
import { AppStyles, AuthService } from '@ofr/ui-kit';
import ReactDOM from 'react-dom';

import '@assets/styles/global.scss';
import { AppConfig } from '@config';
// import { AuthService } from '@services';



if (AppConfig.APP_USE_KEYCLOAK) {
  AuthService.initKeycloak(() => {
    ReactDOM.render(<Router>
      <AppStyles />
      <Applications />
    </Router>, document.getElementById('root'));
  });
} else {
  ReactDOM.render(<Router>
    <AppStyles />
    <Applications />
  </Router>, document.getElementById('root'));
}
