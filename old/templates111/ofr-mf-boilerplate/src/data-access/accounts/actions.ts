import type { AxiosPromise } from 'axios';

import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  IGetAccountByIdRequest,
  IGetAccountByIdResponseSuccess,
  IAddAttributesRequest,
  IGetAccountsRequest,
  IGetAccountsResponseSuccess,
} from '@interfaces';

export const getAccountByIdAsync = createAsyncAction(
  '@applications/GET_ACCOUNT_BY_ID_REQUEST',
  '@applications/GET_ACCOUNT_BY_ID_SUCCESS',
  '@applications/GET_ACCOUNT_BY_ID_FAILURE',
)<IGetAccountByIdRequest, IGetAccountByIdResponseSuccess | AxiosPromise<IGetAccountByIdResponseSuccess>, unknown>();

export const getAccountsAsync = createAsyncAction(
  '@applications/GET_ACCOUNTS_REQUEST',
  '@applications/GET_ACCOUNTS_SUCCESS',
  '@applications/GET_ACCOUNTS_FAILURE',
)<IGetAccountsRequest, IGetAccountsResponseSuccess | AxiosPromise<IGetAccountsResponseSuccess>, unknown>();

export const addAttributesAsync = createAsyncAction(
  '@applications/ADD_ACCOUNT_ATTRIBUTES_REQUEST',
  '@applications/ADD_ACCOUNT_ATTRIBUTES_SUCCESS',
  '@applications/ADD_ACCOUNT_ATTRIBUTES_FAILURE',
)<IAddAttributesRequest, unknown | AxiosPromise<unknown>, unknown>();
