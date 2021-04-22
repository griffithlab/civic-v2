import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleActionsComponent } from './lifecycle-actions.component';

describe('LifecycleActionsComponent', () => {
  let component: LifecycleActionsComponent;
  let fixture: ComponentFixture<LifecycleActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
