import type { IAccountsState } from './reducer';

interface AccountsState {
  accounts: IAccountsState;
}

// общие селекторы
export const getAccountsState = (state: AccountsState) => state.accounts;

// селекторы текущей пользователя
export const getCurrentAccountState = (state: AccountsState) => getAccountsState(state).currentAccount;
export const isCurrentAccountLoading = (state: AccountsState) => getCurrentAccountState(state).isLoading;
export const getCurrentAccount = (state: AccountsState) => getCurrentAccountState(state).current;
export const getLastErrorOnCurrentAccount = (state: AccountsState) => getCurrentAccountState(state).lastError;

// селекторы всех пользователей
export const getAllAccountsState = (state: AccountsState) => getAccountsState(state).accounts;
export const isAccountsLoading = (state: AccountsState) => getAllAccountsState(state).isLoading;
export const getAccountsData = (state: AccountsState) => getAllAccountsState(state).data;
export const getLastErrorOnAccounts = (state: AccountsState) => getAllAccountsState(state).lastError;
