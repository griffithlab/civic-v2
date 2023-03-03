import { ApolloError } from '@apollo/client/core'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import {
  EvidenceManagerFieldsFragment,
  EvidenceManagerQueryVariables,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { GraphQLError } from 'graphql'
import { NzAlign } from 'ng-zorro-antd/grid'
import { NzTableFilterValue, NzTableQueryParams } from 'ng-zorro-antd/table'
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
  | 'select' // select column, displays checkboxes for row selection
  | 'select-tag' // select + entity tags next to checkboxes
  | 'entity-tag' // display col value with entity-tag
  | 'entity-proxy-tag' // display entity tag using entity data in another column
  | 'entity-multi-tag' // display multiple tags wrapped with tag-group
  | 'enum-tag' // display cell data w/ attribute-tag
  | 'enum' // display enum value using generic tag component or simple string
  | 'string' // short strings, e.g. labels, counts
  // TODO: need to implement the following column types when refactoring this code to work w/ all entity types
  | 'text' // long strings or simple sanitized HTML, e.g. descriptions, summaries
  | 'actions' // action buttons e.g. suggest source, approve revision
  | 'time' // displays timestamp w/ timeago pipe
  | 'template' // displays a templateRef w/ row.col[i] value context for quick custom column types

// array of column configs, will be rendered left-to-right in array order
export type EvidenceManagerTableConfig = ColumnConfigOption[]

interface BaseColumn {
  key: EvidenceManagerColKey
  type: EvidenceManagerColType
  label: string
  width: string
  tooltip?: string
  hidden?: boolean
}

interface SortColumn {
  // NOTE: table queries don't universally support multi-col sort,
  // so if multiple columns options specify a default sort, only the
  // final will be applied in getQuerySortParams()
  sort: NzTableFilterValue['sort']
}

interface AlignedColumn {
  align: NzAlign
}

interface SelectionColumn {
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

interface FixedColumn {
  fixed: {
    left?: string | boolean
    right?: string | boolean
  }
}

interface FilterColumn {
  filter: {
    options: NzTableQueryParams['filter']
  }
}

// if cacheIdFn provided, will fetch entity from cache
// instead of using row[key] entity for cell model
interface EntityTagColumn {
  cacheIdFn?: () => string
}

// displays row[key] value with attribute-tag component,
// or generic tag if icon/label provided
interface EnumTagColumn {
  formatLabel?: () => string | string
  formatIcon?: () => string | string
}

interface TagColumn {
  tag: {
    truncateLabel: boolean
    showLabel: boolean
  }
  tagGroup?: {
    maxTags: number
    truncateLabels?: boolean
  }
}

type ColumnConfigOption =
  | SelectColumnType
  | SelectTagColumnType
  | EntityTagColumnType
  | EnumTagColumnType
  | DefaultColumnType

export interface DefaultColumnType
  extends BaseColumn,
    Partial<SortColumn>,
    Partial<FilterColumn>,
    Partial<FixedColumn>,
    Partial<AlignedColumn> {}

export interface TagColumnType
  extends BaseColumn,
    TagColumn,
    SortColumn,
    FilterColumn {}

// displays a checkbox for the table's select feature
export interface SelectColumnType
  extends BaseColumn,
    SelectionColumn,
    FixedColumn {
  type: 'select'
}

// displays a checkbox next to the row entity tag, in same column
// (a hack to work around nz-table's column fix bug that only allows
// for a single row on either side to be fixed)
export interface SelectTagColumnType
  extends BaseColumn,
    SelectionColumn,
    TagColumn,
    EntityTagColumn {
  type: 'select-tag'
}

export interface EntityTagColumnType
  extends BaseColumn,
    TagColumn,
    EntityTagColumn,
    SortColumn,
    FilterColumn {
  type: 'entity-tag'
}

export interface EnumTagColumnType
  extends BaseColumn,
    TagColumn,
    EnumTagColumn,
    SortColumn,
    FilterColumn {
  type: 'enum-tag'
}

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

export type RequestError = {
  network?: ApolloError
  query?: ReadonlyArray<GraphQLError>
}

// type guards for TypeGuard pipe
export const isSelectColumn: TypeGuard<ColumnConfigOption, SelectColumnType> = (
  option: ColumnConfigOption
): option is SelectColumnType => option.type === 'select'

export const isSelectTagColumn: TypeGuard<
  ColumnConfigOption,
  SelectTagColumnType
> = (option: ColumnConfigOption): option is SelectTagColumnType =>
  option.type === 'select-tag'

export const isEntityTagColumn: TypeGuard<
  ColumnConfigOption,
  EntityTagColumnType
> = (option: ColumnConfigOption): option is EntityTagColumnType =>
  option.type === 'entity-tag'

export const isEnumTagColumn: TypeGuard<
  ColumnConfigOption,
  EnumTagColumnType
> = (option: ColumnConfigOption): option is EnumTagColumnType =>
  option.type === 'enum-tag'

export const colTypeGuards = {
  isSelectCol: isSelectColumn,
  isSelectTagCol: isSelectTagColumn,
  isEntityTagCol: isEntityTagColumn,
  isEnumTagCol: isEnumTagColumn,
}

// version of NzTableQueryParams modified for relay pagination,
// replaces 'pageIndex' and 'pageSize' w/ 'first' and 'after'
export type CvcTableQueryParams = Omit<
  NzTableQueryParams,
  'pageIndex' | 'pageSize'
> & { fetchMore?: { first?: number; after?: string }; query: QueryType }

// filter option for text typeahead input filters
export type CustomFilter = { key: string; value: NzTableFilterValue }
