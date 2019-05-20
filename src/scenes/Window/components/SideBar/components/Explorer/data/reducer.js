import { combineReducers } from 'redux';

import { reducer as sectionOpenEditorsReducer } from './sectionOpenEditors/reducer';

export const reducer = combineReducers({
	sectionOpenEditors: sectionOpenEditorsReducer,
});