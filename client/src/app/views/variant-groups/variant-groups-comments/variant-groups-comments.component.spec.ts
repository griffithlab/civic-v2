import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsCommentsComponent } from './variant-groups-comments.component';

describe('VariantGroupsCommentsComponent', () => {
  let component: VariantGroupsCommentsComponent;
  let fixture: ComponentFixture<VariantGroupsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
