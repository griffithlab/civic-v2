import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggableComponent } from './flaggable.component';

describe('FlaggableComponent', () => {
  let component: FlaggableComponent;
  let fixture: ComponentFixture<FlaggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
