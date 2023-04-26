import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceIdInputType } from './source-id-input.type';

describe('SourceIdInputType', () => {
  let component: SourceIdInputType;
  let fixture: ComponentFixture<SourceIdInputType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceIdInputType ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceIdInputType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
