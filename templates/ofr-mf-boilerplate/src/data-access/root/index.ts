import type { RootAction, RootState } from 'Types';
import type { IServices } from '@services';

import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers } from './utils';
import { rootReducer } from './reducer';
import { rootEpics } from './epics';
import { API } from '@services';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, IServices>({
  dependencies: {
    api: API,
  },
});

const initialState = {};

const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

const rootStore = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpics);

export { rootStore };
