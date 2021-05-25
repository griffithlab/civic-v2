import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTagComponent } from './source-tag.component';

describe('SourceTagComponent', () => {
  let component: SourceTagComponent;
  let fixture: ComponentFixture<SourceTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
