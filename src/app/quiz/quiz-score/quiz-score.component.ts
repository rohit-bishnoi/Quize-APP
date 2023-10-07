import { Component, OnInit } from '@angular/core';
import { QuizResult } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.scss']
})
export class QuizScoreComponent implements OnInit {

  quizResult!:QuizResult;
  panelOpenState = true;
  labelValueList:any;
  constructor(private quizService:QuizService) { }

  firstPanel:boolean = false;
  ngOnInit(): void {
    this.getQuizResults();
  }

  labelsMap = {
    "totalQuestions":"Total Questions:",
    "attemptedQsns":"Attempted Questions:",
    "totalRefrain":"Refrain Questions:",
    "totalCorrectAns":"Correct Ans:",
    "totalWrongAns":"Wrong Ans:"
  }


  getQuizResults(){
    this.quizService.getScoreCard$.subscribe( (res:QuizResult) =>{
     
      if(res){
        console.log(res);
      this.quizResult = res;
      // this.labelValueList = Object.entries(res);
      }
  });
}
}
