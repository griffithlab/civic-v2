import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSelectorComponent } from './source-selector.component';

describe('SourceSelectorComponent', () => {
  let component: SourceSelectorComponent;
  let fixture: ComponentFixture<SourceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
