import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsFlagsComponent } from './variant-groups-flags.component';

describe('VariantGroupsFlagsComponent', () => {
  let component: VariantGroupsFlagsComponent;
  let fixture: ComponentFixture<VariantGroupsFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsFlagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
