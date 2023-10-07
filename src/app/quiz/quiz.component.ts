import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../model/quiz';
import { QuizService } from '../services/quiz.service';
// import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizList:QuizModel[] = [];
  userId:number | undefined;
  constructor(
     private quizService:QuizService,
    //  private readonly localService:LocalService
     ) { }

  ngOnInit(): void {
    // this.userId = this.localService.getData('auth')?.user?.userId;
    this.getQuizList();
  }


  getQuizList(){
    this.quizService.getQuizList().subscribe( (res:any)  => {
        this.quizList = res;
    });
  }

}
