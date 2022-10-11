package main

import (
	"app.alevsk/project/models"
	pb "app.alevsk/project/stubs"
	"context"
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
		"other": []string{"Reverse Engineering", "Crypto/PKI/Authentication/authorization",
			"Product Anti-Abuse", "Monitoring/intrusion detection"},
	}
	return &pb.UserInfo{Username: user.Username, UserId: user.ID.Bytes()}, nil
}
