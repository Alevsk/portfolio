require 'sinatra'

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