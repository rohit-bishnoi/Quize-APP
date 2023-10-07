import { Component, OnInit } from '@angular/core';
import { TakeQuizModel, UserQuestionAnswer } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-direct-quest-template',
  templateUrl: './direct-quest-template.component.html',
  styleUrls: ['./direct-quest-template.component.scss']
})
export class DirectQuestTemplateComponent implements OnInit {


  _userQuestionData!:UserQuestionAnswer;

  constructor(private readonly quizService:QuizService) { }

  ngOnInit(): void {

    this.quizService.getTakeQuizObj$.subscribe((obj:TakeQuizModel) =>{
      if(obj){
      this._userQuestionData = obj.userGqMap.get(obj.pIndex!) as UserQuestionAnswer;
      }
   });

  }


}
