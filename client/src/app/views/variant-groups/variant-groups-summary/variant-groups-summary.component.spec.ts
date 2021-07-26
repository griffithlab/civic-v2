import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsSummaryComponent } from './variant-groups-summary.component';

describe('VariantGroupsSummaryComponent', () => {
  let component: VariantGroupsSummaryComponent;
  let fixture: ComponentFixture<VariantGroupsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
