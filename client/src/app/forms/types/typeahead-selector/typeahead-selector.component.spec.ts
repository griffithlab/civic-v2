import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadSelectorComponent } from './typeahead-selector.component';

describe('TypeaheadSelectorComponent', () => {
  let component: TypeaheadSelectorComponent;
  let fixture: ComponentFixture<TypeaheadSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
