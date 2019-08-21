// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPipeline = `query GetPipeline($id: ID!) {
  getPipeline(id: $id) {
    id
    name
    status
    stages {
      items {
        id
        name
        status
      }
      nextToken
    }
  }
}
`;
export const listPipelines = `query ListPipelines(
  $filter: ModelPipelineFilterInput
  $limit: Int
  $nextToken: String
) {
  listPipelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      stages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getStage = `query GetStage($id: ID!) {
  getStage(id: $id) {
    id
    name
    status
    blog {
      id
      name
      status
      stages {
        nextToken
      }
    }
    actions {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const listStages = `query ListStages(
  $filter: ModelStageFilterInput
  $limit: Int
  $nextToken: String
) {
  listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      blog {
        id
        name
        status
      }
      actions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAction = `query GetAction($id: ID!) {
  getAction(id: $id) {
    id
    status
    Stage {
      id
      name
      status
      blog {
        id
        name
        status
      }
      actions {
        nextToken
      }
    }
  }
}
`;
export const listActions = `query ListActions(
  $filter: ModelActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      Stage {
        id
        name
        status
      }
    }
    nextToken
  }
}
`;
