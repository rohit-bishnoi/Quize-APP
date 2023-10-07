import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

//ng g m admin --module app.module  --routing true --route admin  --routing-scope Child
// ng g c component_name --module app
// ng generate guard auth/auth
const routes: Routes = [
                        {path:"",redirectTo:"/login",pathMatch:'full'},
                          { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) }
                        ,
                        { path: '**', component: PageNotFoundComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
