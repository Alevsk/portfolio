import { SELECT, ADD, REMOVE } from '../../../../actions/files/actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
      let files = state;
      if(state.filter(file => file.id === action.payload.id).length === 0) {
        files = [...state, action.payload];
      }
      return files.map(file => ({ ...file, selected: file.id === action.payload.id }));
    case REMOVE:
      return state.filter(file => file.id !== action.payload.id);
    case SELECT:
    	return state.map((file) => ({ ...file, selected: file.id === action.payload.id }));
		default:
			return state;
	}
}

export const getOpenFiles = state => {
	return [...state];
}

export const getSelectedFile = state => {
  const selected = state.filter(file => file.selected);
	return selected.length > 0 ? selected[0] : null;
}
