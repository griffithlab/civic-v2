import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerButtonComponent } from './viewer-button.component';

describe('ViewerButtonComponent', () => {
  let component: ViewerButtonComponent;
  let fixture: ComponentFixture<ViewerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
