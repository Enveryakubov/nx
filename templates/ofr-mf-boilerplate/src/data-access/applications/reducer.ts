import type { IApplication, IShortAppication, PayloadHelper } from '@interfaces';
import type { ApplicationsActionsType } from '.';

import { clearCurrentApplication, getApplicationByIdAsync, getApplicationsAsync } from './actions';
import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

export interface ICurrentApplicationState {
  current?: IApplication;
  isLoading: boolean;
  lastError: Record<string, never | any> | null;
}

export interface IAllApplicationsState {
  data: Array<IShortAppication>;
  isLoading: boolean;
  lastError: Record<string, never | any> | null;
}

export interface IApplicationsState {
  currentApplication: ICurrentApplicationState;
  applications: IAllApplicationsState;
}

const initialState: IApplicationsState = {
  applications: {
    data: [],
    isLoading: false,
    lastError: null,
  },
  currentApplication: {
    current: void 0,
    isLoading: false,
    lastError: null,
  },
};

export const reducer = combineReducers<IApplicationsState, ApplicationsActionsType>({
  applications: createReducer<IAllApplicationsState, ApplicationsActionsType>(initialState.applications)
    .handleAction([getApplicationsAsync.request], (state) => ({ ...state, isLoading: true }))
    .handleAction(
      [getApplicationsAsync.success],
      (state, action: PayloadHelper<typeof getApplicationsAsync.success, Array<IShortAppication>>) => ({
        ...state,
        data: action.payload,
        isLoading: false,
      }),
    )
    .handleAction([getApplicationsAsync.failure], (state, action) => ({
      ...initialState.applications,
      lastError: action.payload,
    })),
  currentApplication: createReducer<ICurrentApplicationState, ApplicationsActionsType>(initialState.currentApplication)
    .handleAction([getApplicationByIdAsync.request], (state) => ({ ...state, isLoading: true }))
    .handleAction(
      [getApplicationByIdAsync.success],
      (state, action: PayloadHelper<typeof getApplicationByIdAsync.success, IApplication>) => ({
        ...state,
        current: action.payload,
        isLoading: false,
      }),
    )
    .handleAction([getApplicationByIdAsync.failure], (state, action) => ({
      ...initialState.currentApplication,
      lastError: action.payload,
    }))
    .handleAction([clearCurrentApplication], () => initialState.currentApplication),
});
