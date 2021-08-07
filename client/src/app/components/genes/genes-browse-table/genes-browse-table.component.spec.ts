import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesBrowseTableComponent } from './genes-browse-table.component';

describe('GenesBrowseTableComponent', () => {
  let component: GenesBrowseTableComponent;
  let fixture: ComponentFixture<GenesBrowseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesBrowseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesBrowseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
