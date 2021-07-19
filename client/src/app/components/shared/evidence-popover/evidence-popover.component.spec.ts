import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencePopoverComponent } from './evidence-popover.component';

describe('EvidencePopoverComponent', () => {
  let component: EvidencePopoverComponent;
  let fixture: ComponentFixture<EvidencePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencePopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
