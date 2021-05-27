import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneSuggestRevisionFormComponent } from './gene-suggest-revision-form.component';

describe('GeneSuggestRevisionFormComponent', () => {
  let component: GeneSuggestRevisionFormComponent;
  let fixture: ComponentFixture<GeneSuggestRevisionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneSuggestRevisionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneSuggestRevisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
