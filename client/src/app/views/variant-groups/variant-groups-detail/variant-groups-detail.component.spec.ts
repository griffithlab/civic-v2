import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsDetailComponent } from './variant-groups-detail.component';

describe('VariantGroupsDetailComponent', () => {
  let component: VariantGroupsDetailComponent;
  let fixture: ComponentFixture<VariantGroupsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
