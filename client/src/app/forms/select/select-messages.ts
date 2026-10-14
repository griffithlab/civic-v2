import { CvcSelectEntityName } from './select.types'

export type CvcSelectMessageFn = (
  entityName: string,
  searchStr: string,
  paramName?: string,
  minSearchStrLength?: number
) => string

export interface CvcSelectMessages {
  search: CvcSelectMessageFn
  searchAll: CvcSelectMessageFn
  searchParam: CvcSelectMessageFn
  searchParamAll: CvcSelectMessageFn
  searchEnterQuery: CvcSelectMessageFn
  searchEnterQueryAll: CvcSelectMessageFn
  empty: CvcSelectMessageFn
  emptyAll: CvcSelectMessageFn
  emptyParam: CvcSelectMessageFn
  emptyParamAll: CvcSelectMessageFn
}

export const CVC_DEFAULT_SELECT_MESSAGES: CvcSelectMessages = {
  search: (entityName, query) => `Searching ${entityName} matching "${query}"...`,
  searchAll: (entityName) => `Listing all ${entityName}...`,
  searchParam: (entityName, query, paramName) =>
    `Searching ${paramName} ${entityName} matching "${query}"...`,
  searchParamAll: (entityName, _query, paramName) =>
    `Listing all ${paramName} ${entityName}...`,
  searchEnterQuery: (entityName, _query, paramName, minLength) =>
    `Enter at least ${minLength} characters to search ${paramName} ${entityName}`,
  searchEnterQueryAll: (entityName, _query, _paramName, minLength) =>
    `Enter at least ${minLength} characters to search ${entityName}`,
  empty: (entityName, query) => `No ${entityName} found matching "${query}"`,
  emptyAll: (entityName) => `No ${entityName} found.`,
  emptyParam: (entityName, query, paramName) =>
    `No ${paramName} ${entityName} found matching "${query}"`,
  emptyParamAll: (entityName, _query, paramName) =>
    `No ${paramName} ${entityName} found`,
}

/** What nz-select's notFound slot shows for a given select state. */
export interface CvcSelectNotFoundDisplay {
  message: string
  searchStr: string
  showAddForm: boolean
  showSpinner: boolean
}

export interface CvcSelectDisplayState {
  isOpen: boolean
  searchStr: string
  entityName: CvcSelectEntityName
  paramName?: string
  minSearchStrLength: number
  isLoading: boolean
  resultCount: number
  showAddForm: boolean
  messages: CvcSelectMessages
}

/**
 * Pure derivation of the dropdown's not-found slot. The old implementation
 * tracked an open/closed transition across emissions to pick an "initial open"
 * message; the branches below reproduce every message it could show without
 * that hidden state, so this stays a plain function of the current state.
 */
export function selectNotFoundDisplay(
  state: CvcSelectDisplayState
): CvcSelectNotFoundDisplay {
  const {
    entityName,
    searchStr,
    paramName,
    minSearchStrLength,
    messages,
  } = state
  const name = entityName.plural
  const hasParam = paramName !== undefined
  const base = { searchStr, showAddForm: state.showAddForm }

  if (!state.isOpen) {
    return { ...base, showSpinner: false, message: '' }
  }

  // search string too short to query: prompt for more input
  if (searchStr.length < minSearchStrLength) {
    const fn = hasParam
      ? messages.searchEnterQuery
      : messages.searchEnterQueryAll
    return {
      ...base,
      showSpinner: false,
      message: fn(name, searchStr, paramName, minSearchStrLength),
    }
  }

  if (state.isLoading) {
    const fn =
      searchStr.length > 0
        ? hasParam
          ? messages.searchParam
          : messages.search
        : hasParam
          ? messages.searchParamAll
          : messages.searchAll
    return {
      ...base,
      showSpinner: true,
      message: fn(name, searchStr, paramName),
    }
  }

  if (state.resultCount === 0) {
    const fn =
      searchStr.length > 0
        ? hasParam
          ? messages.emptyParam
          : messages.empty
        : hasParam
          ? messages.emptyParamAll
          : messages.emptyAll
    return {
      ...base,
      showSpinner: false,
      message: fn(name, searchStr, paramName),
    }
  }

  // options are rendering; nz-select never displays the notFound slot
  return { ...base, showSpinner: false, message: '' }
}
