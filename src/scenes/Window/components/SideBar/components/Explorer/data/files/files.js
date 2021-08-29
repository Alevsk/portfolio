export const files = [{
  id: 0,
  name: "welcome.js",
  icon: "file_type_js.svg",
  language: "javascript",
  content: `const personal = {
    name: "Lenin Alevski Huerta Arias",
    title: ["Security Software Engineer", "FullStack Engineer"],
    email: 'lenin@alevsk.com',
    education: [
      {
        school: "Tecnologico de Monterrey",
        website: "https://tec.mx/es/",
        degree: "BS in Computer Science",
        field: "Software Engineering & Application Security",
      },
    ],
    location: ["San Francisco, Bay Area, CA"]
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
      description: "Platform developer building distributed and highly scalable systems using a very interesting
        stack of technologies.",
    },
    {
      company: "Oracle",
      website: "https://www.oracle.com/",
      title: "Software Engineer",
      from: "March 2016",
      to: "October 2016",
      description: "As a member of the software engineering division I apply my knowledge of software architecture
        and information security to perform software development tasks associated with debugging, QA testing and
        security testing.",
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
}, {
  id: 1,
  name: "skills.go",
  icon: "file_type_go_gopher.svg",
  language: "go",
  content: `package main

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
    "technologies": []string{"RoR", "NodeJS", "GraphQL", "Django", "Flask", "Ruby", "React", "Redux", "Angular", "GRPC"},
    "databases":    []string{"Postgres", "MySql", "Redis", "Cassandra", "Scylladb", "SqlServer"},
    "cloud":        []string{"AWS", "Gcloud", "Kubernetes", "Docker"},
  }

  securityEngineer := map[string][]string{
    "penetrationTesting": []string{"Web", "Mobile", "Network"},
    "methodologies":      []string{"OWASP Testing Methodology"},
    "hardening":          []string{"Linux", "Windows", "OSX"},
    "other":              []string{"Reverse Engineering", "Crypto/PKI/Authentication/authorization",
      "Product Anti-Abuse", "Monitoring/intrusion detection"},
  }
  return &pb.UserInfo{Username: user.Username, UserId: user.ID.Bytes()}, nil
}
  `,
}, {
  id: 2,
  name: "talks.rb",
  icon: "file_type_ruby.svg",
  language: "ruby",
  content: `require 'sinatra'

class TalksProjectService < Sinatra::Base
  get "/talks" do
    content_type :json
    {
      :motivation => 'I love speaking at conferences about the topics I care about, if you want me to give one of
        these talks or workshops at your conference, company or school, contact me. If you dont see a topic that
        fits your needs, contact me to talk since I am usually able to adapt or create content if requested in
        advance.',
      :note => 'Most of the talks and workshops are based on articles I published previously on my personal blog.',
      :language => 'The slides and material for the talks and workshops are available in English and Spanish.',
      :talks => [
        {
          :title => '10 things you should be doing if you care about security in your Tech Startup',
          :summary => 'Do you think about starting your own business? Do you want to launch a new app or service
            globally on the Internet? but are you aware about the external (and sometimes internal) threats?,
            in this talk you will learn about threats that can impact the security of your Startup and how to
            mitigate them.',
          :duration => '1 hr',
        },
        {
          :title => 'Getting a Software developer Job',
          :summary => 'This is a compilation of my experiences interviewing at several companies for the software
            developer role, we are going to learn what is the overall hiring process, what are the topics you need
            to study the most and finally how it is to work as a SWE.',
          :duration => '45 mins',
        },
        {
          :title => 'Introduction to Security Capture the Flag competitions',
          :summary => 'CTFs are a great way for people to explore IT security and to practice hacking in a safe
            and legal environment, in this talk I explain about the most common CTF categories and do a
            walkthrough over a real life web CTF challenge.',
          :duration => '1 hr',
        },
        {
          :title => 'BlockChain 101: theoretical implementation of a voting system',
          :summary => 'In this talk we explore the basic concepts of the blockchain technology, using Javascript,
            I showcase a basic implementation for a voting system, showing the pros, cons and potential flaws in
            this technology.',
          :duration => '45 mins',
        },
        {
          :title => 'OSINT (Open-source intelligence) 101',
          :summary => 'What is OSINT and how is currently being used in cybersecurity, this talk will cover how
            organizations use information that is free and and publicly available to get advantage in certain
            situations like when they want to hire someone or when they are under a cyberattack.',
          :duration => '45 mins',
        },
        {
          :title => 'OWASP Top 10, A brief introduction for software developers',
          :summary => 'This talk is recommended for Software Developers, in this talk we analyze the 10 most
            common application vulnerabilities, during the talk I show some examples on how to exploit and
            mitigate each one of these vulnerabilities.',
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
          :summary => 'In this workshop you will learn how to create React based Web applications following the
            best practices in the industry, you will also learn about state management using redux and some other
            React tools.',
        },
        {
          :title => 'GraphQL 101',
          :tags => ['web development', 'backend', 'javascript', 'nodejs'],
          :summary => 'In this workshop you will learn the basics of GraphQL for creating beautiful and scalable
            apis with Nodejs, we explore the concepts of Schemas, Queries and Mutations and put everything
            together on a example application developed during the workshop.',
        },
        {
          :title => 'Docker 101',
          :tags => ['sysadmin', 'devops', 'linux', 'docker'],
          :summary => 'This is an introductory workshop about docker, the attendants will learn the basics about
          docker including: images, containers, volumes, networks and docker orchestration.',
        },
      ]
    }.to_json
  end
end
  `,
}, {
  id: 3,
  name: "work.py",
  icon: "file_type_python.svg",
  language: "python",
  content: `from quart import render_template, request, current_app
from app.work import bp

@bp.route('/', methods=['GET'])
async def index():
  # Let's Work together
  # Send me an email to lenin@alevsk.com
  core_skills = [
    'Effective communication in both Spanish and English',
    'System Architecture',
    'Object-oriented Analysis and Design',
    'Refactoring',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Web Application Security'
    'UNIX-based System Administration',
  ]

  emerging_skills = [
    'Public speaking',
    'Reverse Engineering',
    'Malware analysis',
    'Monitoring/intrusion detection',
    'Hardware/firmware/TPM security',
  ]

  freelance_work = [
    'Web Penetration Testing',
    'Mobile Penetration Testing',
    'Security Code Review',
    'Application and Environment Hardening',
    'Web Development for Short and Mid Size Projects',
    'Hiring Process Consulting',
    'Development Process Consulting',
  ]
  return await render_template('index.html',
    core_skills=core_skills,
    emerging_skills=emerging_skills,
    freelance_work=freelance_work
  )  
  `,
}, {
  id: 4,
  name: "public_key.asc",
  icon: "file_type_binary.svg",
  language: "fix",
  content: `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
QYS47fKJYfWH6LdEHg==
=0/UU
-----END PGP PUBLIC KEY BLOCK-----
  `,
}, {
  id: 5,
  name: "Dockerfile",
  icon: "file_type_docker.svg",
  language: "dockerfile",
  content: `############################
# Do you like my website?
# You can have it :)!
# Download the source code directly from the github repository
############################

FROM scratch

MAINTAINER Lenin Alevski <lenin@alevsk.com>

EXPOSE 1337

COPY migrations migrations
COPY templates templates
COPY /download    .

CMD ["/download", "--url", "https://github.com/Alevsk/portfolio"]  
`,
}]

export default files;