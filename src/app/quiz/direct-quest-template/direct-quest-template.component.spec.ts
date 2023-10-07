import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectQuestTemplateComponent } from './direct-quest-template.component';

describe('DirectQuestTemplateComponent', () => {
  let component: DirectQuestTemplateComponent;
  let fixture: ComponentFixture<DirectQuestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectQuestTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectQuestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
