import {
  compressToken,
  decodeQueryModel,
  encodeQueryModel,
} from './advanced-search-url.service'
import { AdvancedSearchFilter } from './query-builder.types'

describe('advanced-search-url codec', () => {
  const query: AdvancedSearchFilter = {
    booleanOperator: 'AND',
    subFilters: [
      {
        disease: {
          booleanOperator: 'AND',
          subFilters: [{ name: { operator: 'CONTAINS', value: 'Leukemia' } }],
        },
      },
      { status: { operator: 'EQ', value: 'SUBMITTED' } },
    ],
  } as unknown as AdvancedSearchFilter

  it('round-trips an endpoint and query', () => {
    const token = encodeQueryModel('searchEvidenceItems', query)
    const decoded = decodeQueryModel(token)
    expect(decoded).not.toBeNull()
    expect(decoded!.endpoint).toBe('searchEvidenceItems')
    expect(decoded!.query).toEqual(query)
  })

  it('produces a URL-safe token (no +, /, = or whitespace)', () => {
    const token = encodeQueryModel('searchAssertions', query)
    expect(token).toMatch(/^[A-Za-z0-9$\-_.+]*$/)
  })

  it('returns null for non-token garbage', () => {
    expect(decodeQueryModel('not-a-real-token!!!')).toBeNull()
    expect(decodeQueryModel('')).toBeNull()
  })

  it('returns null for an unknown endpoint', () => {
    const token = compressToken(
      JSON.stringify({ v: 1, e: 'searchNonsense', q: query })
    )
    expect(decodeQueryModel(token)).toBeNull()
  })

  it('returns null for a mismatched envelope version', () => {
    const token = compressToken(
      JSON.stringify({ v: 999, e: 'searchAssertions', q: query })
    )
    expect(decodeQueryModel(token)).toBeNull()
  })

  it('returns null when the query payload is missing/not an object', () => {
    const token = compressToken(
      JSON.stringify({ v: 1, e: 'searchAssertions', q: 'oops' })
    )
    expect(decodeQueryModel(token)).toBeNull()
  })
})
