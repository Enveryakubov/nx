import type { ITask, PayloadHelper, TaskFilter } from '@interfaces';
import type { TasksActionsType } from '.';

import {
  assignExecutorToTaskAsync,
  resetExecutorInTaskAsync,
  getTasksAsync,
  getTaskByIdAsync,
  createTaskAsync,
  clearTasks,
  cancelTaskAsync,
} from './actions';
import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

export interface ITasksDataState {
  data: Array<ITask>;
  isLoading?: boolean;
  filter?: TaskFilter;
  lastError: Record<string, any | never> | null;
}

export interface ICurrentTaskState {
  current?: ITask;
  isLoading?: boolean;
  lastError: Record<string, any | never> | null;
}

export interface ITasksState {
  tasks: ITasksDataState;
  currentTask: ICurrentTaskState;
}

const initialState: ITasksState = {
  tasks: {
    data: [],
    isLoading: false,
    filter: void 0,
    lastError: null,
  },
  currentTask: {
    current: void 0,
    isLoading: false,
    lastError: null,
  },
};

export const reducer = combineReducers<ITasksState, TasksActionsType>({
  tasks: createReducer<ITasksDataState, TasksActionsType>(initialState.tasks)
    .handleAction([getTasksAsync.request], (state) => ({
      ...state,
      isLoading: true,
    }))
    .handleAction(
      [getTasksAsync.success],
      (state, action: PayloadHelper<typeof getTasksAsync.success, Array<ITask>>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }),
    )
    .handleAction([getTasksAsync.failure], (state, action) => ({
      ...initialState.tasks,
      lastError: action.payload,
    })),

  currentTask: createReducer<ICurrentTaskState, TasksActionsType>(initialState.currentTask)
    .handleAction([getTaskByIdAsync.request], (state) => ({
      ...state,
      isLoading: true,
    }))
    .handleAction(
      [getTaskByIdAsync.success],
      (state, action: PayloadHelper<typeof getTaskByIdAsync.success, ITask>) => ({
        ...state,
        isLoading: false,
        current: action.payload,
      }),
    )
    .handleAction([getTaskByIdAsync.failure], (state, action) => ({
      ...initialState.currentTask,
      lastError: action.payload,
    })),
});
