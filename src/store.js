import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as FileEditorReducer } from './components/FileEditor/reducer';


const appReducer = combineReducers({
	FileEditor: FileEditorReducer,
});

export default function configureStore() {
 return createStore(
    appReducer,
    applyMiddleware(thunk)
 );
}