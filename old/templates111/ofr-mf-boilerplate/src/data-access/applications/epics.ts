import type { IApplicationsState } from './reducer';
import type { Epic } from 'redux-observable';
import type { IServices } from '@services';
import type { ApplicationsActionsType } from '.';

import { getApplicationByIdAsync, getApplicationsAsync, createApplicationAsync } from './actions';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

export const getApplicationByIdEpic: Epic<
  ApplicationsActionsType,
  ApplicationsActionsType,
  IApplicationsState,
  IServices
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(getApplicationByIdAsync.request)),
    switchMap((action) =>
      from(
        api.applications.getApplicationById(action.payload.id, action.payload.enrichData).then(({ data }) => data),
      ).pipe(
        map(getApplicationByIdAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getApplicationByIdAsync.failure(err));
        }),
      ),
    ),
  );

export const getApplicationsEpic: Epic<
  ApplicationsActionsType,
  ApplicationsActionsType,
  IApplicationsState,
  IServices
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(getApplicationsAsync.request)),
    switchMap(() =>
      from(api.applications.getApplications().then(({ data }) => data)).pipe(
        map(getApplicationsAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getApplicationsAsync.failure(err));
        }),
      ),
    ),
  );

export const createApplicationEpic: Epic<
  ApplicationsActionsType,
  ApplicationsActionsType,
  IApplicationsState,
  IServices
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(createApplicationAsync.request)),
    switchMap((action) => {
      console.log('createApplicationAction', action);

      return from(api.applications.createApplication(action.payload).then(({ data }) => data)).pipe(
        map(createApplicationAsync.success),
        catchError((err) => {
          console.error(err);
          return of(createApplicationAsync.failure(err));
        }),
      );
    }),
  );
