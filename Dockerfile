FROM golang:1.13 AS builder

WORKDIR /app

COPY go.mod go.mod
COPY go.sum go.sum

RUN go mod download

COPY main.go main.go

RUN go build

FROM gcr.io/distroless/base

COPY --from=builder /app/pipes /bin/pipes

CMD ["/bin/pipes"]
