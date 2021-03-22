import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantGroupsComponent } from './variant-groups.component';

describe('VariantGroupsComponent', () => {
  let component: VariantGroupsComponent;
  let fixture: ComponentFixture<VariantGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create its component', () => {
    expect(component).toBeTruthy();
  });
});
