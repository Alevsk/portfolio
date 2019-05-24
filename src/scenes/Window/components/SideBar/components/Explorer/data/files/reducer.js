const initialState = [
  {
    id: 0,
    name: 'welcome.js',
    content: `
const name = "Lenin Alevski Huerta Arias";

const title = ["Software Engineer", "FullStack Engineer"];

const location = "Guadalajara, Mexico";

const expertise = [
  "Distributed Systems",
  "System Architecture",
  "Information Security",
];

const interests = ["microservices", "docker", "aws", "gcloud", "kubernetes", "scalability"];
  `,
  },
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