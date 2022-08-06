import { combineReducers } from "redux";

import { reducer as activityBarReducer } from "./components/ActivityBar/reducer";
import { reducer as sideBarReducer } from "./components/SideBar/reducer";

export const reducer = combineReducers({
  activityBar: activityBarReducer,
  sideBar: sideBarReducer,
});
