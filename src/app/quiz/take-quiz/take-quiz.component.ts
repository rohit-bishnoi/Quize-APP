import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of, distinctUntilChanged, interval } from 'rxjs';
import { QuizQuestionModel, QuizResult, TakeQuizModel, UserQuestionAnswer } from 'src/app/model/quiz';
// import { UserModel } from 'src/app/model/secure';
// import { AuthService } from 'src/app/services/auth.service';
// import { LocalService } from 'src/app/services/local.service';
import { QuizResultService, QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {


  // user!: UserModel;

  takeQuizObj:TakeQuizModel = new TakeQuizModel();
  userQuizList$!: Observable<Map<number, UserQuestionAnswer>>;

  pIndex:number = 0;

  qlength!: number;

  nextBtn:boolean = true;

  prevBtn:boolean = false;

  addProcessQuestIndex = 0;
  quizTimeCounter!: Subscription;
  quizTimeInSec:number = 0;
  presentTime:String = "";
  countTimer:any;

  isFinished:boolean = false;

  constructor(private quizService:QuizService,private readonly qrService:QuizResultService,
    private activeRoute:ActivatedRoute,
    // private readonly localService:LocalService
    ) { }

  ngOnInit(): void {
    // this.user = this.localService.getData('auth')?.user as UserModel;

    this.activeRoute.params.subscribe( parms =>{
      console.log(parms['quizId']);
      this.takeQuizObj.quizId = parms['quizId'];

      // this.takeQuizObj.userId = this.user.userId;

      this.quizService.takeQuizCreate(this.takeQuizObj).subscribe( (res:TakeQuizModel) =>{
        this.quizService.takeQuizfindById(res.quizId).subscribe( (nestres:any) =>{
          Object.assign(this.takeQuizObj,nestres);

          this.takeQuizObj.getDqIdList();
          this.takeQuizObj.getGqIdList();
          this.addAllDq();
          this.takeQuizObj.pIndex = this.pIndex;
          this.userQuizList$  =  of(this.takeQuizObj.userGqMap);
          this.quizService.setTakeQuizVal(this.takeQuizObj);
          this.qlength = this.takeQuizObj.userGqMap.size;
          this.presentQuestion();
          this.getquizDetails();
        });
      });
    });
    this.quizService.getTakeQuizObj$.subscribe( obj =>{
      if(obj){
        this.takeQuizObj = obj;
        this.userQuizList$  =  of(obj.userGqMap);
      }
    });

  }

  getquizDetails(){
    this.quizService.findById(this.takeQuizObj.quizId!).subscribe( quizModel =>{
      this.setQuizTimeInterval(quizModel.time);
    });
  }

  addAllDq(){
    this.takeQuizObj.dqList!.forEach(dq => {
      dq.questionEntitySet!.forEach( q =>{
        const obj = new UserQuestionAnswer();
        obj.questObj = q;
        obj.dqObj = dq;
        obj.qOrderIndex = this.addProcessQuestIndex;
        this.takeQuizObj.userGqMap.set(this.addProcessQuestIndex,obj);
        this.addProcessQuestIndex = this.addProcessQuestIndex+1;
      });

    });
    this.addAllGq();
  }

  addAllGq(){
    this.takeQuizObj?.gqList!.forEach((q: QuizQuestionModel | undefined,i: any) =>{
      const obj = new UserQuestionAnswer();
      obj.questObj = q;
      obj.qOrderIndex = this.addProcessQuestIndex;
      this.takeQuizObj.userGqMap.set(this.addProcessQuestIndex,obj);
      this.addProcessQuestIndex = this.addProcessQuestIndex+1;
    });

  }

  finishQuiz(){
    this.quizService.getTakeQuizObj$.pipe(distinctUntilChanged()).subscribe( (obj:TakeQuizModel) => {

        let quizResult = new QuizResult();
        quizResult.quizId = obj.quizId;
        let totalAttempted = 0;
        let totalCorrectAns = 0;
        let totalWrongAns = 0;
        let totalRefrain = 0;
        obj.userGqMap.forEach( q =>{
          if(q.attempted) {totalAttempted = totalAttempted+1;
              if(q.userOptionAnsRadioBtn!.correct){
                totalCorrectAns = totalCorrectAns+1;
              }else{
                totalWrongAns = totalWrongAns+1;
              }
          }else{
            totalRefrain = totalRefrain+1;
          }
        });
        // quizResult.userId = this.user.userId!;
        quizResult.attemptedQsns = totalAttempted;
        quizResult.totalQuestions = obj.userGqMap.size;
        quizResult.totalCorrectAns = totalCorrectAns;
        quizResult.totalWrongAns = totalWrongAns;
        quizResult.totalRefrain = totalRefrain;

        this.qrService.create(quizResult).subscribe( (res: QuizResult) =>{
          this.quizService.setScoreCard(res);
        });
        this.isFinished = true;
    });
  }


  nextQuestion(){
      this.pIndex = this.pIndex+1;
      this.presentQuestion();
  }

  prevQuestion(){
      this.pIndex = this.pIndex-1;
      this.presentQuestion();
  }

  clearAns(){
    this.quizService.getTakeQuizObj$.pipe(distinctUntilChanged()).subscribe( (obj:TakeQuizModel) => {
      obj.clearAns(this.pIndex);
      this.quizService.setTakeQuizVal(obj);
    });
  }

  selectedQuestion(key: number){
    this.quizService.getTakeQuizObj$.pipe(distinctUntilChanged()).subscribe( obj =>{
      obj.pIndex = key;
      this.quizService.setTakeQuizVal(obj);
    });
    this.pIndex = key;
    this.setNextPrevIndex();
  }

  setNumberBtnStatus(q:any){
     return q.attempted? 'qsn-attempted':'qsn-not-attempted';
  }

  setNextPrevIndex(){
    if(this.qlength == this.pIndex+1){
      this.nextBtn = false;
      this.prevBtn = true;
    }
    if(-1 == this.pIndex-1){
      this.prevBtn = false;
      this.nextBtn = true;
    }if(-1 < this.pIndex-1 && this.pIndex+1 < this.qlength){
      this.prevBtn = true;
      this.nextBtn = true;
    }
  }

  presentQuestion(){
    this.quizService.getTakeQuizObj$.pipe(distinctUntilChanged()).subscribe( obj =>{
      obj.pIndex = this.pIndex;
      this.quizService.setTakeQuizVal(obj);
    });
    this.setNextPrevIndex();
  }

  setQuizTimeInterval(quizTime: string){
    const hAndM = quizTime.split(":");
    const hours = parseInt(hAndM[0]);
    const min = parseInt(hAndM[1]);
    this.quizTimeInSec =  ((hours * 60) * 60) + (min * 60);

    this.quizTimeCounter = interval(1000).subscribe( val =>{
      if(this.quizTimeInSec > 0){
        this.quizTimeInSec--;
        this.getQuizTime(this.quizTimeInSec);
      }
    });
  }

  getQuizTime(totalSeconds: number){

    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    // add 0 if value < 10; Example: 2 => 02
    this.presentTime = hours+":"+minutes+":"+seconds;

  }


}
