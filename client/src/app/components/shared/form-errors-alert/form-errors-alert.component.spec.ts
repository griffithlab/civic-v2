import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsAlertComponent } from './form-errors-alert.component';

describe('FormErrorsAlertComponent', () => {
  let component: FormErrorsAlertComponent;
  let fixture: ComponentFixture<FormErrorsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
