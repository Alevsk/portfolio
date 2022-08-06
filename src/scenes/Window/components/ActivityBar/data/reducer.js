import { combineReducers } from "redux";

import { reducer as buttonsReducer } from "./buttons/reducer";

export const reducer = combineReducers({
  buttons: buttonsReducer,
});
