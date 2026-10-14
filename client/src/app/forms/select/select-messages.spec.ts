import { describe, expect, it } from 'vitest'
import {
  CVC_DEFAULT_SELECT_MESSAGES,
  CvcSelectDisplayState,
  selectNotFoundDisplay,
} from './select-messages'

const state = (
  overrides: Partial<CvcSelectDisplayState> = {}
): CvcSelectDisplayState => ({
  isOpen: true,
  searchStr: '',
  entityName: { singular: 'Disease', plural: 'Diseases' },
  minSearchStrLength: 0,
  isLoading: false,
  resultCount: 0,
  showAddForm: false,
  messages: CVC_DEFAULT_SELECT_MESSAGES,
  ...overrides,
})

describe('selectNotFoundDisplay', () => {
  it('shows nothing while the dropdown is closed', () => {
    const display = selectNotFoundDisplay(state({ isOpen: false }))
    expect(display.message).toBe('')
    expect(display.showSpinner).toBe(false)
  })

  it('prompts for more input below the minimum search length', () => {
    const display = selectNotFoundDisplay(
      state({ searchStr: 'br', minSearchStrLength: 3 })
    )
    expect(display.message).toBe(
      'Enter at least 3 characters to search Diseases'
    )
    expect(display.showSpinner).toBe(false)
  })

  it('names the param entity in the enter-query prompt', () => {
    const display = selectNotFoundDisplay(
      state({ searchStr: '', minSearchStrLength: 3, paramName: 'BRAF' })
    )
    expect(display.message).toBe(
      'Enter at least 3 characters to search BRAF Diseases'
    )
  })

  it('lists all while loading an empty query', () => {
    const display = selectNotFoundDisplay(state({ isLoading: true }))
    expect(display.message).toBe('Listing all Diseases...')
    expect(display.showSpinner).toBe(true)
  })

  it('reports the query while loading a search', () => {
    const display = selectNotFoundDisplay(
      state({ isLoading: true, searchStr: 'mela' })
    )
    expect(display.message).toBe('Searching Diseases matching "mela"...')
    expect(display.showSpinner).toBe(true)
  })

  it('reports an empty search result', () => {
    const display = selectNotFoundDisplay(state({ searchStr: 'zzz' }))
    expect(display.message).toBe('No Diseases found matching "zzz"')
    expect(display.showSpinner).toBe(false)
  })

  it('shows no message once options are rendering', () => {
    const display = selectNotFoundDisplay(
      state({ searchStr: 'mela', resultCount: 3 })
    )
    expect(display.message).toBe('')
  })

  it('passes the add-form flag through in every state', () => {
    expect(
      selectNotFoundDisplay(state({ searchStr: 'zzz', showAddForm: true }))
        .showAddForm
    ).toBe(true)
    expect(
      selectNotFoundDisplay(
        state({ searchStr: 'zzz', isLoading: true, showAddForm: true })
      ).showAddForm
    ).toBe(true)
  })
})
