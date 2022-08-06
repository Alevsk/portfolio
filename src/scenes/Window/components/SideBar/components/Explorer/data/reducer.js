import { combineReducers } from "redux";

import { reducer as sectionOpenEditorsReducer } from "./sectionOpenEditors/reducer";
import { reducer as sectionOpenFileExplorer } from "./sectionOpenFileExplorer/reducer";
import { reducer as files } from "./files/reducer";

export const reducer = combineReducers({
  sectionOpenEditors: sectionOpenEditorsReducer,
  sectionOpenFileExplorer: sectionOpenFileExplorer,
  files: files,
});
