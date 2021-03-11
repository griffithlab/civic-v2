import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneDescriptionComponent } from './gene-description.component';

describe('GeneDescriptionComponent', () => {
  let component: GeneDescriptionComponent;
  let fixture: ComponentFixture<GeneDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
