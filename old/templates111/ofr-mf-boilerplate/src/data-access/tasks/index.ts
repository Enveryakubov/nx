import type { ActionType } from 'typesafe-actions';

import * as TasksActions from './actions';

export type TasksActionsType = ActionType<typeof TasksActions>;

export { reducer as TasksReducer } from './reducer';
export * as TasksSelectors from './selectors';
export * as TasksEpics from './epics';
export { TasksActions };
