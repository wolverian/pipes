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

	fmt.Println(*name)

	for _, st := range out.StageStates {
		fmt.Printf("[%s: %s]\n", *st.StageName, *st.LatestExecution.Status)
		for _, act := range st.ActionStates {
			fmt.Printf("[%s: %s] ", *act.ActionName, *act.LatestExecution.Status)
		}
		fmt.Println()
	}
}

func getSession() *session.Session {
	return session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
		Config:            *aws.NewConfig().WithCredentialsChainVerboseErrors(true),
	}))
}
