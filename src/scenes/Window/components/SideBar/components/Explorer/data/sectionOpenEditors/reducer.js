import { TOGGLE } from './actions';

const initialState = {
  display: true,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    case TOGGLE:
    	return {
        ...state,
        display: !state.display,
      }
		default:
			return state;
	}
}