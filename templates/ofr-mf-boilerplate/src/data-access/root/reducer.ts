import { ApplicationReducer } from '@data-access/applications';
import { AccountsReducer } from '@data-access/accounts';
import { CommentsReducer } from '@data-access/comments';
import { TasksReducer } from '@data-access/tasks';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  applications: ApplicationReducer,
  accounts: AccountsReducer,
  comments: CommentsReducer,
  tasks: TasksReducer,
});
