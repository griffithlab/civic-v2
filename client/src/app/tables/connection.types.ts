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
 * The common shape of a CIViC connection. The 42 `*Connection` types aren't
 * uniform: on most, `totalCount` is the filtered count, but the 13 `Browse*`
 * connections use `totalCount` for the unfiltered count and add
 * `filteredCount`. Both fields are optional here and neither is read
 * directly; use `displayedCount`, which resolves the two conventions.
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
