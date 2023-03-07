import { TemplateRef } from '@angular/core'
import { ApolloError } from '@apollo/client/core'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import {
  EvidenceItem,
  EvidenceManagerFieldsFragment,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  Maybe,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { GraphQLError } from 'graphql'
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableFilterValue,
  NzTableQueryParams,
  NzTableSortFn,
  NzTableSortOrder,
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
  evidenceItem: Pick<EvidenceItem, 'id' | 'name' | 'link' | 'status'>
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
  | 'text-tag' // long strings or simple sanitized HTML, e.g. descriptions, summaries

// array of column configs, will be rendered left-to-right in array order
export type EvidenceManagerTableConfig = ColumnConfigOption[]

interface BaseColumn {
  key: EvidenceManagerColKey
  type: EvidenceManagerColType
  label: string // displayed in col header
  width: string // passed to th nzWidth, use px: '30px'
  tooltip?: string // label tooltip
  emphasize?: boolean // emphasize filter values in string, tags?
  hidden?: boolean // toggle column visibilitiy
  context?: EvidenceManagerColKey // specify another row key as source for cell context data
  align?: 'left' | 'center' | 'right' | null // passed to td/td nzAlign
}

// implements nz-table filters
interface FilterOptions {
  filter: {
    options: NzTableFilterList // options displayed in filter dropdown
  }
}

// string/number input filter
// NOTE: same as FilterOptions, except it uses only a single NzTableFilterList option.
// That option's key will used as the input placeholder, value will set its default.
interface InputFilterOptions {
  filter: {
    options: [{ key: string; value: string | number | null }] // key = placeholder, value = default
  }
}

export interface SortOptions {
  sort?: {
    default?: NzTableSortOrder
  }
}

interface SelectionOptions {
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

interface FixedOptions {
  fixedLeft?: true
  fixedRight?: true
}

// use context to use another column's entity object to display tag
interface EntityTagColumn {}

interface TextColumn {
  text?: {}
}

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
  tag?: {
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
  | EntityTagColumnType
  | EnumTagColumnType
  | DefaultColumnType
  | TextColumnType

export interface DefaultColumnType extends BaseColumn, FixedOptions {
  type: 'default'
}

// displays a checkbox for the table's select feature
export interface SelectColumnType
  extends BaseColumn,
    SelectionOptions,
    FixedOptions {
  type: 'select'
}

export interface EntityTagColumnType
  extends BaseColumn,
    TagColumn,
    EntityTagColumn,
    SortOptions,
    InputFilterOptions,
    FixedOptions {
  type: 'entity-tag'
}

export interface EnumTagColumnType
  extends BaseColumn,
    TagColumn,
    EnumTagColumn,
    SortOptions,
    FilterOptions,
    FixedOptions {
  type: 'enum-tag'
}

export interface TextColumnType
  extends BaseColumn,
    TextColumn,
    SortOptions,
    InputFilterOptions,
    FixedOptions {
  type: 'text-tag'
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

// Type guard fns for TypeGuard pipe. Required to simplify the construction of
// generic template logic, a kludge to prevent *ngFor from getting clobbered
export const isDefaultColumn: TypeGuard<
  ColumnConfigOption,
  DefaultColumnType
> = (option: ColumnConfigOption): option is DefaultColumnType =>
  option.type === 'default'

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

export const isTextColumn: TypeGuard<ColumnConfigOption, TextColumnType> = (
  option: ColumnConfigOption
): option is TextColumnType => option.type === 'text-tag'

export const colTypeGuards = {
  isSelectCol: isSelectColumn,
  isEntityTagCol: isEntityTagColumn,
  isEnumTagCol: isEnumTagColumn,
  isTextTagCol: isTextColumn,
}

// These guard attributes on col options, currently not used
// in the TypeGuard pipe,  but in logic that handles column options.
// FIXME(?): I had hoped that the discriminated union type ColumnOptionType
// above would have made guard functions like this unecessary, but I was unable to
// write some of the generic cols/prefs handling functions w/o them. Not
// sure if this is bc the types are not constructed properly.
export const hasSortOptions: TypeGuard<any, SortOptions> = (
  int: SortOptions
): int is SortOptions => int.sort !== undefined

export const hasFilterOptions: TypeGuard<any, FilterOptions> = (
  int: FilterOptions
): int is FilterOptions => int.filter !== undefined

export const hasTextOptions: TypeGuard<any, TextColumn> = (
  int: TextColumn
): int is TextColumn => int.text !== undefined

// version of NzTableQueryParams modified for relay pagination,
// replaces 'pageIndex' and 'pageSize' w/ 'fetchMore' options
export type CvcTableQueryParams = Omit<
  NzTableQueryParams,
  'pageIndex' | 'pageSize'
> & { fetchMore?: { first?: number; after?: string }; query: QueryType }

// filter option for text typeahead input filters
export type CustomFilter = { key: string; value: NzTableFilterValue }
