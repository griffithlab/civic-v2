import { CvcEmptyValueCategory } from '@app/forms/components/empty-value/empty-value.component'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  CvcTagLabelMax,
  EntityTagRef,
  PopoverPlacement,
  TaggableTypename,
} from '@app/tags'
import { NzTableFilterList, NzTableSortOrder } from 'ng-zorro-antd/table'

/**
 * The column model.
 *
 * Replaces the managers' six-member discriminated union of column types, whose
 * own author noted (variant-manager.types.ts:335) that it never removed the need
 * for guard predicates. The cost of that design was structural: because each
 * union member was a whole column, every column type needed its own `guardType`
 * branch in each of the header, filter and cell sections, and the same
 * width/align/fixed bindings were rewritten in twelve near-identical th/td
 * blocks.
 *
 * Here the discriminant covers only the cell's *contents*. Everything to do with
 * layout lives on the column itself, so one `<th>` and one `<td>` serve every
 * column and the union is narrowed once, at the point it actually varies.
 */
export interface CvcColumn<TRow, TVars = unknown, TSortColumn extends string = string> {
  /** stable identity: addresses the column in prefs, filters and data-column */
  key: string
  label: string
  /** passed to th[nzWidth]; use px, e.g. '215px' */
  width: string
  align?: 'left' | 'center' | 'right'
  /** pins the column while the table scrolls horizontally */
  fixed?: 'left' | 'right'
  /** initial visibility; the preferences panel toggles it thereafter */
  hidden?: boolean
  /** tooltip on the column label */
  tooltip?: string
  /** keep the column out of the visible-columns panel, e.g. the select column */
  omitFromPrefs?: boolean
  /** rendered when the cell accessor yields nothing */
  emptyValue?: CvcEmptyValueCategory
  cell: CvcCellSpec<TRow>
  sort?: CvcColumnSort<TSortColumn>
  filter?: CvcColumnFilter<TVars>
}

/**
 * What to draw inside a cell.
 *
 * Every variant reads its data through an accessor rather than by indexing
 * `row[col.key]`. That retires three separate workarounds at once: the row
 * projections that synthesised `variant`/`feature`/`evidenceItem` objects purely
 * to give `cvc-tag` a `__typename`, `BaseColumnConfig.context` (read a different
 * row key), and `ObjectKeyConfig.objectKey` (pluck a field out of the value).
 * It is also checked against `TRow`, where the old templates indexed an untyped
 * `let-row`.
 *
 * An `<ng-template cvcCell="key">` in the host overrides whatever is declared
 * here, for the cases no built-in kind covers.
 */
export type CvcCellSpec<TRow> =
  | CvcSelectCell
  | CvcEntityTagCell<TRow>
  | CvcEnumTagCell<TRow>
  | CvcTextTagCell<TRow>
  | CvcTextCell<TRow>
  | CvcCustomCell

/** row checkbox; the table owns the selection, the column just marks the slot */
export interface CvcSelectCell {
  kind: 'select'
}

/** one or more `cvc-tag`s, overflowing into a `cvc-collection-tag` */
export interface CvcEntityTagCell<TRow> {
  kind: 'entity-tag'
  /** a single ref, a list, or nothing */
  ref: (row: TRow) => Maybe<EntityTagRef> | ReadonlyArray<EntityTagRef>
  /** tags shown before the rest collapse into a collection tag */
  maxTags?: number
  truncateLabel?: CvcTagLabelMax
  fullWidth?: boolean
  /** render the entity's status styling (deprecated, flagged, …) */
  showStatus?: boolean
  popoverPlacement?: PopoverPlacement
}

/** `cvc-attribute-tag` for a generated enum value */
export interface CvcEnumTagCell<TRow> {
  kind: 'enum-tag'
  value: (row: TRow) => Maybe<string>
  /** false renders just the icon, for narrow columns */
  showLabel?: boolean
  /** override when the tag cannot infer an icon from the value */
  showIcon?: string | boolean
}

/** long text shown as a tag, with the full string in a tooltip */
export interface CvcTextTagCell<TRow> {
  kind: 'text-tag'
  text: (row: TRow) => Maybe<string>
}

/** plain text, or a comma-joined list of it */
export interface CvcTextCell<TRow> {
  kind: 'text'
  text: (row: TRow) => Maybe<string | number | ReadonlyArray<string>>
  /** emphasise the active filter substring within the value */
  highlight?: boolean
}

/** drawn entirely by an `<ng-template cvcCell="key">` in the host */
export interface CvcCustomCell {
  kind: 'custom'
}

/**
 * Server-side sort for a column.
 *
 * `column` is the generated `*SortColumns` member, which closes the `any` in
 * `core/utilities/datatable-helpers.ts:13` — whose comment concedes "using `any`
 * here because the zorro table erases the type you pass into it". The table
 * carries the enum as a type parameter, so a wrong member is a compile error.
 */
export interface CvcColumnSort<TSortColumn extends string> {
  column: TSortColumn
  default?: NzTableSortOrder
  disabled?: boolean
}

export type CvcColumnFilter<TVars> =
  | CvcTextFilter<TVars>
  | CvcNumericFilter<TVars>
  | CvcEnumFilter<TVars>

interface CvcFilterBase<TVars> {
  /**
   * The query variable this filter sets.
   *
   * Typed against the query's own variables, which replaces the standalone
   * `columnKeyToQueryVariableMap` and makes a whole class of bug impossible: the
   * evidence manager's rating filter names `evidenceRating`, but the variable is
   * `$rating`, so it has always sent an unknown variable and filtered nothing.
   * Here that would not compile.
   */
  var: keyof TVars & string
}

export interface CvcTextFilter<TVars> extends CvcFilterBase<TVars> {
  kind: 'text'
  placeholder?: string
  /** normalise input before it reaches the query, e.g. 'EID123' -> 123 */
  transform?: (value: Maybe<string>) => unknown
  /**
   * Set when the column filters by NAME but is driven externally by ID — the
   * table resolves the id to a display name out of the Apollo cache.
   */
  entityTypename?: TaggableTypename
}

export interface CvcNumericFilter<TVars> extends CvcFilterBase<TVars> {
  kind: 'numeric'
  placeholder?: string
  transform?: (value: Maybe<number>) => unknown
}

export interface CvcEnumFilter<TVars> extends CvcFilterBase<TVars> {
  kind: 'enum'
  options: NzTableFilterList
}

/** a column's current filter value, keyed by column */
export type CvcFilterState = Readonly<Record<string, unknown>>

/** the active sort, or none */
export interface CvcSortState {
  key: string
  order: NzTableSortOrder
}

/** externally-driven column filter, e.g. from a sibling form field */
export interface CvcFilterChange {
  key: string
  value: unknown
}

/** externally-driven column visibility */
export interface CvcColumnPref {
  key: string
  visible: boolean
}

/** what a host passes to drive filters and visibility from outside the table */
export interface CvcTableSettings {
  filters?: ReadonlyArray<CvcFilterChange>
  preferences?: ReadonlyArray<CvcColumnPref>
}
