import type { ActionType } from 'typesafe-actions';

import * as ApplicationsActions from './actions';

export type ApplicationsActionsType = ActionType<typeof ApplicationsActions>;

export { reducer as ApplicationReducer } from './reducer';
export * as ApplicationsSelectors from './selectors';
export * as ApplicationsEpics from './epics';
export { ApplicationsActions };
