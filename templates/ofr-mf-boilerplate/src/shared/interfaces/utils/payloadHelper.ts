import type { PayloadActionCreator } from 'typesafe-actions';

export interface PayloadHelper<TAction extends PayloadActionCreator<string, any>, CorrectType> {
  type: ReturnType<TAction>['type'];
  payload: Extract<ReturnType<TAction>['type'], CorrectType>;
}
