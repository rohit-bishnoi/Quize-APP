export class Calendar {
}

export class TimeSheetModel{
      
    tsId!: string;

    videoSessionId!: number;

    videoName!: string;

    url!: string;

    enableJoin!: boolean;

    moderatorUrl!: string;

    studenttorUrl!: string;

    instituteId!: number;

    facultyId!: number;

    meetingStarted!: boolean;

    batchId!: number;

    recorded!: boolean;

    meetingCancelled!: boolean;

    startDate!: string;

    startTime!: string;

    endTime!: string;

    createdDate!: string;

    updatedDate!: string;

    createdBy!: string;

    updatedBy!: string;
} 

export interface TimeSheetReq {
     dates: String[];
     instituteId?: number;
     facultyId?: number;
}
