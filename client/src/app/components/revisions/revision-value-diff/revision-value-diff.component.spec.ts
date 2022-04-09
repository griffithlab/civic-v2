import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionValueDiffComponent } from './revision-value-diff.component';

describe('RevisionValueDiffComponent', () => {
  let component: RevisionValueDiffComponent;
  let fixture: ComponentFixture<RevisionValueDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionValueDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionValueDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
