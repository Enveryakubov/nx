import type { IAccount, PayloadHelper } from '@interfaces';
import type { AccountsActionsType } from '.';

import { addAttributesAsync, getAccountByIdAsync, getAccountsAsync } from './actions';
import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

export interface IAccountsDataState {
  data: Array<IAccount>;
  isLoading?: boolean;
  lastError: Record<string, any | never> | null;
}

export interface ICurrentAccountState {
  current?: IAccount;
  isLoading?: boolean;
  lastError: Record<string, any | never> | null;
}

export interface IAccountsState {
  accounts: IAccountsDataState;
  currentAccount: ICurrentAccountState;
}

const initialState: IAccountsState = {
  accounts: {
    data: [],
    isLoading: false,
    lastError: null,
  },
  currentAccount: {
    current: void 0,
    isLoading: false,
    lastError: null,
  },
};

export const reducer = combineReducers<IAccountsState, AccountsActionsType>({
  accounts: createReducer<IAccountsDataState, AccountsActionsType>(initialState.accounts)
    .handleAction([getAccountsAsync.request], (state) => ({
      ...state,
      isLoading: true,
    }))
    .handleAction(
      [getAccountsAsync.success],
      (state, action: PayloadHelper<typeof getAccountsAsync.success, Array<IAccount>>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }),
    )
    .handleAction([getAccountsAsync.failure], (state, action) => ({
      ...initialState.accounts,
      lastError: action.payload,
    })),
  currentAccount: createReducer<ICurrentAccountState, AccountsActionsType>(initialState.currentAccount)
    .handleAction([getAccountByIdAsync.request], (state, action) => ({
      ...state,
      isLoading: true,
    }))
    .handleAction(
      [getAccountByIdAsync.success],
      (state, action: PayloadHelper<typeof getAccountByIdAsync.success, IAccount>) => ({
        ...state,
        isLoading: false,
        current: action.payload,
      }),
    )
    .handleAction([getAccountByIdAsync.failure], (state, action) => ({
      ...initialState.currentAccount,
      lastError: action.payload,
    })),
});
