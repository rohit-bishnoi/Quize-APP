import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestOptionTemplateComponent } from './quest-option-template.component';

describe('QuestOptionTemplateComponent', () => {
  let component: QuestOptionTemplateComponent;
  let fixture: ComponentFixture<QuestOptionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestOptionTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestOptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
