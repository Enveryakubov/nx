import type { Epic } from 'redux-observable';

import { ApplicationsEpics } from '@data-access/applications';
import { AccountsEpics } from '@data-access/accounts';
import { CommentsEpics } from '@data-access/comments';
import { TasksEpics } from '@data-access/tasks';
import { combineEpics } from 'redux-observable';

export const rootEpics = combineEpics(
  ...Object.values(ApplicationsEpics as Record<string, Epic>),
  ...Object.values(AccountsEpics as Record<string, Epic>),
  ...Object.values(CommentsEpics as Record<string, Epic>),
  ...Object.values(TasksEpics as Record<string, Epic>),
);
