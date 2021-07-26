import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsRevisionsComponent } from './variant-groups-revisions.component';

describe('VariantGroupsRevisionsComponent', () => {
  let component: VariantGroupsRevisionsComponent;
  let fixture: ComponentFixture<VariantGroupsRevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsRevisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
