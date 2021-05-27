import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesSuggestRevisionComponent } from './genes-suggest-revision.component';

describe('GenesSuggestRevisionComponent', () => {
  let component: GenesSuggestRevisionComponent;
  let fixture: ComponentFixture<GenesSuggestRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesSuggestRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesSuggestRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
