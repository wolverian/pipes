package main

import (
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/codepipeline"
)

func main() {
	sess := getSession()

	cp := codepipeline.New(sess)

	out, err := cp.ListPipelines(&codepipeline.ListPipelinesInput{})
	if err != nil {
		log.Fatal(err)
	}

	for _, p := range out.Pipelines {
		printPipelineState(cp, p.Name)
	}
}

func printPipelineState(cp *codepipeline.CodePipeline, name *string) {
	out, err := cp.GetPipelineState(&codepipeline.GetPipelineStateInput{
		Name: name,
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, st := range out.StageStates {
		fmt.Printf("[%s] %s: %s\n", *name, *st.StageName, *st.LatestExecution.Status)
		// todo(@wolverian): add actions here
	}
}

func getSession() *session.Session {
	return session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
		Config:            *aws.NewConfig().WithCredentialsChainVerboseErrors(true),
	}))
}
