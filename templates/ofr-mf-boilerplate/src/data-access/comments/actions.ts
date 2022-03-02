import type { AxiosPromise } from 'axios';

import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  IGetCommentsByApplicationIdRequest,
  IGetCommentsByApplicationIdResponseSuccess,
  IAddCommentRequest,
  IAddCommentResponseSuccess,
} from '@interfaces';

export const getCommentsByApplicationIdAsync = createAsyncAction(
  '@applications/GET_COMMENTS_BY_APPLICATION_ID_REQUEST',
  '@applications/GET_COMMENTS_BY_APPLICATION_ID_SUCCESS',
  '@applications/GET_COMMENTS_BY_APPLICATION_ID_FAILURE',
)<
  IGetCommentsByApplicationIdRequest,
  IGetCommentsByApplicationIdResponseSuccess | AxiosPromise<IGetCommentsByApplicationIdResponseSuccess>,
  unknown
>();

export const addCommentAsync = createAsyncAction(
  '@applications/ADD_COMMENT_REQUEST',
  '@applications/ADD_COMMENT_SUCCESS',
  '@applications/ADD_COMMENT_FAILURE',
)<IAddCommentRequest, IAddCommentResponseSuccess | AxiosPromise<IAddCommentResponseSuccess>, unknown>();

export const clearComments = createAction('@applications/CLEAR_COMMENTS')<void>();
