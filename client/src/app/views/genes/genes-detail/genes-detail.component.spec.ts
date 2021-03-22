import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesDetailComponent } from './genes-detail.component';

describe('GenesDetailComponent', () => {
  let component: GenesDetailComponent;
  let fixture: ComponentFixture<GenesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
