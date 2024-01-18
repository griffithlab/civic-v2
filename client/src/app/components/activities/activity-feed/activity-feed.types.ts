import {
  EventAction,
  EventFeedMode,
  SubscribableQueryInput,
} from '@app/generated/civic.apollo'

export type ActivityFeedTagDisplayOption =
  | 'hideSubject'
  | 'hideUser'
  | 'hideOrg'
  | 'displayAll'

export type CvcActivityFeedPrefs = {
  includeAutomatedEvents?: boolean
  mode?: EventFeedMode
  pageSize?: number
  pollEvents?: number
  showFilters?: boolean
  tagDisplay?: ActivityFeedTagDisplayOption
}

export type CvcActivityFeedFilters = {
  organizationId?: number
  originatingUserId?: number
  eventType?: EventAction
  subject?: SubscribableQueryInput
  userId?: number
}

export type FetchMoreParams = { first: number; after: string }

export type CvcActivityFeedQueryParams = {
  filters?: CvcActivityFeedFilters
  prefs?: CvcActivityFeedPrefs
  fetchMore?: { first?: number; after?: string }
}
