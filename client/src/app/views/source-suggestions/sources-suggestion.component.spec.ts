import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSuggestionsComponent } from './source-suggestions.component';

describe('SourcesComponent', () => {
  let component: SourceSuggestionsComponent;
  let fixture: ComponentFixture<SourceSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create its component', () => {
    expect(component).toBeTruthy();
  });
});
