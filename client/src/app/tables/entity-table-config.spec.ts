import { EvidenceManagerGQL } from '@app/forms/types/evidence-select/evidence-manager/evidence-manager.query.gql.generated'
import { EvidenceSortColumns } from '@app/generated/civic.apollo.types'
import { describe, expect, it } from 'vitest'
import {
  CvcConnection,
  connectionNodes,
  displayedCount,
} from './connection.types'
import { DEFAULT_PAGE_SIZE, entityTableConfig } from './entity-table-config'

/**
 * These are mostly *type* assertions. They earn their place because the whole
 * design rests on the config literal being checked against its own query — the
 * previous generic-table attempt failed at exactly this point — and because a
 * type guarantee that is never exercised quietly stops holding.
 */

// a stand-in service; nothing here executes a query
const gql = { watch: () => ({}) } as unknown as EvidenceManagerGQL

describe('entityTableConfig', () => {
  it('defaults the page size, so the first page matches later ones', () => {
    const spec = entityTableConfig({
      query: gql,
      connection: (data) => data?.evidenceItems,
      columns: [],
    })

    // both managers omit `first` on the initial query and set it only when
    // paging, so page one takes the server's default of 100 and every later
    // page is 50. One value now covers both.
    expect(spec.pageSize).toBe(DEFAULT_PAGE_SIZE)
  })

  it('keeps an explicit page size and defaults the scope', () => {
    const spec = entityTableConfig({
      query: gql,
      connection: (data) => data?.evidenceItems,
      columns: [],
      pageSize: 25,
    })

    expect(spec.pageSize).toBe(25)
    expect(spec.scope).toEqual({})
  })

  it('accepts a column whose filter names a real query variable', () => {
    const spec = entityTableConfig({
      query: gql,
      connection: (data) => data?.evidenceItems,
      columns: [
        {
          key: 'disease',
          label: 'Disease',
          width: '240px',
          cell: { kind: 'entity-tag', ref: (row) => row.disease },
          sort: { column: EvidenceSortColumns.DiseaseName },
          filter: { kind: 'text', var: 'diseaseName' },
        },
      ],
    })

    expect(spec.columns).toHaveLength(1)
  })

  /**
   * The bug this design exists to make impossible.
   *
   * The evidence manager has a star-rating column keyed `evidenceRating` and no
   * entry mapping it to a query variable, so it sets `evidenceRating` on the
   * variables object. The query's variable is `rating`. It has therefore always
   * sent an unrecognised variable and filtered nothing at all.
   */
  it('rejects a filter naming a variable the query does not have', () => {
    entityTableConfig({
      query: gql,
      connection: (data) => data?.evidenceItems,
      columns: [
        {
          key: 'evidenceRating',
          label: 'Rating',
          width: '45px',
          // a custom cell keeps this case about the filter alone: the
          // deliberate error below collapses TNode inference for the whole
          // call, which would make an accessor's `row` parameter `unknown`
          cell: { kind: 'custom' },
          // @ts-expect-error 'evidenceRating' is not a variable of this query;
          // the real one is 'rating'. Removing this line must fail the build.
          filter: { kind: 'numeric', var: 'evidenceRating' },
        },
      ],
    })
  })

  it('types cell accessors against the row', () => {
    entityTableConfig({
      query: gql,
      connection: (data) => data?.evidenceItems,
      columns: [
        {
          key: 'description',
          label: 'Description',
          width: '40px',
          // @ts-expect-error EvidenceItem has no `summary` field
          cell: { kind: 'text-tag', text: (row) => row.summary },
        },
      ],
    })
  })
})

describe('displayedCount', () => {
  function connection(over: Partial<CvcConnection<unknown>>): CvcConnection<unknown> {
    return {
      edges: [],
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
      ...over,
    }
  }

  it('uses totalCount when that is the filtered count', () => {
    // plain connections: "the total number of records in this filtered collection"
    expect(displayedCount(connection({ totalCount: 42 }))).toBe(42)
  })

  it('prefers filteredCount, because Browse* totalCount ignores filters', () => {
    // Browse* connections: totalCount is "regardless of any filtering", so
    // reading it would overstate the result by the size of the whole table
    expect(displayedCount(connection({ totalCount: 11190, filteredCount: 1488 }))).toBe(
      1488
    )
  })

  it('has no count before a connection arrives', () => {
    expect(displayedCount(undefined)).toBeUndefined()
  })
})

describe('connectionNodes', () => {
  it('drops null nodes rather than surfacing holes to cell accessors', () => {
    const nodes = connectionNodes({
      edges: [
        { cursor: 'a', node: { id: 1 } },
        { cursor: 'b', node: null as unknown as { id: number } },
        { cursor: 'c', node: { id: 3 } },
      ],
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    })

    expect(nodes).toEqual([{ id: 1 }, { id: 3 }])
  })

  it('is empty before a connection arrives', () => {
    expect(connectionNodes(undefined)).toEqual([])
  })
})
