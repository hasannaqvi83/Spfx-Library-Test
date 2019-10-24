export interface _PlannerUser {
    displayName?: any;
    id: string;
}

export interface _PlannerUserObject {
    user: _PlannerUser;
}

export interface _PlannerTask {
    '@odata.etag': string;
    planId: string;
    bucketId: string;
    title: string;
    orderHint: string;
    assigneePriority: string;
    percentComplete: number;
    startDateTime?: any;
    createdDateTime: Date;
    dueDateTime?: string;
    hasDescription: boolean;
    previewType: string;
    completedDateTime?: Date;
    completedBy: _PlannerUserObject;
    referenceCount: number;
    checklistItemCount: number;
    activeChecklistItemCount: number;
    conversationThreadId?: any;
    id: string;
    createdBy: _PlannerUserObject;
    appliedCategories: any;
    assignments: any;
    status: _TaskStatus;
    statusAsString: string;
    assignedBy?: _PlannerUser;
}

export interface _PlannerTasks {
    '@odata.context': string;
    '@odata.count': number;
    value: _PlannerTask[];
}


export enum _TaskStatus {
    Unknown = 0, NotStarted = 1, InProgress = 2, Completed = 3
}
