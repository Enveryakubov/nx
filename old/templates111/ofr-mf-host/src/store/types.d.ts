declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';

  export type Store = StateType<typeof import('./index').default>;
  export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;
  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}
