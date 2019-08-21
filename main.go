package main

import (
	"fmt"
	"io"
	"log"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/codepipeline"
	"github.com/gosuri/uilive"
)

const defaultPollInterval = 5 * time.Second

func main() {
	sess := getSession()

	cp := codepipeline.New(sess)

	out, err := cp.ListPipelines(&codepipeline.ListPipelinesInput{})
	if err != nil {
		log.Fatal(err)
	}

	w := uilive.New()
	w.Start()
	defer w.Stop()

	for {
		for _, p := range out.Pipelines {
			printPipelineState(w, cp, p.Name)
		}
		time.Sleep(defaultPollInterval)
	}
}

func printPipelineState(w io.Writer, cp *codepipeline.CodePipeline, name *string) {
	out, err := cp.GetPipelineState(&codepipeline.GetPipelineStateInput{
		Name: name,
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintln(w, *name)

	for _, st := range out.StageStates {
		fmt.Fprintf(w, "%s %s:\n", getStateDecoration(*st.LatestExecution.Status), *st.StageName)
		for _, act := range st.ActionStates {
			fmt.Fprintf(w, "\t %s %s\n", getStateDecoration(*act.LatestExecution.Status), *act.ActionName)
		}
		fmt.Fprintln(w)
	}
}

func getSession() *session.Session {
	return session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
		Config:            *aws.NewConfig().WithCredentialsChainVerboseErrors(true),
	}))
}

func getStateDecoration(status string) string {
	var state string
	switch status {
	case codepipeline.ActionExecutionStatusSucceeded:
		state = "✅"
	case codepipeline.ActionExecutionStatusFailed:
		state = "❌"
	case codepipeline.ActionExecutionStatusInProgress:
		state = "🏃‍♀️"
	default:
		return status
	}
	return state
}
