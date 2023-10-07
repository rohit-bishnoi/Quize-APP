import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { BaseService } from './services/base.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuizModule } from './quiz/quiz.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
