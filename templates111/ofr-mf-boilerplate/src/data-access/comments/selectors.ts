import type { ICommentsState } from './reducer';

interface CommentsState {
  comments: ICommentsState;
}

// селекторы комментариев
export const getCommentsState = (state: CommentsState) => state.comments.comments;
export const isCommentsLoading = (state: CommentsState) => getCommentsState(state).isLoading;
export const isCommentAdding = (state: CommentsState) => getCommentsState(state).isAdding;
export const getCommentsData = (state: CommentsState) => getCommentsState(state).data;
export const getLastErrorOnComments = (state: CommentsState) => getCommentsState(state).lastError;
