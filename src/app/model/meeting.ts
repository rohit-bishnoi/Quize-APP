export class Meeting {
}

export interface GetMeetingRecordingsReq {
    meetingID:String;
    recordID?:String;
    state?:String;
    meta?:String;
}