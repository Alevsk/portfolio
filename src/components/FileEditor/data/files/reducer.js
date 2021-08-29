import {
  SELECT,
  ADD,
  REMOVE
} from '../../../../actions/files/actions';
import files from './files';

const initialState = files

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let files = state;
      if (state.filter(file => file.id === action.payload.id).length === 0) {
        files = [...state, action.payload];
      }
      return files.map(file => ({
        ...file,
        selected: file.id === action.payload.id
      }));
    case REMOVE: {
      const openFiles = state.filter(file => file.id !== action.payload.id);
      return openFiles.map((file, index) => ({
        ...file,
        selected: (openFiles.length - 1) === index
      }));
    }
    case SELECT: {
      const openFiles = (action.initialState || state).map((file) => ({
        ...file,
        selected: file.id === action.payload.id
      }));
      const selectedFiles = openFiles.filter(file => file.selected)
      if (selectedFiles.length > 0) {
        return openFiles;
      }
      return state.map((file, index) => ({
        ...file,
        selected: (state.length - 1) === index
      }));
    }
    default:
      return state;
  }
};