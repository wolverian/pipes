// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPipeline = `mutation CreatePipeline($input: CreatePipelineInput!) {
  createPipeline(input: $input) {
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
export const updatePipeline = `mutation UpdatePipeline($input: UpdatePipelineInput!) {
  updatePipeline(input: $input) {
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
export const deletePipeline = `mutation DeletePipeline($input: DeletePipelineInput!) {
  deletePipeline(input: $input) {
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
export const createStage = `mutation CreateStage($input: CreateStageInput!) {
  createStage(input: $input) {
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
export const updateStage = `mutation UpdateStage($input: UpdateStageInput!) {
  updateStage(input: $input) {
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
export const deleteStage = `mutation DeleteStage($input: DeleteStageInput!) {
  deleteStage(input: $input) {
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
export const createAction = `mutation CreateAction($input: CreateActionInput!) {
  createAction(input: $input) {
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
export const updateAction = `mutation UpdateAction($input: UpdateActionInput!) {
  updateAction(input: $input) {
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
export const deleteAction = `mutation DeleteAction($input: DeleteActionInput!) {
  deleteAction(input: $input) {
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
