import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorAvatarsComponent } from './contributor-avatars.component';

describe('ContributorAvatarsComponent', () => {
  let component: ContributorAvatarsComponent;
  let fixture: ComponentFixture<ContributorAvatarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorAvatarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
