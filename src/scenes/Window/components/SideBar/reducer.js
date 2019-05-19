import { combineReducers } from 'redux';

import { reducer as explorerReducer } from './components/Explorer/reducer';
import { reducer as searchReducer } from './components/Search/reducer';
import { reducer as githubReducer } from './components/Github/reducer';

export const reducer = combineReducers({
  explorer: explorerReducer,
  search: searchReducer,
  github: githubReducer,
});