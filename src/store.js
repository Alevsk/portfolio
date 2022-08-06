import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as FileEditorReducer } from "./components/FileEditor/reducer";
import { reducer as WindowReducer } from "./scenes/Window/reducer";

const appReducer = combineReducers({
  FileEditor: FileEditorReducer,
  Window: WindowReducer,
});

export default function configureStore() {
  return createStore(appReducer, applyMiddleware(thunk));
}
