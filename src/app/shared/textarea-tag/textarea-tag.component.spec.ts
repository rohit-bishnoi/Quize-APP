import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaTagComponent } from './textarea-tag.component';

describe('TextareaTagComponent', () => {
  let component: TextareaTagComponent;
  let fixture: ComponentFixture<TextareaTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
