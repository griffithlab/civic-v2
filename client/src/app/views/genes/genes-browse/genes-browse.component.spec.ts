import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesBrowseComponent } from './genes-browse.component';

describe('GenesBrowseComponent', () => {
  let component: GenesBrowseComponent;
  let fixture: ComponentFixture<GenesBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
