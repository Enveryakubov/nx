/* eslint-disable @typescript-eslint/no-explicit-any */
import { compose } from 'redux';

export const composeEnhancers: typeof compose =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
