import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceLoaderComponent } from './source-loader.component';

describe('SourceLoaderComponent', () => {
  let component: SourceLoaderComponent;
  let fixture: ComponentFixture<SourceLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
