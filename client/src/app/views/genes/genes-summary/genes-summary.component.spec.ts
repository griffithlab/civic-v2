import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesSummaryComponent } from './genes-summary.component';

describe('GenesSummaryComponent', () => {
  let component: GenesSummaryComponent;
  let fixture: ComponentFixture<GenesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
