import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGeneInfoComponent } from './my-gene-info.component';

describe('MyGeneInfoComponent', () => {
  let component: MyGeneInfoComponent;
  let fixture: ComponentFixture<MyGeneInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGeneInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGeneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
