import { combineReducers } from 'redux';

import { reducer as explorerReducer } from './components/Explorer/reducer';

export const reducer = combineReducers({
  explorer: explorerReducer,
});