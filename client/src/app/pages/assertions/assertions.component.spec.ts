import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertionsComponent } from './assertions.component';

describe('AssertionsComponent', () => {
  let component: AssertionsComponent;
  let fixture: ComponentFixture<AssertionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssertionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create its component', () => {
    expect(component).toBeTruthy();
  });
});
