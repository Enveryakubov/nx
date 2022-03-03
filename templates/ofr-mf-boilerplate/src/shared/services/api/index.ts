import { CommentsAPIClient } from './CommentsAPIClient';
import { AccountAPIClient } from './AccountAPIClient';
import { AppsAPIClient } from './AppsAPIClient';
import { DocsAPIClient } from './DocsAPIClient';
import { TaskAPIClient } from './TaskAPIClient';
import { AppConfig } from '@config';
import axios from 'axios';
import AuthService from '../auth-service';

const APIAxiosInstance = axios.create({
  baseURL: `${AppConfig['APP_API_HOST']}:${AppConfig['APP_API_PORT']}`,
});

APIAxiosInstance.interceptors.request.use((config) => {
  // if (!config.headers['Authorization'] && AppConfig['DEBUG'] !== 'true') {
  //   return Promise.reject('No Authorization header present in request');
  // }

  config.headers['Authorization'] = AuthService.getToken();

  return config;
});

export const API = Object.freeze({
  task: new TaskAPIClient(APIAxiosInstance),
  docs: new DocsAPIClient(APIAxiosInstance),
  applications: new AppsAPIClient(APIAxiosInstance),
  account: new AccountAPIClient(APIAxiosInstance),
  comments: new CommentsAPIClient(APIAxiosInstance),
});
