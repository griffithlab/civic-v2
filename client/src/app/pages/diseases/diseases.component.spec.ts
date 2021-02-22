import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesComponent } from './diseases.component';

describe('DiseasesComponent', () => {
  let component: DiseasesComponent;
  let fixture: ComponentFixture<DiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
