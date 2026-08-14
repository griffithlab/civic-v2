import { Maybe } from '@app/generated/civic.apollo.types'
import { TaggableTypename } from '@app/tags'
import { Apollo, Query } from 'apollo-angular'
import { Observable } from 'rxjs'
import { CvcSelectEntityName } from './select.types'

/** Minimum shape a typeahead result needs to render as an option and a tag. */
export interface CvcEntitySelectResult {
  readonly id: number
  readonly __typename: string
  readonly name: string
}

/** Any generated apollo-angular query service. */
export type AnyQuery = Query<any, any>

/**
 * Query type extraction. `Q extends Query<infer D, any>` cannot recover the
 * data type — TData sits in invariant positions on Query and the inference
 * collapses to never — so the data type comes from fetch()'s return instead,
 * where it is covariant. Variables do infer from the class directly.
 */
export type QueryData<Q extends AnyQuery> =
  ReturnType<Q['fetch']> extends Observable<Apollo.QueryResult<infer D>>
    ? D
    : never
export type QueryVars<Q extends AnyQuery> =
  Q extends Query<any, infer V> ? V : never

/**
 * Structural subset of a generated query service used at runtime. Sidesteps
 * `Query#fetch`'s `{} extends TVariables` conditional tuple, which cannot be
 * resolved for a generic TVariables.
 */
export interface CvcSelectQuery<TData> {
  fetch(options: any): Observable<Apollo.QueryResult<TData>>
}

/**
 * Everything an entity-select field needs beyond its template: which entity it
 * selects, how to search for it, and how to fetch one by id.
 */
export interface EntitySelectConfig<
  TResult extends CvcEntitySelectResult,
  TTypeahead extends AnyQuery,
  TTag extends AnyQuery,
  TParam = void,
> {
  entityName: CvcSelectEntityName
  /** static typename, or a resolver for polymorphic results (Variant, Feature) */
  typename: TaggableTypename | ((result: TResult) => TaggableTypename)
  typeahead: TTypeahead
  typeaheadVars: (search: string, param: TParam) => QueryVars<TTypeahead>
  typeaheadResults: (data: Maybe<QueryData<TTypeahead>>) => TResult[]
  /**
   * Fetched cache-first for each already-selected id. Its result is not
   * rendered: the fetch exists to put the entity's Linkable* fragment in the
   * cache (CvcTag reads from there via watchFragment) and to recover the
   * concrete typename for polymorphic fields.
   */
  tag: {
    query: TTag
    vars: (id: number) => QueryVars<TTag>
    result: (data: Maybe<QueryData<TTag>>) => Maybe<TResult>
  }
  minSearchStrLength?: number
}

/** An EntitySelectConfig with its query type parameters erased. */
export interface EntitySelectSpec<
  TResult extends CvcEntitySelectResult,
  TParam = void,
> {
  entityName: CvcSelectEntityName
  typename: TaggableTypename | ((result: TResult) => TaggableTypename)
  typeahead: CvcSelectQuery<any>
  typeaheadVars: (search: string, param: TParam) => any
  typeaheadResults: (data: any) => TResult[]
  tag: {
    query: CvcSelectQuery<any>
    vars: (id: number) => any
    result: (data: any) => Maybe<TResult>
  }
  minSearchStrLength?: number
}

/**
 * Type-checks a config literal — inferring every query type from the GQL
 * services passed in, where the old mixin made each field spell out eleven
 * explicit type arguments — then erases them so field classes carry only
 * their result type.
 */
export function entitySelectConfig<
  TResult extends CvcEntitySelectResult,
  TTypeahead extends AnyQuery,
  TTag extends AnyQuery,
  TParam = void,
>(
  config: EntitySelectConfig<TResult, TTypeahead, TTag, TParam>
): EntitySelectSpec<TResult, TParam> {
  return config as unknown as EntitySelectSpec<TResult, TParam>
}
