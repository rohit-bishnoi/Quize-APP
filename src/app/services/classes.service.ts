import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private base:BaseService) { }

  createVideoSession(obj:ClassModel){
    return this.base.post("createVideoSession",obj);
  }

  updateVideoSession(obj:ClassModel){
   return  this.base.put("updateVideoSession",obj);
  }

  deleteVideoSession(obj:ClassModel){
    return this.base.post("deleteVideoSession",obj);
  }

  checkBatchAndFacultyDateConflict(obj:ClassModel){
    return this.base.post("checkBatchAndFacultyDateConflict",obj);
  }

  getVideoSessionList(){
    return this.base.get('getVideoSessionList');
  }
}

export class ClassModel{

  videoSessionId!: number;
  
  videoName!: string;

  courseId!: number;

  subjectId!: number;

  isMeetingCreated!: boolean;

  batchId!: number;

  hasScheduled!: boolean;

  meetingId!: number;

  monday!: boolean;

  tuesday!: boolean;

  wednesday!: boolean;

  thursday!: boolean;

  friday!: boolean;

  saturday!: boolean;

  sunday!: boolean;

  repeatEveryWeek!: boolean;

  noOfWeeks!: number;

  videoDesc!: string;

  createdBy!: string;

  instituteId!: number;

  facultyId!: number;

  startDate!: string;

  endDate!: string;

  startTime!: string;

  endTime!: string;

  videoState!: number;

  updatedBy!: string;

  createdDate!: string;

  updatedDate!: string;

   //CreateBBBReq meetingObj;
}
