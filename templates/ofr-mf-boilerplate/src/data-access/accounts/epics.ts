import type { IAccountsState } from './reducer';
import type { Epic } from 'redux-observable';
import type { IServices } from '@services';
import type { AccountsActionsType } from '.';

import { addAttributesAsync, getAccountByIdAsync, getAccountsAsync } from './actions';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

export const getAccountByIdEpic: Epic<AccountsActionsType, AccountsActionsType, IAccountsState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(getAccountByIdAsync.request)),
    switchMap((action) =>
      from(
        api.account
          .getAccountById(
            action.payload.accountId,
            action.payload.includeAttributes,
            action.payload.includeGroups,
            action.payload.includeRoles,
          )
          .then(({ data }) => data),
      ).pipe(
        map(getAccountByIdAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getAccountByIdAsync.failure(err));
        }),
      ),
    ),
  );

export const getAccountsEpic: Epic<AccountsActionsType, AccountsActionsType, IAccountsState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(getAccountsAsync.request)),
    switchMap((action) =>
      from(
        api.account
          .getAccounts(
            action.payload.groupCode,
            action.payload.includeAttributes,
            action.payload.includeGroups,
            action.payload.includeRoles,
          )
          .then(({ data }) => data),
      ).pipe(
        map(getAccountsAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getAccountsAsync.failure(err));
        }),
      ),
    ),
  );

export const addAttributesEpic: Epic<AccountsActionsType, AccountsActionsType, IAccountsState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(addAttributesAsync.request)),
    switchMap((action) =>
      from(api.account.addAttributes(action.payload.accountId, action.payload.body).then(({ data }) => data)).pipe(
        map(addAttributesAsync.success),
        catchError((err) => {
          console.error(err);
          return of(addAttributesAsync.failure(err));
        }),
      ),
    ),
  );
