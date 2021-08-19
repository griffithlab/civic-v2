import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantsReviseComponent } from './variants-revise.view';

describe('VariantsReviseComponent', () => {
  let component: VariantsReviseComponent;
  let fixture: ComponentFixture<VariantsReviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantsReviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantsReviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
