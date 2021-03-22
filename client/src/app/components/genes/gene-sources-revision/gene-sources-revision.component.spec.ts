import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneSourcesRevisionComponent } from './gene-sources-revision.component';

describe('GeneSourcesRevisionComponent', () => {
  let component: GeneSourcesRevisionComponent;
  let fixture: ComponentFixture<GeneSourcesRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneSourcesRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneSourcesRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
