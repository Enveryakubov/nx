import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import programReducer from '../data-access/products/reducer';
import userReducer from '../data-access/user/reducer';

const RootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    products: programReducer,
    user: userReducer,
  });

export default RootReducer;
