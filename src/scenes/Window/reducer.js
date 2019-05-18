import { combineReducers } from 'redux';

import { reducer as activityBarReducer } from './components/ActivityBar/reducer';

export const reducer = combineReducers({
	activityBar: activityBarReducer,
});