import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import { routerMiddleware } from 'connected-react-router';
import { composeEnhancers } from './utils';
import { RootAction, RootState } from 'Types';
import rootEpic from './root-epic';

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
  // IServices<ApiInterface>
>({
  dependencies: {
    // localStorage: LocalStorageService,
    // messages: Messages,
    // api: {
    //   auth: AuthApi,
    //   projects: ProjectsApi,
    //   users: UsersApi,
    //   forms: FormsApi,
    //   category: CategoryApi,
    // },
  },
});

const initialState = {};

const middlewares = [routerMiddleware(history), epicMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer(history), initialState, enhancer);

epicMiddleware.run(rootEpic as any);

export default store;
