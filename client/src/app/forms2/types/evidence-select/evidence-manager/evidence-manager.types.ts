import { ApolloError } from '@apollo/client/core'
import {
  EvidenceItem,
  EvidenceManagerFieldsFragment,
  EvidenceManagerQueryVariables,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { GraphQLError } from 'graphql'
import {
  NzTableFilterValue,
  NzTableQueryParams,
  NzTableSortOrder,
} from 'ng-zorro-antd/table'
import { Subject } from 'rxjs'

// apollo connection that provides table row data & metadata
export type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

// additional columns added to row data for table templates, logic
type EvidenceManagerRowDataExtra = {
  // need evidence object for entity tag in selectEntity column
  evidenceItem: { id: number; name: string; link: string }
  // additional boolean column to handle row selected state
  selected: boolean
}

// choose table columns from response connection node
// & combine with options extra data
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

export type EvidenceManagerColKey = keyof EvidenceManagerRowData
export type EvidenceManagerColType =
  | 'select'
  | 'select-tag'
  | 'entity-tag'
  | 'entity-proxy-tag'
  | 'entity-multi-tag'
  | 'enum'
  | 'string'
  | 'text'
  | 'actions'
  | 'time'
  | 'template'

// array of column configs, will be rendered in order
export type EvidenceManagerTableConfig = ColumnConfigOption[]

// NzTableQueryParam's filter object literal, adding a type here for easier reference
export type CvcTableFilterOption = {
  text: string
  value: any
  byDefault?: boolean
}

type BaseColumn = {
  key: EvidenceManagerColKey
  type: EvidenceManagerColType
  name: string
  width: string
  tooltip?: string
  hidden?: boolean
}

type SortColumn = {
  showSort: true
  // optional default sort
  // NOTE: table queries don't universally support multi-col sort,
  // so if multiple columns options specify a default sort, only the
  // final will be applied in getQuerySortParams()
  sort?: Array<{
    key: string
    value: NzTableSortOrder
  }>
}

type SelectionColumn = {
  showSelect: true
  checkbox: {
    th: {
      showCheckbox: boolean
    }
    td: {
      showCheckbox: boolean
      checkedChange: Subject<RowSelection>
    }
  }
}

type SelectionTagColumn = {
  showSelect: true
  entityKey: EvidenceManagerColKey
  checkbox?: {
    th: {
      showCheckbox?: boolean
    }
    td: {
      showCheckbox?: boolean
    }
  }
}

type FixedColumn = {
  fixColumn: true
  fixed: {
    left?: string | boolean
    right?: string | boolean
  }
}

type OptionFilterColumn = {
  showFilter: true
  filter: {
    options: CvcTableFilterOption[]
  }
}

type EnumFilterColumn = {
  showFilter: true
  filter: {
    options: CvcTableFilterOption[]
  }
}

type StringFilterColumn = {
  showFilter: true
  filter: {
    options: CvcTableFilterOption[]
  }
}

type DefaultColumn = {
  type: 'default'
}

type EntityTagColumn = {}

type EntityMultiTagColumn = {
  maxTags: number
}

// for displaying an entity tag from a different column
// e.g. for showing an evidence item tag in its id col
type EntityProxyColumn = {
  entityProxyKey: EvidenceManagerColKey
}

// type ColumnConfigOption = (
//   | OptionFilterColumn
//   | EnumFilterColumn
//   | StringFilterColumn
//   | SortColumn
//   | SelectionColumn
//   | FixedColumn
//   | EntityTagColumn
//   | EntityMultiTagColumn
//   | EntityProxyColumn
//   | DefaultColumn
// ) &
//   BaseColumn
type ColumnConfigOption =
  | SelectColumnType
  | SelectTagColumnType
  | EntityTagColumnType
  | EntityMultiTagColumnType
  | EntityProxyTagColumnType

// displays a checkbox for the table's select feature
export type SelectColumnType = (SelectionColumn & FixedColumn & BaseColumn) & {
  type: 'select'
}
// displays a checkbox next to the row entity tag, in same column
// (a hack to work around nz-table's column fix bug that only allows
// for a single row on either side to be fixed)
export type SelectTagColumnType = (SelectionTagColumn &
  EntityProxyColumn &
  BaseColumn) & { type: 'select-tag' }

export type EntityTagColumnType = (EntityTagColumn &
  SortColumn &
  StringFilterColumn &
  BaseColumn) & { type: 'entity-tag' }

export type EntityMultiTagColumnType = (EntityMultiTagColumn &
  SortColumn &
  StringFilterColumn &
  BaseColumn) & { type: 'entity-multi-tag' }

export type EntityProxyTagColumnType = (EntityProxyColumn &
  SortColumn &
  StringFilterColumn &
  BaseColumn) & { type: 'entity-proxy-tag' }

// types to drive the preferences panel
export type ColumnPrefsOption = {
  label: string
  value: string
  checked?: boolean
}

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
