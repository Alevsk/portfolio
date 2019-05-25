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
  user.Description = "I'm a FullStack Engineer with passion for information security." +
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
  {
    id: 2,
    name: "talks.rb",
    language: 'ruby',
    content: `
require 'sinatra'

class TalksProjectService < Sinatra::Base
  get "/talks" do
    content_type :json
    {
      :motivation => 'I love speaking at conferences about the topics I care about, if you want me to give one of these talks or workshops at your conference, company or school, contact me. If you dont see a topic that fits your needs, contact me to talk since I am usually able to adapt or create content if requested in advance.',
      :note => 'Most of the talks and workshops are based on articles I published previously on my personal blog.',
      :language => 'The slides and material for the talks and workshops is available in English and Spanish.',
      :talks => [
        {
          :title => '10 things you should be doing if you care about security in your Tech Startup',
          :summary => 'Do you think about starting your own business? Do you want to launch a new app or service globally on the Internet? but are you aware about the external (and sometimes internal) threats?, in this talk you will learn about threats that can impact the security of your Startup and how to mitigate them.',
          :duration => '1 hr',
        },
        {
          :title => 'Getting a Software developer Job',
          :summary => 'This is a compilation of my experiences interviewing at several companies for the software developer role, we are going to learn what is the overall hiring process, what are the topics you need to study the most and finally how it is to work as a SWE.',
          :duration => '45 mins',
        },
        {
          :title => 'Introduction to Security Capture the Flag competitions',
          :summary => 'CTFs are a great way for people to explore IT security and to practice hacking in a safe and legal environment, in this talk I explain about the most common CTF categories and do a walkthrough over a real life web CTF challenge.',
          :duration => '1 hr',
        },
        {
          :title => 'BlockChain 101: theoretical implementation of a voting system',
          :summary => 'In this talk we explore the basic concepts of the blockchain technology, using Javascript, I showcase a basic implementation for a voting system, showing the pros, cons and potential flaws in this technology.',
          :duration => '45 mins',
        },
        {
          :title => 'OSINT (Open-source intelligence) 101',
          :summary => 'What is OSINT and how is currently being used in cybersecurity, this talk will cover how organizations use information that is free and and publicly available to get advantage in certain situations like when they want to hire someone or when they are under a cyberattack.',
          :duration => '45 mins',
        },
        {
          :title => 'OWASP Top 10, A brief introduction for software developers',
          :summary => 'This talk is recommended for Software Developers, in this talk we analyze the 10 most common application vulnerabilities, during the talk I show some examples on how to exploit and mitigate each one of these vulnerabilities.',
          :duration => '1 hr',
        },
        {
          :title => 'How to create secure Passwords and protect your online identity',
          :summary => 'password managers, data breaches, hardware authentication',
          :duration => '1 hr',
        },
      ],
      :workshops => [
        {
          :title => 'React 101',
          :tags => ['web development', 'frontend', 'javascript'],
          :summary => 'In this workshop you will learn how to create React based Web applications following the best practices in the industry, you will also learn about state management using redux and some other React tools.',
        },
        {
          :title => 'GraphQL 101',
          :tags => ['web development', 'backend', 'javascript', 'nodejs'],
          :summary => 'In this workshop you will learn the basics of GraphQL for creating beautiful and scalable apis with Nodejs, we explore the concepts of Schemas, Queries and Mutations and put everything together on a example application developed during the workshop.',
        },
        {
          :title => 'Docker 101',
          :tags => ['sysadmin', 'devops', 'linux', 'docker'],
          :summary => 'This is an introductory workshop about docker, the attendants will learn the basics about docker including: images, containers, volumes, networks and docker orchestration.',
        },
      ]
    }.to_json
  end
end
    `,
  },
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