import { ApplicationsActions } from '@data-access/applications';
import { AccountsActions } from '@data-access/accounts';
import { CommentsActions } from '@data-access/comments';
import { TasksActions } from '@data-access/tasks';

export const rootActions = {
  applications: ApplicationsActions,
  accounts: AccountsActions,
  comments: CommentsActions,
  tasks: TasksActions,
};
