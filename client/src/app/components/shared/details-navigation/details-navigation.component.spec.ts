import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNavigationComponent } from './details-navigation.component';

describe('DetailsNavigationComponent', () => {
  let component: DetailsNavigationComponent;
  let fixture: ComponentFixture<DetailsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
