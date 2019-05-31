import files from './files.json';

const initialState = files;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
