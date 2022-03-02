import type { IComment, PayloadHelper } from '@interfaces';
import type { CommentsActionsType } from '.';

import { addCommentAsync, clearComments, getCommentsByApplicationIdAsync } from './actions';
import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

export interface ICommentsDataState {
  data: Array<IComment>;
  isLoading?: boolean;
  isAdding?: boolean;
  lastError: Record<string, any | never> | null;
}

export interface ICommentsState {
  comments: ICommentsDataState;
}

const initialState: ICommentsState = {
  comments: {
    data: [],
    isLoading: false,
    isAdding: false,
    lastError: null,
  },
};

export const reducer = combineReducers<ICommentsState, CommentsActionsType>({
  comments: createReducer<ICommentsDataState, CommentsActionsType>(initialState.comments)
    .handleAction([addCommentAsync.request], (state) => ({
      ...state,
      isAdding: true,
    }))
    .handleAction(
      [addCommentAsync.success],
      (state, action: PayloadHelper<typeof addCommentAsync.success, IComment>) => ({
        ...state,
        data: [...state.data, action.payload],
        isAdding: false,
      }),
    )
    .handleAction([addCommentAsync.failure], (state, action) => ({
      ...initialState.comments,
      lastError: action.payload,
    }))
    .handleAction([getCommentsByApplicationIdAsync.request], (state) => ({
      ...state,
      isLoading: true,
    }))
    .handleAction(
      [getCommentsByApplicationIdAsync.success],
      (state, action: PayloadHelper<typeof getCommentsByApplicationIdAsync.success, Array<IComment>>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }),
    )
    .handleAction([getCommentsByApplicationIdAsync.failure], (state, action) => ({
      ...initialState.comments,
      lastError: action.payload,
    }))
    .handleAction([clearComments], () => initialState.comments),
});
