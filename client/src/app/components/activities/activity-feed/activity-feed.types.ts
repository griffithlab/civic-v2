import {
  EventFeedMode,
  SubscribableQueryInput,
  User,
  Organization,
  ActivitySubjectInput,
  ActivityTypeInput,
  Maybe,
  ActivityFeedQueryVariables,
  DateSortColumns,
  DateSort,
  SortDirection,
} from '@app/generated/civic.apollo'

export type ActivityFeedTagDisplayOption =
  | 'displayAll'
  | 'hideOrg'
  | 'hideSubject'
  | 'hideUser'

// settings state values (UI control values)
export type ActivityFeedSettings = {
  first: number
  scope: ActivityFeedScope
  includeAutomatedEvents: boolean
  showFilters: boolean
  requestDetails: boolean
}

// filter state values (UI control values)
export type ActivityFeedFilters = {
  activityType: ActivityTypeInput[]
  organizationId: number[]
  subjectType: ActivitySubjectInput[]
  userId: number[]
  occurredAfter: Date | null
  occurredBefore: Date | null
  sortByColumn: DateSortColumns
  sortByDirection: SortDirection
}

// filter query variables (query variables for the feed query)
export type ActivityFeedFilterVariables = {
  activityType: Maybe<ActivityTypeInput[]>
  organizationId: Maybe<number[]>
  subjectType: Maybe<ActivitySubjectInput[]>
  userId: Maybe<number[]>
  occurredAfter: Maybe<string>
  occurredBefore: Maybe<string>
  sortBy: Maybe<DateSort>
}

export type ActivityFeedFilterKeys = keyof ActivityFeedFilters
export type ActivityFeedFilterOptions = {
  activityTypes: ActivityTypeInput[]
  uniqueParticipants: User[]
  participatingOrganizations: Organization[]
  subjectTypes: ActivitySubjectInput[]
  sortColumns: DateSortColumns[]
  sortDirections: SortDirection[]
}

export type ActivityFeedCounts = {
  total: number
  unfiltered: number
  page: number
  rows: number
}

export type FetchParams = {
  first?: number
  after?: string
  before?: number
  last?: string
}

// query params object composed of filter and settings UI values,
// to be converted to query variables for the feed query
export type ActivityFeedQueryParams = {
  filters: ActivityFeedFilters
  settings: ActivityFeedSettings
}

// query events can either refresh the entire feed list, or fetch more results
export type FeedQueryType = 'refetch' | 'fetchMore'

export type FeedQueryFetchMoreEvent = {
  type: 'fetchMore'
  fetch: FetchParams
  query: never
}

export type FeedQueryRefetchEvent = {
  type: 'refetch'
  query: ActivityFeedQueryVariables
  fetch: never
}

export type FeedQueryEvent = FeedQueryFetchMoreEvent | FeedQueryRefetchEvent

// Organization mode feed scope queries do not specify a subject or user
type ScopeOrganization = {
  mode: EventFeedMode.Organization
  organizationId: number
  subject?: never
  userId?: never
}

// Subject mode feed scope queries do not specify an organization or user
type ScopeSubject = {
  mode: EventFeedMode.Subject
  subject: SubscribableQueryInput
  organizationId?: never
  userId?: never
}

// User mode feed scope queries do not specify an organization or subject
type ScopeUser = {
  mode: EventFeedMode.User
  userId: number
  organizationId?: never
  subject?: never
}

// Unscoped mode feed queries do not specify a organization, subject, or user
type ScopeUnscoped = {
  mode: EventFeedMode.Unscoped
  organizationId?: number[]
  userId?: number[]
  subject?: never
}

// FeedScope types help configure the query & UI depending on EventFeedMode
export type ActivityFeedScope =
  | ScopeOrganization
  | ScopeSubject
  | ScopeUser
  | ScopeUnscoped

export type ActivityFeedSettingsVariables = {
  first: number
  includeAutomatedEvents: boolean
  showFilters: boolean
  requestDetails: boolean
  mode: EventFeedMode
  subject?: SubscribableQueryInput
  organizationId?: number[]
  userId?: number[]
}
// helps with type narrowing, mainly for Object.keys()
// from: https://www.totaltypescript.com/iterate-over-object-keys-in-typescript
export function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x
}
