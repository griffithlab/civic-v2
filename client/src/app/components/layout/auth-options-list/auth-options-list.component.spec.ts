import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOptionsListComponent } from './auth-options-list.component';

describe('AuthOptionsListComponent', () => {
  let component: AuthOptionsListComponent;
  let fixture: ComponentFixture<AuthOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
