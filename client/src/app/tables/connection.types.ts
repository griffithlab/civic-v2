import { Maybe } from '@app/generated/civic.apollo.types'

/**
 * The relay page cursor, structurally. Every generated `PageInfo` satisfies it.
 */
export interface CvcPageInfo {
  startCursor?: Maybe<string>
  endCursor?: Maybe<string>
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface CvcEdge<TNode> {
  cursor: string
  /**
   * Optional because codegen emits `node?: X | undefined` for every connection
   * — a nullable node in the schema. Declaring it required here would make no
   * generated connection assignable, and would infer `TNode` as `X | undefined`
   * so that every cell accessor saw a possibly-undefined row.
   */
  node?: Maybe<TNode>
}

/**
 * The common shape of a CIViC connection.
 *
 * The schema has 42 `*Connection` types and they are NOT uniform, which matters
 * because getting this wrong is how a generic silently misreports counts:
 *
 * - 23 carry exactly `{ edges, nodes, pageCount, pageInfo, totalCount }`, where
 *   `totalCount` is the count *after* filtering.
 * - 13 `Browse*` connections add `filteredCount` and `lastUpdated`. On these,
 *   `totalCount` means the count *before* filtering and `filteredCount` is the
 *   filtered one — the opposite sense of the same field name.
 * - ~6 specialised ones add aggregates (`uniqueCommenters`, `eventTypes`,
 *   `revisedFieldNames`, …) that no generic table reads.
 *
 * So both count fields are optional here and neither is interpreted directly:
 * use `displayedCount`, which resolves the two conventions in one place.
 * `components/shared/table-counts` has reconciled them ad hoc for years; this
 * is the same rule with a name.
 */
export interface CvcConnection<TNode> {
  edges: ReadonlyArray<CvcEdge<TNode>>
  pageInfo: CvcPageInfo
  pageCount?: number
  totalCount?: number
  filteredCount?: number
  lastUpdated?: string
}

/**
 * How many records the current filters match.
 *
 * Prefers `filteredCount` when the connection has one, because on `Browse*`
 * connections `totalCount` ignores the filters entirely and would overstate the
 * result by the size of the whole table.
 */
export function displayedCount(
  connection: Maybe<CvcConnection<unknown>>
): Maybe<number> {
  if (!connection) return undefined
  return connection.filteredCount ?? connection.totalCount
}

/** The rows currently loaded, with any null edges dropped. */
export function connectionNodes<TNode>(
  connection: Maybe<CvcConnection<TNode>>
): TNode[] {
  if (!connection) return []
  return connection.edges.map((edge) => edge.node).filter((n): n is TNode => n != null)
}
