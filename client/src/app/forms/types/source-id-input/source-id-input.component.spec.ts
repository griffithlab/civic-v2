import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceIdInputComponent } from './source-id-input.component';

describe('SourceIdInputComponent', () => {
  let component: SourceIdInputComponent;
  let fixture: ComponentFixture<SourceIdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceIdInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceIdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
