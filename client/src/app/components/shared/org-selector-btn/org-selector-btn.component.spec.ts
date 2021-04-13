import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSelectorButtonComponent } from './org-selector-btn.component';

describe('OrgSelectorButtonComponent', () => {
  let component: OrgSelectorButtonComponent;
  let fixture: ComponentFixture<OrgSelectorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgSelectorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSelectorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
