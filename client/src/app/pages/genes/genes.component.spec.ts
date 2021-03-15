import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGenesGQL } from '@app/generated/civic.apollo';
import { GenesComponent } from './genes.component';

describe('GenesComponent', () => {
  let component: GenesComponent;
  let fixture: ComponentFixture<GenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ BrowseGenesGQL ],
      declarations: [ GenesComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create its component', () => {
    expect(component).toBeTruthy();
  });
});
