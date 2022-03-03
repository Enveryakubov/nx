import { API } from './api';

export interface IServices {
  api: typeof API;
}

export * from './yup';
export { API };
