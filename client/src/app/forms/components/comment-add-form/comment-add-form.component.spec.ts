import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAddFormComponent } from './comment-add-form.component';

describe('CommentAddFormComponent', () => {
  let component: CommentAddFormComponent;
  let fixture: ComponentFixture<CommentAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
