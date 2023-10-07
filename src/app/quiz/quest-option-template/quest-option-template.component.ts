import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { OptionModel, TakeQuizModel } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quest-option-template',
  templateUrl: './quest-option-template.component.html',
  styleUrls: ['./quest-option-template.component.scss']
})
export class QuestOptionTemplateComponent implements OnInit {

  options:OptionModel[] = [];
  isCheckBox!:boolean;
  correctOptions:number = 0;
  selectedOption: OptionModel = new OptionModel();
  questionId!:number;
 

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getTakeQuizObj$.subscribe( (obj:TakeQuizModel) => {
       if(obj){
        this.correctOptions = 0;
       let userQuestAns = obj?.userGqMap?.get(obj.pIndex!);

      this.options = userQuestAns!.questObj!.options!;
      this.options.forEach( option =>{
          if(option.correct){
            this.correctOptions = this.correctOptions+1;
          }
      });
      if(this.correctOptions == 1){
        this.selectedOption = userQuestAns?.userOptionAnsRadioBtn!;
       }
       }
    });

  }

  onSelectOption(newVal:OptionModel | any){
    this.selectedOption = newVal;
    this.quizService.getTakeQuizObj$.pipe(distinctUntilChanged()).subscribe( (obj:TakeQuizModel) => {
      obj.userGqMap.get(obj.pIndex!)!.attempted = true;
      obj.userGqMap.get(obj.pIndex!)!.userOptionAnsRadioBtn = newVal;
      
      this.quizService.setTakeQuizVal(obj);
    });
  }

}
