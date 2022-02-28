import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantInputType } from './variant-input.type';

describe('VariantInputType', () => {
  let component: VariantInputType;
  let fixture: ComponentFixture<VariantInputType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantInputType ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantInputType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
