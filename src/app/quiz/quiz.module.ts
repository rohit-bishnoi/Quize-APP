import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { DirectQuestTemplateComponent } from './direct-quest-template/direct-quest-template.component';
import { GeneralQuestTemplateComponent } from './general-quest-template/general-quest-template.component';
import { QuestOptionTemplateComponent } from './quest-option-template/quest-option-template.component';
import { FormsModule } from '@angular/forms';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    QuizComponent,
    TakeQuizComponent,
    DirectQuestTemplateComponent,
    GeneralQuestTemplateComponent,
    QuestOptionTemplateComponent,
    QuizScoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule,
    NgbAccordionModule 
  ]
})
export class QuizModule { }
