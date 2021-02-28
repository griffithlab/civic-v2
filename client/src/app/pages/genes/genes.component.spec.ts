import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { GraphQLModule } from '@app/graphql.module';
import { BrowseGenesGQL } from '@app/generated/civic.apollo';

import { GenesComponent } from './genes.component';

export const BROWSE_GENES_QUERY = BrowseGenesGQL;

describe('GenesComponent', () => {
  let controller: ApolloTestingController;
  let fixture: ComponentFixture<GenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });

    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });



  let component: GenesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenesComponent ],
      imports: [ GraphQLModule ],
      providers: [ BrowseGenesGQL ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create its component', () => {
    expect(component).toBeTruthy();
  });
});
