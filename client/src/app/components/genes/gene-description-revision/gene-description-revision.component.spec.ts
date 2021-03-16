import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneDescriptionRevisionComponent } from './gene-description-revision.component';

describe('GeneDescriptionRevisionComponent', () => {
  let component: GeneDescriptionRevisionComponent;
  let fixture: ComponentFixture<GeneDescriptionRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneDescriptionRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneDescriptionRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
