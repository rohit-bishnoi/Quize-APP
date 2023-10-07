import { Component, OnInit } from '@angular/core';
import { QuizQuestionModel, TakeQuizModel, UserQuestionAnswer } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-general-quest-template',
  templateUrl: './general-quest-template.component.html',
  styleUrls: ['./general-quest-template.component.scss']
})
export class GeneralQuestTemplateComponent implements OnInit {

  // @Input() gqData:QuizQuestionModel = new QuizQuestionModel();
  // @Input() index:number;

  gqData:QuizQuestionModel = new QuizQuestionModel();
  index!:number;

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getTakeQuizObj$.subscribe((obj:TakeQuizModel) =>{
      if(obj){
       this.index = obj.pIndex!;
       this.gqData = obj.userGqMap.get(obj.pIndex!)!.questObj!;
      }
    });
  }

  onSelectOption(optionObj:any){
    let userQuestionAns = new UserQuestionAnswer();
    userQuestionAns.questId = this.gqData.id!;
    userQuestionAns.attempted = true;
    userQuestionAns.qOrderIndex = this.index;

  }

}
