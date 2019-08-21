package main

import (
	"fmt"
	"log"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/codepipeline"
)

func main() {
	name := os.Args[1]
	if name == "" {
		fmt.Fprintln(os.Stderr, "usage: pipes <pipeline name>")
	}

	sess := getSession()

	cp := codepipeline.New(sess)

	out, err := cp.GetPipelineState(&codepipeline.GetPipelineStateInput{
		Name: aws.String(name),
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, st := range out.StageStates {
		fmt.Printf("%s: %s\n", *st.StageName, *st.LatestExecution.Status)
	}
}

func getSession() *session.Session {
	return session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
		Config:            *aws.NewConfig().WithCredentialsChainVerboseErrors(true),
	}))
}
