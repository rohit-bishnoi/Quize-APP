import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';

const routes: Routes = [{ path: '', component: QuizComponent },
                        {path:'takeQuiz/:quizId',component:TakeQuizComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
