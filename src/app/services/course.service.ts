import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private readonly baseService:BaseService) { }

  getCourseList():Observable<any>{
    return this.baseService.get("/api/getCourseList");
  }

  createCourse(course:Course):Observable<any>{
    return this.baseService.post("/api/createCourse",course);
  }
}

export class Course {
  courseId!: number;
  name!: string;
  region!: string;
  institutionId!: number;
  startDate!: string;
  endDate!: string;
  createdBy!: string;
  updatedBy!: string;
  createdDate!: string;
  duration!: number;
  isActive!: number;
  desc!: string;
  canSelfEnroll!: number;
}