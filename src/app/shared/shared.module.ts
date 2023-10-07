import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { InputTagComponent } from './input-tag/input-tag.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { TextareaTagComponent } from './textarea-tag/textarea-tag.component';
import { SelectTagComponent } from './select-tag/select-tag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent,
    InputTagComponent,
    CheckBoxComponent,
    TextareaTagComponent,
    SelectTagComponent,
    PageNotFoundComponent,
    RadioBtnComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports:[
    InputTagComponent,
    CheckBoxComponent,
    TextareaTagComponent,
    SelectTagComponent,
    PageNotFoundComponent,
    RadioBtnComponent
  ]
})
export class SharedModule { }
