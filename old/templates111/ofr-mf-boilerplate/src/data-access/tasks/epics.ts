import type { ITasksState } from './reducer';
import type { Epic } from 'redux-observable';
import type { IServices } from '@services';
import type { TasksActionsType } from '.';

import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { assignExecutorToTaskAsync, getTaskByIdAsync, getTasksAsync, resetExecutorInTaskAsync } from './actions';

export const assignExecutorToTaskEpic: Epic<TasksActionsType, TasksActionsType, ITasksState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(assignExecutorToTaskAsync.request)),
    switchMap((action) =>
      from(api.task.assignTask(action.payload.id, action.payload.userId).then(({ data }) => data)).pipe(
        map(assignExecutorToTaskAsync.success),
        catchError((err) => {
          console.error(err);
          return of(assignExecutorToTaskAsync.failure(err));
        }),
      ),
    ),
  );

export const resetExecutorInTaskEpic: Epic<TasksActionsType, TasksActionsType, ITasksState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(resetExecutorInTaskAsync.request)),
    switchMap((action) =>
      from(api.task.resetTask(action.payload.id).then(({ data }) => data)).pipe(
        map(resetExecutorInTaskAsync.success),
        catchError((err) => {
          console.error(err);
          return of(resetExecutorInTaskAsync.failure(err));
        }),
      ),
    ),
  );

export const getTaskByIdEpic: Epic<TasksActionsType, TasksActionsType, ITasksState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(getTaskByIdAsync.request)),
    switchMap((action) =>
      from(api.task.getTaskById(action.payload.id).then(({ data }) => data)).pipe(
        map(getTaskByIdAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getTaskByIdAsync.failure(err));
        }),
      ),
    ),
  );

export const getTasksEpic: Epic<TasksActionsType, TasksActionsType, ITasksState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(getTasksAsync.request)),
    switchMap((action) =>
      from(api.task.getTasks(action.payload.filter, action.payload.applicationNumber).then(({ data }) => data)).pipe(
        map(getTasksAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getTasksAsync.failure(err));
        }),
      ),
    ),
  );
