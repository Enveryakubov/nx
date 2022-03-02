import type { AxiosPromise } from 'axios';

import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  IAssignTaskRequest,
  ICancelTaskRequest,
  ICompleteTaskRequest,
  ICreateTaskRequest,
  ICreateTaskResponseSuccess,
  IGetTaskByIdRequest,
  IGetTaskByIdResponseSuccess,
  IGetTasksRequest,
  IGetTasksResponseSuccess,
  IResetTaskRequest,
} from '@interfaces';

export const getTaskByIdAsync = createAsyncAction(
  '@applications/GET_TASK_BY_ID_REQUEST',
  '@applications/GET_TASK_BY_ID_SUCCESS',
  '@applications/GET_TASK_BY_ID_FAILURE',
)<IGetTaskByIdRequest, IGetTaskByIdResponseSuccess | AxiosPromise<IGetTaskByIdResponseSuccess>, unknown>();

export const assignExecutorToTaskAsync = createAsyncAction(
  '@applications/ASSIGN_EXECUTOR_TO_TASK_REQUEST',
  '@applications/ASSIGN_EXECUTOR_TO_TASK_SUCCESS',
  '@applications/ASSIGN_EXECUTOR_TO_TASK_FAILURE',
)<IAssignTaskRequest, unknown | AxiosPromise<unknown>, unknown>();

export const resetExecutorInTaskAsync = createAsyncAction(
  '@applications/RESET_EXECUTOR_IN_TASK_REQUEST',
  '@applications/RESET_EXECUTOR_IN_TASK_SUCCESS',
  '@applications/RESET_EXECUTOR_IN_TASK_FAILURE',
)<IResetTaskRequest, unknown | AxiosPromise<unknown>, unknown>();

export const completeTaskAsync = createAsyncAction(
  '@applications/COMPLETE_TASK_REQUEST',
  '@applications/COMPLETE_TASK_SUCCESS',
  '@applications/COMPLETE_TASK_FAILURE',
)<ICompleteTaskRequest, unknown | AxiosPromise<unknown>, unknown>();

export const cancelTaskAsync = createAsyncAction(
  '@applications/CANCEL_TASK_REQUEST',
  '@applications/CANCEL_TASK_SUCCESS',
  '@applications/CANCEL_TASK_FAILURE',
)<ICancelTaskRequest, unknown | AxiosPromise<unknown>, unknown>();

export const getTasksAsync = createAsyncAction(
  '@applications/GET_TASKS_REQUEST',
  '@applications/GET_TASKS_SUCCESS',
  '@applications/GET_TASKS_FAILURE',
)<IGetTasksRequest, IGetTasksResponseSuccess | AxiosPromise<IGetTasksResponseSuccess>, unknown>();

/**
 * Не должно используется на фронте
 * Описано только для примера
 * @deprecated
 */
export const createTaskAsync = createAsyncAction(
  '@applications/CREATE_TASK_REQUEST',
  '@applications/CREATE_TASK_SUCCESS',
  '@applications/CREATE_TASK_FAILURE',
)<ICreateTaskRequest, ICreateTaskResponseSuccess | AxiosPromise<ICreateTaskResponseSuccess>, unknown>();

export const clearTasks = createAction('@applications/CLEAR_TASKS')<void>();
