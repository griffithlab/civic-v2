// QueryData/QueryVars are imported from the file rather than the forms/select
// barrel, which does not re-export them. Deep import is deliberate and agreed
// with the forms workstream, which has pinned both signatures; duplicating them
// here was the alternative and is strictly worse.
import {
  AnyQuery,
  QueryData,
  QueryVars,
} from '@app/forms/select/entity-select-config'
import { OperationVariables } from '@apollo/client'
import { Maybe } from '@app/generated/civic.apollo.types'
import { QueryRef } from 'apollo-angular'
import { CvcConnection } from './connection.types'
import { CvcColumn } from './entity-table.types'

/**
 * Structural subset of a generated apollo-angular query service, as the table
 * uses it. Mirrors `CvcSelectQuery`, but over `watch` rather than `fetch`: the
 * table holds one long-lived QueryRef so `fetchMore` can append pages into the
 * same cache entry.
 */
export interface CvcTableQuery<TData, TVars extends OperationVariables> {
  watch(variables?: TVars, options?: unknown): QueryRef<TData, TVars>
}

/**
 * Everything a table needs beyond its template.
 *
 * Follows `entitySelectConfig` (forms/select/entity-select-config.ts:93): infer
 * every query type from the arguments, type-check the literal, then erase the
 * type parameters so the component carries only its row type. That erasure is
 * the whole point — the previous attempt at a generic table foundered on type
 * parameters that had to be spelled out at every use.
 */
export interface EntityTableConfig<
  TQuery extends AnyQuery,
  TNode,
  TSortColumn extends string,
> {
  /** the generated *GQL service; TData and TVars are inferred from it */
  query: TQuery
  /** picks the connection out of the query result */
  connection: (data: Maybe<QueryData<TQuery>>) => Maybe<CvcConnection<TNode>>
  /** rendered left-to-right in array order */
  columns: CvcColumn<TNode, QueryVars<TQuery>, TSortColumn>[]
  /**
   * Rows per page, for the first query as well as subsequent ones.
   *
   * Both managers omit `first` on the initial and refetched queries and set it
   * only when paging, so page one silently takes the server's
   * `default_max_page_size` of 100 while every later page is 50.
   */
  pageSize?: number
  /**
   * Variables that are always sent and are not user-editable — a browse table's
   * `diseaseId`, an embedded table's `sourceId`. User filters are merged over
   * these, so a column filter cannot silently widen the table's scope.
   */
  scope?: Partial<QueryVars<TQuery>>
}

/** An EntityTableConfig with its query type parameters erased. */
export interface EntityTableSpec<TNode> {
  query: CvcTableQuery<unknown, Record<string, unknown>>
  connection: (data: unknown) => Maybe<CvcConnection<TNode>>
  columns: CvcColumn<TNode, Record<string, unknown>, string>[]
  pageSize: number
  scope: Record<string, unknown>
}

/** matches the server's own default, so behaviour is unchanged when unset */
export const DEFAULT_PAGE_SIZE = 50

/**
 * Type-checks a table config literal against its query, then erases the query
 * types. Inference does the work: `TNode` comes from `connection`'s return,
 * `TSortColumn` from the sort members the columns actually use, and the filter
 * `var` of every column is checked against that query's real variables.
 */
export function entityTableConfig<
  TQuery extends AnyQuery,
  TNode,
  TSortColumn extends string,
>(
  config: EntityTableConfig<TQuery, TNode, TSortColumn>
): EntityTableSpec<TNode> {
  return {
    ...config,
    pageSize: config.pageSize ?? DEFAULT_PAGE_SIZE,
    scope: (config.scope ?? {}) as Record<string, unknown>,
  } as unknown as EntityTableSpec<TNode>
}
