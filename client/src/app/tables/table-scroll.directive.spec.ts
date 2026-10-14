import { PageInfo } from '@app/generated/civic.apollo.types'
import { describe, expect, it } from 'vitest'
import { nextFetch } from './table-scroll.directive'

function pageInfo(over: Partial<PageInfo> = {}): PageInfo {
  return {
    __typename: 'PageInfo',
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: 'start',
    endCursor: 'cursor-1',
    ...over,
  }
}

describe('nextFetch', () => {
  it('asks for the next page after the current end cursor', () => {
    expect(nextFetch(pageInfo(), 50, undefined)).toEqual({
      first: 50,
      after: 'cursor-1',
    })
  })

  it('asks for nothing when the connection is exhausted', () => {
    expect(nextFetch(pageInfo({ hasNextPage: false }), 50, undefined)).toBeUndefined()
  })

  it('asks for nothing before a connection has loaded', () => {
    expect(nextFetch(undefined, 50, undefined)).toBeUndefined()
  })

  it('asks for nothing when there is no cursor to page from', () => {
    // an empty connection reports hasNextPage without an endCursor
    // (Maybe<T> is T | undefined in this codebase, not T | null)
    expect(nextFetch(pageInfo({ endCursor: undefined }), 50, undefined)).toBeUndefined()
  })

  /**
   * The guard that makes the looser bottom-detection safe. Scrolling around
   * near the end fires repeatedly; without this each of those would append the
   * same page again.
   */
  it('does not re-request the cursor already in flight', () => {
    expect(nextFetch(pageInfo({ endCursor: 'cursor-1' }), 50, 'cursor-1')).toBeUndefined()
  })

  it('requests again once the cursor has advanced', () => {
    expect(nextFetch(pageInfo({ endCursor: 'cursor-2' }), 50, 'cursor-1')).toEqual({
      first: 50,
      after: 'cursor-2',
    })
  })

  it('carries the configured page size', () => {
    expect(nextFetch(pageInfo(), 25, undefined)?.first).toBe(25)
  })
})
