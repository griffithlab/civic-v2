import { OperationDefinitionNode } from 'graphql'
import { describe, expect, it } from 'vitest'
import { EvidenceManagerDocument } from './evidence-manager.query.gql.generated'
import {
  EvidenceManagerConfig,
  columnKeyToQueryVariableMap,
} from './evidence-manager.config'

/**
 * getQueryFilterParams sets a filter's COLUMN KEY on the query variables unless
 * columnKeyToQueryVariableMap redirects it. So a filterable column whose key is
 * not a query variable, and has no map entry, sets something the query never
 * declares — and filters nothing, silently, with no type error and no failure.
 *
 * That is exactly how the star-rating filter shipped broken: keyed
 * `evidenceRating`, while the query's variable is `rating` (passed as
 * `evidenceRating: $rating`). Types cannot catch an omission from the map, so
 * this does.
 */
const queryVariableNames = (): Set<string> => {
  const operation = EvidenceManagerDocument.definitions.find(
    (d): d is OperationDefinitionNode => d.kind === 'OperationDefinition'
  )
  return new Set(
    (operation?.variableDefinitions ?? []).map((v) => v.variable.name.value)
  )
}

/**
 * Filter columns the API genuinely cannot serve, kept explicit rather than
 * silently tolerated. A ratchet, not a backlog: it should only ever shrink.
 *
 * It held `therapyInteractionType` until `evidenceItems` grew a
 * `therapyInteractionType` argument (server: top_level_evidence_items.rb,
 * guarded by evidence_items_filter_test.rb). Now empty, which is the point —
 * every filter menu in this table changes the query.
 */
const UNSUPPORTED_BY_THE_API: string[] = []

const unreachableFilters = () => {
  const variables = queryVariableNames()
  return new EvidenceManagerConfig()
    .get()
    .filter((col) => 'filter' in col && col.filter)
    .map((col) => ({
      key: col.key,
      sends: columnKeyToQueryVariableMap[col.key] ?? col.key,
    }))
    .filter(({ sends }) => !variables.has(sends))
}

describe('evidence manager filter columns', () => {
  it('every filterable column reaches a variable the query declares', () => {
    const unexpected = unreachableFilters().filter(
      ({ key }) => !UNSUPPORTED_BY_THE_API.includes(key)
    )
    expect(unexpected).toEqual([])
  })

  // fails if the API grows the argument, or the control is removed — either way
  // this list should shrink, and nobody should have to rediscover why
  it('lists exactly the filters the API cannot support', () => {
    expect(unreachableFilters().map((f) => f.key)).toEqual(
      UNSUPPORTED_BY_THE_API
    )
  })

  it('routes the rating column to the query variable that exists', () => {
    expect(columnKeyToQueryVariableMap.evidenceRating).toBe('rating')
    expect(queryVariableNames().has('rating')).toBe(true)
    expect(queryVariableNames().has('evidenceRating')).toBe(false)
  })
})
