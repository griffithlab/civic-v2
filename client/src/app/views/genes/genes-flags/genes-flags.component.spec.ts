import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesFlagsComponent } from './genes-flags.component';

describe('GenesFlagsComponent', () => {
  let component: GenesFlagsComponent;
  let fixture: ComponentFixture<GenesFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesFlagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
