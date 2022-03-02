import type { ICommentsState } from './reducer';
import type { Epic } from 'redux-observable';
import type { IServices } from '@services';
import type { CommentsActionsType } from '.';

import { addCommentAsync, getCommentsByApplicationIdAsync } from './actions';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

export const getCommentsByApplicationIdEpic: Epic<
  CommentsActionsType,
  CommentsActionsType,
  ICommentsState,
  IServices
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(getCommentsByApplicationIdAsync.request)),
    switchMap((action) =>
      from(api.comments.getComments(action.payload.id).then(({ data }) => data)).pipe(
        map(getCommentsByApplicationIdAsync.success),
        catchError((err) => {
          console.error(err);
          return of(getCommentsByApplicationIdAsync.failure(err));
        }),
      ),
    ),
  );

export const addCommentEpic: Epic<CommentsActionsType, CommentsActionsType, ICommentsState, IServices> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(addCommentAsync.request)),
    switchMap((action) =>
      from(api.comments.addComment(action.payload.id, action.payload.body).then(({ data }) => data)).pipe(
        map(addCommentAsync.success),
        catchError((err) => {
          console.error(err);
          return of(addCommentAsync.failure(err));
        }),
      ),
    ),
  );
