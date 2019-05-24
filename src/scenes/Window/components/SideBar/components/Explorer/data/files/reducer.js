const initialState = [
  { id: 0, name: 'home.js' },
  { id: 1, name: 'skills.go' },
  { id: 2, name: 'talks.rb' },
  { id: 3, name: 'work.py' },
  { id: 4, name: 'contact.java' },
];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const getFiles = state => {
	return [...state];
}