import type { ActionType } from 'typesafe-actions';

import * as CommentsActions from './actions';

export type CommentsActionsType = ActionType<typeof CommentsActions>;

export { reducer as CommentsReducer } from './reducer';
export * as CommentsSelectors from './selectors';
export * as CommentsEpics from './epics';
export { CommentsActions };
