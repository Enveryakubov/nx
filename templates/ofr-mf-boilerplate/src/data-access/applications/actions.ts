import type { AxiosPromise } from 'axios';

import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  ICreateApplicationRequest,
  ICreateApplicationResponseSuccess,
  IGetApplicationByIdRequest,
  IGetApplicationByIdResponseSuccess,
  IGetApplicationsRequest,
  IGetApplicationsResponseSuccess,
} from '@interfaces';

export const getApplicationByIdAsync = createAsyncAction(
  '@applications/GET_APPLICATION_BY_ID_REQUEST',
  '@applications/GET_APPLICATION_BY_ID_SUCCESS',
  '@applications/GET_APPLICATION_BY_ID_FAILURE',
)<
  IGetApplicationByIdRequest,
  IGetApplicationByIdResponseSuccess | AxiosPromise<IGetApplicationByIdResponseSuccess>,
  unknown
>();

export const getApplicationsAsync = createAsyncAction(
  '@applications/GET_APPLICATIONS_REQUEST',
  '@applications/GET_APPLICATIONS_SUCCESS',
  '@applications/GET_APPLICATIONS_FAILURE',
)<IGetApplicationsRequest, IGetApplicationsResponseSuccess | AxiosPromise<IGetApplicationsResponseSuccess>, unknown>();

export const createApplicationAsync = createAsyncAction(
  '@applications/CREATE_APPLICATIONS_REQUEST',
  '@applications/CREATE_APPLICATIONS_SUCCESS',
  '@applications/CREATE_APPLICATIONS_FAILURE',
)<
  ICreateApplicationRequest,
  ICreateApplicationResponseSuccess | AxiosPromise<ICreateApplicationResponseSuccess>,
  unknown
>();

export const clearCurrentApplication = createAction('@applications/CLEAR_CURRENT_APPLICATION')<void>();
