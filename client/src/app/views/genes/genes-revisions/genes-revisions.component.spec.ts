import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesRevisionsComponent } from './genes-revisions.component';

describe('GenesRevisionsComponent', () => {
  let component: GenesRevisionsComponent;
  let fixture: ComponentFixture<GenesRevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesRevisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
