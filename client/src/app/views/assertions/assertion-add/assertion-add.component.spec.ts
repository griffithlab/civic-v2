import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertionAddComponent } from './assertion-add.component';

describe('AssertionAddComponent', () => {
  let component: AssertionAddComponent;
  let fixture: ComponentFixture<AssertionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssertionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
