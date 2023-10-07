import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizModel, QuizQuestionModel, DirectionQuestionModel, TakeQuizModel, QuizResult } from '../model/quiz';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private bsTakeQuizObj$ = new BehaviorSubject<TakeQuizModel>(new TakeQuizModel());
  
  getTakeQuizObj$ = this.bsTakeQuizObj$.asObservable();
  
  setTakeQuizVal(obj:TakeQuizModel){
    this.bsTakeQuizObj$.next(obj);
  }

  private scoreCard$ = new BehaviorSubject<QuizResult>(new QuizResult());
  
  getScoreCard$ = this.scoreCard$.asObservable();
  
  setScoreCard(obj:QuizResult){
    this.scoreCard$.next(obj);
  }

  constructor(private readonly baseService:BaseService) { }

  getQuizList():Observable<any>{
    return this.baseService.get("quiz/getQuizList");
  }

  createQuiz(quizModel:QuizModel):Observable<any>{
    return this.baseService.post("quiz/createQuiz",quizModel);
  }

  updateQuiz(quizModel:QuizModel):Observable<any>{
    return this.baseService.put("quiz/updateQuiz",quizModel);
  }

  deleteQuiz(id:number):Observable<any>{
    return this.baseService.delete("quiz/deleteQuiz/"+id);
  }


  findById(id:number):Observable<any>{
    return this.baseService.get("quiz/findById/"+id);
  }
  // genenal Question Api services =================================================
  
  
  createGeneralQuestion(req:QuizQuestionModel):Observable<QuizQuestionModel>{
    return this.baseService.post("quiz/createQuizGeneralQuestion",req);
  }

  createAllGeneralQuestion(req:QuizQuestionModel[]):Observable<QuizQuestionModel[]>{
    return this.baseService.post("quiz/createAllQuizGeneralQuestion",req);
  }

  updateGeneralQuestion(req:QuizQuestionModel):Observable<QuizQuestionModel>{
    return this.baseService.put("quiz/updateQuizGeneralQuestion",req);
  }

  deleteGeneralQuestion(req:QuizQuestionModel):Observable<any>{
    return this.baseService.delete("quiz/deleteQuizGeneralQuestion",req);
  }

  getAllGeneralQuestion(quizId:number):Observable<any>{
    return this.baseService.get("quiz/getAllGeneralQuestion/"+quizId);
  }
  

  // Direction Question api services ===============================================


  createDirectionQuestList(list:DirectionQuestionModel[]):Observable<any[]>{
    return this.baseService.post("quiz/createDirectionQuestList",list);
  }

  
  createDirectionQuest(obj:DirectionQuestionModel):Observable<any>{
    return this.baseService.post("quiz/createDirectionQuest",obj);
  }

  getAllDirectionQuestionByQuizId(id:number):Observable<any[]>{
    return this.baseService.get("quiz/getAllDirectionQuestionByQuizId/"+id);
  }


  takeQuizCreate(obj:TakeQuizModel):Observable<any>{
    return this.baseService.post("takeQuiz/create",obj);
  }

  takeQuizUpdate(obj:TakeQuizModel):Observable<any>{
    return this.baseService.put("takeQuiz/update",obj);
  }

  takeQuizDeleteById(id:number):Observable<any>{
    return this.baseService.get("takeQuiz/delete/"+id);
  }

  takeQuizfindById(id:number | undefined):Observable<any>{
    return this.baseService.get("takeQuiz/findById/"+id);
  }


  findAllByUserid(userid:number):Observable<any>{
    return this.baseService.get("takeQuiz/findAllByUserid/"+userid);
  }


}

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private baseService:BaseService) { }

  create(req:QuizResult):Observable<QuizResult>{
    return this.baseService.post("quizResult/create",req);
  }

  deleteById(id:number):Observable<boolean>{
    return this.baseService.get("quizResult/deleteById/"+id);
  }

  findById(id:number):Observable<QuizResult>{
    return this.baseService.get("quizResult/findById/"+id);
  }

  findAllByUserId(userId:number):Observable<QuizResult[]>{
    return this.baseService.get("quizResult/findAllByUserId/"+userId);
  }
}
