import { ApolloError } from "@apollo/client/core"
import { EvidenceManagerFieldsFragment, EvidenceManagerQueryVariables, PageInfo, SortDirection } from "@app/generated/civic.apollo"
import { GraphQLError } from "graphql"
import { NzTableFilterValue, NzTableQueryParams, NzTableSortOrder } from "ng-zorro-antd/table"

export type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

// choose table columns from its query fragment & combine with options extra data
export type EvidenceManagerRowData = Pick<
  EvidenceManagerFieldsFragment,
  | 'id'
  | 'status'
  | 'molecularProfile'
  | 'disease'
  | 'therapies'
  | 'therapyInteractionType'
  | 'description'
  | 'evidenceType'
  | 'evidenceLevel'
  | 'evidenceRating'
  | 'evidenceDirection'
  | 'significance'
  | 'variantOrigin'
> &
  EvidenceManagerRowDataExtra

// additional columns added to row data for table templates, logic
export type EvidenceManagerRowDataExtra = {
  // need evidence object for entity-tag in colum
  evidenceItem: { id: number; name: string; link: string }
  // additional boolean column to handle row selected state
  selected: boolean
}

export type ColKey = keyof EvidenceManagerRowData

// NzTableQueryParam's filter object, typed for easier reference
export type FilterOption = { text: string; value: any; byDefault?: boolean }

// config object for table's columns in TableConfig array
type ColConfig = {
  key: ColKey
  tooltip?: string
  name: string
  width: string
  hide?: boolean
  filter?: {
    options: FilterOption[]
    multiple?: boolean
  }
  showSort?: boolean
  // NOTE: evidenceItems query appears to support single-col sort only.
  // If multiple ColConfigs provide a sortOrder, only the last will b
  sortOrder?: NzTableSortOrder
}

export type TableConfig = {
  [key in ColKey]: ColConfig
}

// types to drive the preferences panel
export type ColumnPrefsOption = { label: string; value: string; checked?: boolean }
export type ColumnPrefsModel = ColumnPrefsOption[]

export type QueryParamKey = keyof EvidenceManagerQueryVariables

// gql query vars sort params
export type QuerySortParams = {
  sortBy: {
    column: any
    direction: SortDirection
  }
}

export type QueryType = 'fetchMore' | 'refetch'

// used in selection events
export type RowSelection = {
  selected: boolean
  id: number
}

// filter option for text typeahead input filters
export type CustomFilter = { key: string; value: NzTableFilterValue }



// version of NzTableQueryParams modified for relay pagination,
// replaces 'pageIndex' and 'pageSize' w/ 'first' and 'after'
export type CvcTableQueryParams = Omit<
  NzTableQueryParams,
  'pageIndex' | 'pageSize'
> & { fetchMore?: { first?: number; after?: string }; query: QueryType }

export type RequestError = {
  network?: ApolloError
  query?: ReadonlyArray<GraphQLError>
}
