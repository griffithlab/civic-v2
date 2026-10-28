import {
  AdvancedSearchEndpoint,
  AdvancedSearchFilter,
  QueryBuilderFormModel,
} from '@forms/config/query-builder/query-builder.types'
import { BooleanOperator } from '@generated/civic.apollo'

export type QuerySearchExample = {
  title: string
  description: string
  searchEndpoint: AdvancedSearchEndpoint
  formQuery: QueryBuilderFormModel['query']
}

export const QUERY_SEARCH_EXAMPLES: QuerySearchExample[] = [
  {
    title: 'List Pediatric Evidence Items',
    description: 'Specify phenotypes to obtain a list of all related evidence',
    searchEndpoint: 'searchEvidenceItems',
    formQuery: <QueryBuilderFormModel['query']>{
      booleanOperator: BooleanOperator.And,
      subFilters: [
        {
          phenotypes: {
            booleanOperator: 'OR',
            subFilters: [
              {
                id: {
                  operator: 'EQ',
                  value: 8120,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 16642,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 16643,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 16644,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 8121,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 2656,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 15320,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 2642,
                },
              },
              {
                id: {
                  operator: 'EQ',
                  value: 2646,
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Find a Specific User',
    description: 'Find users by providing a name or username',
    searchEndpoint: 'searchUsers',
    formQuery: <QueryBuilderFormModel['query']>{
      booleanOperator: BooleanOperator.And,
      subFilters: [
        {
          name: {
            operator: 'CONTAINS',
            value: 'Krysiak',
          },
        },
      ],
    },
  },
  {
    title: 'List Evidence Items Associated with a Disease',
    description:
      'Specify a Disease name or substring for a list of associated evidence.',
    searchEndpoint: 'searchEvidenceItems',
    formQuery: <QueryBuilderFormModel['query']>{
      booleanOperator: BooleanOperator.And,
      subFilters: [
        {
          disease: {
            booleanOperator: 'AND',
            subFilters: [
              {
                name: {
                  operator: 'CONTAINS',
                  value: 'Leukemia',
                },
              },
            ],
          },
        },
        {
          status: {
            operator: 'EQ',
            value: 'SUBMITTED',
          },
        },
      ],
    },
  },
  {
    title: 'Find Features with an Assertion',
    description:
      'Limit a Feature search to records with an associated Assertion.',
    searchEndpoint: 'searchFeatures',
    formQuery: <QueryBuilderFormModel['query']>{
      booleanOperator: BooleanOperator.And,
      subFilters: [
        {
          threePrimePartnerEntrezSymbol: {
            operator: 'CONTAINS',
            value: 'NTRK',
          },
        },
        { hasAssertion: { value: true } },
      ],
    },
  },
]
