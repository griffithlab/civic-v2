import { TemplateRef } from '@angular/core'
import { ApolloError } from '@apollo/client/core'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import {
  EvidenceManagerFieldsFragment,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  Maybe,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { GraphQLError } from 'graphql'
import {
  NzTableFilterList,
  NzTableFilterValue,
  NzTableQueryParams,
} from 'ng-zorro-antd/table'
import { Subject } from 'rxjs'

export type EvidenceManagerEdge = {
  cursor: string
  node?: Maybe<EvidenceManagerFieldsFragment>
}

// apollo connection that provides table row data & metadata
export type EvidenceManagerConnection = EvidenceManagerQuery['evidenceItems']
// export type EvidenceManagerConnection = {
//   totalCount: number
//   pageCount: number
//   pageInfo: PageInfo
//   nodes: EvidenceManagerFieldsFragment[]
// }

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
  | 'enum-tag' // display cell data w/ attribute-tag
  | 'default' // short strings, e.g. labels, counts
  | 'template' // displays specified template reference
  // TODO: need to implement the following column types when refactoring this code to work w/ all entity types
  | 'text' // long strings or simple sanitized HTML, e.g. descriptions, summaries
  | 'actions' // action buttons e.g. suggest source, approve revision
  | 'time' // displays timestamp w/ timeago pipe

// array of column configs, will be rendered left-to-right in array order
export type EvidenceManagerTableConfig = ColumnConfigOption[]

interface BaseColumn {
  key: EvidenceManagerColKey
  type: EvidenceManagerColType
  label: string
  width: string
  tooltip?: string
  emphasize?: boolean
  hidden?: boolean
  context?: EvidenceManagerColKey
  align?: 'left' | 'center' | 'right' | null
}

export interface SortColumn {
  // NOTE: table queries don't universally support multi-col sort,
  // so if multiple columns options specify a default sort, only the
  // last column to populate its sort array will affect sorting
  sort: NzTableFilterValue['sort']
}

interface SelectionColumn {
  checkbox: {
    th: {
      showCheckbox: boolean
      checkedChange?: Subject<RowSelection> // TODO(?): apply checked updates to all rows
    }
    td: {
      showCheckbox: boolean
      checkedChange: Subject<RowSelection> // apply select changes to row
    }
  }
}

interface FixedColumn {
  fixedLeft: true
  fixedRight: true
}

// implements nz-table filters
interface FilterColumn {
  filter: {
    options: NzTableFilterList
  }
}

// implements custom filters
interface InputFilterColumn {
  inputFilter: {
    type?: string
    placeholder?: string
    defaultValue: any
  }
}

// use context to use another column's entity object to display tag
interface EntityTagColumn {}

// displays row[key] value with attribute-tag component.
// toggle icon off w/ showIcon to render enums that
// evidenceDisplayEnum won't work with. toggle showLabel off
// for a little mini-tag w/ just the icon.
// If showIcon is a string, that string will be provided to icon's nzType
interface EnumTagColumn {
  showLabel?: boolean
  showIcon?: boolean | string
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

// with 'context', one may provide another column key to
// provide its data as $implicit context to ref template
interface TemplateColumn {
  template: {
    reference: Subject<{
      ref: TemplateRef<any>
      context: EvidenceManagerColKey
    }>
  }
}

type ColumnConfigOption =
  | SelectColumnType
  | EntityTagColumnType
  | EnumTagColumnType
  | DefaultColumnType
  | TemplateColumnType

export interface DefaultColumnType
  extends BaseColumn,
    Partial<SortColumn>,
    Partial<FilterColumn>,
    Partial<FixedColumn> {}

// displays a checkbox for the table's select feature
export interface SelectColumnType
  extends BaseColumn,
    SelectionColumn,
    FixedColumn {
  type: 'select'
}

export interface TemplateColumnType
  extends BaseColumn,
    Partial<SortColumn>,
    Partial<FilterColumn>,
    Partial<FixedColumn>,
    TemplateColumn {
  type: 'template'
}

export interface EntityTagColumnType
  extends BaseColumn,
    TagColumn,
    EntityTagColumn,
    SortColumn,
    InputFilterColumn,
    FilterColumn,
    FixedColumn {
  type: 'entity-tag'
}

export interface EnumTagColumnType
  extends BaseColumn,
    TagColumn,
    EnumTagColumn,
    SortColumn,
    FilterColumn,
    FixedColumn {
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

export const isDefaultColumn: TypeGuard<
  ColumnConfigOption,
  DefaultColumnType
> = (option: ColumnConfigOption): option is DefaultColumnType =>
  option.type === 'default'

export const isSortColumn: TypeGuard<any, SortColumn> = (
  int: SortColumn
): int is SortColumn => int.sort !== undefined

export const isFilterColumn: TypeGuard<any, FilterColumn> = (
  int: FilterColumn
): int is FilterColumn => int.filter !== undefined

export const colTypeGuards = {
  isSelectCol: isSelectColumn,
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
