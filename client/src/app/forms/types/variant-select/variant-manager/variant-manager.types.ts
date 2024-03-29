import { TemplateRef } from '@angular/core'
import { ApolloError } from '@apollo/client/core'
import { EnumOutputStyle } from '@app/core/pipes/evidence-enum-display-type'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import { CvcEmptyValueCategory } from '@app/forms/components/empty-value/empty-value.component'
import { CvcTagLabelMax } from '@app/forms/components/entity-tag/entity-tag.component'
import {
  EvidenceItem,
  VariantManagerFieldsFragment,
  VariantManagerQuery,
  VariantManagerQueryVariables,
  EvidenceSortColumns,
  Maybe,
  PageInfo,
  SortDirection,
  BrowseVariant,
  VariantsSortColumns,
  Gene,
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

export type VariantManagerEdge = {
  cursor: string
  node?: Maybe<VariantManagerFieldsFragment>
}

// apollo connection that provides table row data & metadata
export type VariantManagerConnection = VariantManagerQuery['browseVariants']
// export type VariantManagerConnection = {
//   totalCount: number
//   pageCount: number
//   pageInfo: PageInfo
//   nodes: VariantManagerFieldsFragment[]
// }

// additional columns added to row data for table templates, logic
type VariantManagerRowDataExtra = {
  variant: Pick<BrowseVariant, 'id' | 'name' | 'link'>
  // need evidence object for entity tag in selectEntity column
  gene: Pick<Gene, 'id' | 'name' | 'link'>
  // additional boolean column to handle row selected state
  selected: boolean
}

// choose table columns from response connection node
// & combine with options extra data
export type VariantManagerRowData = Pick<
  VariantManagerFieldsFragment,
  | 'id'
  | 'name'
  | 'geneId'
  | 'geneName'
  | 'geneLink'
  | 'diseases'
  | 'therapies'
  | 'aliases'
> &
  VariantManagerRowDataExtra

// list of columns that require conversion from their column key
// to a filter query variable. e.g. 'disease' -> 'diseaseName'
export type ConvertedQueryVar = keyof Pick<
  VariantManagerQueryVariables,
  | 'variantName'
  | 'variantAlias'
  | 'diseaseName'
  | 'therapyName'
  | 'entrezSymbol'
  | 'variantAlias'
>

// convenience type for various map keys
export type VariantManagerColKey = keyof VariantManagerRowData

// each col type has different settings for nz-table features, e.g. filter/sort
// and cvc-variant-manager features, e.g. entity-tag display options
export type VariantManagerColType =
  | 'default' // short strings, e.g. labels, counts
  | 'hidden' // hidden column, e.g. id
  | 'select' // select column, displays checkboxes for row selection
  | 'entity-tag' // display col value with entity-tag
  | 'enum-tag' // display cell data w/ attribute-tag
  | 'text-tag' // long strings or simple sanitized HTML, e.g. descriptions, summaries

export type VariantManagerColSortMap = {
  [key in VariantManagerColKey]?: VariantsSortColumns
}

export type VariantManagerColQueryMap = {
  [key in VariantManagerColKey]?: ConvertedQueryVar
}

// array of column configs, will be rendered left-to-right in array order
export type VariantManagerTableConfig = ColumnConfig[]

interface BaseColumnConfig {
  key: VariantManagerColKey
  type: VariantManagerColType
  label: string // displayed in col header
  width: string // passed to th nzWidth, use px: '30px'
  tooltip?: string // label tooltip
  emphasize?: boolean // emphasize filter values in string, tags?
  hidden?: boolean // toggle column visibilitiy
  context?: VariantManagerColKey // specify another row key as source for cell context data
  align?: 'left' | 'center' | 'right' | null // passed to th/td nzAlign
  emptyValueCategory?: CvcEmptyValueCategory // passed to cvc-empty-value component
}

// options list and changes stream for col filters
interface FilterConfig {
  filter: {
    options: NzTableFilterList // options displayed in filter dropdown
    changes?: Subject<CvcFilterChange>
  }
}

// string/number input filter
// NOTE: uses only a single NzTableFilterList option. Its key will used
// as the input placeholder, value will set its default. If col will be
// filterable via cvcTableParams, and additionally will need to set input
// value to an entity name, given an id (e.g. col 'disease',
// query var 'diseaseName', given 'diseaseId'), a typename will need
// to be provided to build the cache query.
interface InputFilterConfig {
  filter: {
    inputType: 'default' | 'numeric'
    typename?: string
    options: [{ key: string; value: string | number | null }]
    changes?: Subject<CvcFilterChange>
  }
}

// default sort order & changes stream for col filters
export interface SortConfig {
  sort: {
    default?: NzTableSortOrder
    changes?: Subject<CvcSortChange>
  }
}

// checkbox display & changes stream for selection col's
// header and row cells
interface SelectionConfig {
  checkbox: {
    th: {
      showCheckbox: boolean
      checkedChange?: Subject<RowSelection> // TODO(?): apply checked updates to all rows
    }
    td: {
      showCheckbox: boolean
      checkedChange?: Subject<RowSelection> // apply select changes to row
    }
  }
}

// passed to nz-tables fixedLeft/Right inputs
interface FixedConfig {
  fixedLeft?: true
  fixedRight?: true
}

// provides a key to pluck a value from a column object,
// currently only used by default col to display static values on objects
interface ObjectKeyConfig {
  objectKey?: string
}

interface TagConfig {
  tag?: {
    showLabel?: EnumOutputStyle | boolean
    showIcon?: string | boolean
    truncateLabel?: CvcTagLabelMax
    fullWidth?: boolean
    maxTags?: number // max tags if value is tag array
  }
}

// most entity tag cols can be customized using TagConfig.
// if showStatus set to true, tag will display status styles.
// NOTE: use BaseColumnConfig's 'context' option if it's necessary
// to render an entity tag in a column whos row[colKey] data
// is not a LinkableEntity, e.g. variant-manager table's 'id' col
interface EntityTagConfig {
  showStatus?: boolean // display tag status indicator styles
}

interface TextTagConfig {
  text?: {}
}

// displays row[key] value with attribute-tag component.
// NOTE: use TagConfig for different cvc-attribute-tag displays in enum-tag cols:
// - toggle showLabel off for a little mini-tag w/ just the icon.
// - if attribute-tag cannot automatically pick the correct icon,
// set showIcon to the name of any nz-icon, and the tag will display that
interface EnumTagConfig {}

export type ColumnConfig =
  | DefaultColumnType
  | HiddenColumnType
  | SelectColumnType
  | EntityTagType
  | EnumTagType
  | TextTagType

export interface DefaultColumnType
  extends BaseColumnConfig,
    FixedConfig,
    InputFilterConfig,
    SortConfig,
    ObjectKeyConfig {
  type: 'default'
}

export interface HiddenColumnType extends BaseColumnConfig {
  type: 'hidden'
  hidden: true
}

// displays a checkbox for the table's select feature
export interface SelectColumnType
  extends BaseColumnConfig,
    SelectionConfig,
    FixedConfig {
  type: 'select'
}

export interface EntityTagType
  extends BaseColumnConfig,
    TagConfig,
    EntityTagConfig,
    SortConfig,
    InputFilterConfig,
    FixedConfig {
  type: 'entity-tag'
}

export interface EnumTagType
  extends BaseColumnConfig,
    TagConfig,
    EnumTagConfig,
    SortConfig,
    FilterConfig,
    FixedConfig {
  type: 'enum-tag'
}

export interface TextTagType
  extends BaseColumnConfig,
    TextTagConfig,
    SortConfig,
    InputFilterConfig,
    FixedConfig {
  type: 'text-tag'
}

// types to drive the preferences panel
export type ColumnPrefsOption = {
  label: string
  value: string
  checked?: boolean
}

export type ColumnPrefsModel = ColumnPrefsOption[]

export type QueryParamKey = keyof VariantManagerQueryVariables

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
export const isDefaultColumn: TypeGuard<ColumnConfig, DefaultColumnType> = (
  option: ColumnConfig
): option is DefaultColumnType => option.type === 'default'

export const isHiddenColumn: TypeGuard<ColumnConfig, HiddenColumnType> = (
  option: ColumnConfig
): option is HiddenColumnType => option.type === 'hidden'

export const isSelectColumn: TypeGuard<ColumnConfig, SelectColumnType> = (
  option: ColumnConfig
): option is SelectColumnType => option.type === 'select'

export const isEntityTagOptions: TypeGuard<ColumnConfig, EntityTagType> = (
  option: ColumnConfig
): option is EntityTagType => option.type === 'entity-tag'

export const isEnumTagOptions: TypeGuard<ColumnConfig, EnumTagType> = (
  option: ColumnConfig
): option is EnumTagType => option.type === 'enum-tag'

export const isTextTagOptions: TypeGuard<ColumnConfig, TextTagType> = (
  option: ColumnConfig
): option is TextTagType => option.type === 'text-tag'

export const colTypeGuards = {
  isDefaultCol: isDefaultColumn,
  isSelectCol: isSelectColumn,
  isEntityTagCol: isEntityTagOptions,
  isEnumTagCol: isEnumTagOptions,
  isTextTagCol: isTextTagOptions,
}

// These guard attributes on col options, currently not used
// in the TypeGuard pipe,  but in logic that handles column options.
// FIXME(?): I had hoped that the discriminated union type ColumnOptionType
// above would have made guard functions like this unnecessary, but I was unable to
// write some of the generic cols/prefs handling functions w/o them. Not
// sure if this is bc the types are not constructed properly.
export const hasSortOptions: TypeGuard<any, SortConfig> = (
  int: SortConfig
): int is SortConfig => int.sort !== undefined

export const hasFilterOptions: TypeGuard<any, FilterConfig> = (
  int: FilterConfig
): int is FilterConfig => int.filter !== undefined

export const hasInputFilterOptions: TypeGuard<any, InputFilterConfig> = (
  int: InputFilterConfig
): int is InputFilterConfig => int.filter.inputType !== undefined

export const hasTextOptions: TypeGuard<any, TextTagConfig> = (
  int: TextTagConfig
): int is TextTagConfig => int.text !== undefined

// version of NzTableQueryParams modified for relay pagination,
// replaces 'pageIndex' and 'pageSize' w/ 'fetchMore' options
export type CvcTableQueryParams = Omit<
  NzTableQueryParams,
  'pageIndex' | 'pageSize'
> & { fetchMore?: { first?: number; after?: string }; query: QueryType }

// filter option for text typeahead input filters
export type CvcFilterChange = { key: string; value: NzTableFilterValue }
export type CvcSortChange = { key: string; value: NzTableSortOrder }
