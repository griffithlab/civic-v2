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
 * Known dead filter, kept explicit rather than silently tolerated. The Therapy
 * Interaction column offers a filter menu, but `evidenceItems` has no
 * interaction argument at all (see QueryEvidenceItemsArgs) — so unlike the
 * rating filter this cannot be fixed by routing it to the right variable. It
 * needs either a server-side filter or the removal of the control, which is a
 * product decision, not a mapping one.
 */
const UNSUPPORTED_BY_THE_API = ['therapyInteractionType']

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
