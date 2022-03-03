declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';

  export type Store = StateType<typeof import('./index').rootStore>;
  export type RootState = StateType<ReturnType<typeof import('./reducer').rootReducer>>;
  export type RootAction = ActionType<typeof import('./actions').rootActions>;
  export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}
