import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesCommentsComponent } from './genes-comments.component';

describe('GenesCommentsComponent', () => {
  let component: GenesCommentsComponent;
  let fixture: ComponentFixture<GenesCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
