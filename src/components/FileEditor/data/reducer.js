import { combineReducers } from 'redux';

import { reducer as filesReducer } from './files/reducer';

export const reducer = combineReducers({
	files: filesReducer,
});