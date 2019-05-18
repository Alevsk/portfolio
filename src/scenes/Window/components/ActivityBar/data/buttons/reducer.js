import { faCopy, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { SELECT } from './actions';

const initialState = [
  { id: 'explorer', icon: faCopy, selected: true },
  { id: 'search', icon: faSearch },
  { id: 'github', icon: faGithub },
];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    case SELECT:
    	return state.map((button) => ({ ...button, selected: button.id === action.payload.id }));
		default:
			return state;
	}
}

export const getButtons = state => {
	return [...state];
}

export const getSelectedButton = state => {
  const selected = state.filter(button => button.selected);
	return selected.length > 0 ? selected[0] : null;
}
