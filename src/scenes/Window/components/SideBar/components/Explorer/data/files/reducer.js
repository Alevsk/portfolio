// import files from './files.json';

// const initialState = files;
const initialState = [
  {
    id: 0,
    name: 'welcome.js',
    language: 'javascript',
    content: `
const personal = {
  name: "Lenin Alevski Huerta Arias",
  title: ["Software Engineer", "FullStack Engineer"],
  education: [
    {
      school: "Tecnologico de Monterrey",
      website: "https://tec.mx/es/",
      degree: "BS in Computer Science",
      field: "Software Engineering",
    },
  ],
  location: ["Guadalajara, Mexico", "San Francisco, California"]
};

const expertise = ["Software development", "Distributed Systems", "System Architecture", "Information Security"];

const interests = ["Cybersecurity", "Microservices", "Cloud", "Scalability"];

const experience = [
  {
    company: "OneLogin",
    website: "https://www.onelogin.com/",
    title: "Software Engineer",
    from: "January 2019",
    to: "Present",
    description: "Distributed systems Engineer specialized in application security.",
  },
  {
    company: "Freeagent CRM",
    website: "https://freeagentcrm.com/",
    title: "Senior Software Engineer",
    from: "November 2016",
    to: "December 2018",
    description: "Platform developer building distributed and highly scalable systems using a very interesting stack of technologies.",
  },
  {
    company: "Oracle",
    website: "https://www.oracle.com/",
    title: "Software Engineer",
    from: "March 2016",
    to: "October 2016",
    description: "As a member of the software engineering division I apply my knowledge of software architecture and information security to perform software development tasks associated with debugging, QA testing and security testing.",
  },
  {
    company: "Websec Mexico",
    website: "https://www.websec.mx/",
    title: "Software Engineer",
    from: "May 2012",
    to: "March 2016",
    description: "Cybersecurity consultant focused on code reviews, web and network penetration testing.",
  },
];
  `,
  },
  {
    id: 1,
    name: "skills.go",
    language: 'golang',
    content: `
package main

import (
  "context"
  "app.alevsk/project/models"
  pb "app.alevsk/project/stubs"
)

type server struct{}

func (s *server) WhoAmI(ctx context.Context, in *pb.EmptyRequest) (*pb.UserInfo, error) {
  var user models.User

  user.ID = "0xdeadbeef"
  user.Username = "@alevsk"
  user.Name = "Lenin Alevski"
  user.Description = "I'm a full stack developer with passion for information security." +
    "I'm a generalist, over the past years I have been working with several technologies in many projects."

  softwareEngineer := map[string][]string{
    "languages":    []string{"Javascript", "Java", "Golang", "Python", "Ruby", "C#"},
    "technologies": []string{"RoR", "NodeJS", "GraphQL", "Django", "Flask", "Ruby", "React", "Angular", "GRPC"},
    "databases":    []string{"Postgres", "MySql", "Redis", "Cassandra", "Scylladb", "SqlServer"},
    "cloud":        []string{"AWS", "Gcloud", "Kubernetes", "Docker"},
  }

  securityEngineer := map[string][]string{
    "penetrationTesting": []string{"Web", "Mobile", "Network"},
    "methodologies":      []string{"OWASP Testing Methodology"},
    "hardening":          []string{"Linux", "Windows", "OSX"},
    "other":              []string{"Reverse Engineering", "Crypto/PKI/Authentication/authorization", "Product Anti-Abuse", "Monitoring/intrusion detection"},
  }
  return &pb.UserInfo{Username: user.Username, UserId: user.ID.Bytes()}, nil
}
    
    `,
  },
  { id: 2, name: "talks.rb" },
  { id: 3, name: "work.py" },
  { id: 4, name: "contact.java" },
];
// console.log(JSON.stringify(initialState))
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const getFiles = state => {
	return [...state];
}