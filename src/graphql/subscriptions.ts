// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePipeline = `subscription OnCreatePipeline {
  onCreatePipeline {
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
export const onUpdatePipeline = `subscription OnUpdatePipeline {
  onUpdatePipeline {
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
export const onDeletePipeline = `subscription OnDeletePipeline {
  onDeletePipeline {
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
export const onCreateStage = `subscription OnCreateStage {
  onCreateStage {
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
export const onUpdateStage = `subscription OnUpdateStage {
  onUpdateStage {
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
export const onDeleteStage = `subscription OnDeleteStage {
  onDeleteStage {
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
export const onCreateAction = `subscription OnCreateAction {
  onCreateAction {
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
export const onUpdateAction = `subscription OnUpdateAction {
  onUpdateAction {
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
export const onDeleteAction = `subscription OnDeleteAction {
  onDeleteAction {
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
