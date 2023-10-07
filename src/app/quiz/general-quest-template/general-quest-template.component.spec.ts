import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQuestTemplateComponent } from './general-quest-template.component';

describe('GeneralQuestTemplateComponent', () => {
  let component: GeneralQuestTemplateComponent;
  let fixture: ComponentFixture<GeneralQuestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralQuestTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralQuestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
