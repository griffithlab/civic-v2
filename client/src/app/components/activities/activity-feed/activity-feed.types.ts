import {
  EventFeedMode,
  SubscribableQueryInput,
  User,
  Organization,
  ActivitySubjectInput,
  ActivityTypeInput,
  Maybe,
  ActivityFeedQueryVariables,
} from '@app/generated/civic.apollo'

export type ActivityFeedTagDisplayOption =
  | 'displayAll'
  | 'hideOrg'
  | 'hideSubject'
  | 'hideUser'

export type ActivityFeedSettings = {
  first: number
  scope: ActivityFeedScope
  includeAutomatedEvents: boolean
  showFilters: boolean
  requestDetails: boolean
}

export type ActivityFeedFilters = {
  activityType: ActivityTypeInput[]
  organizationId: number[]
  subjectType: ActivitySubjectInput[]
  userId: number[]
  dateRange: [Maybe<Date>, Maybe<Date>]
}

export type ActivityFeedFilterVariables = {
  activityType: Maybe<ActivityTypeInput[]>
  organizationId: Maybe<number[]>
  subjectType: Maybe<ActivitySubjectInput[]>
  userId: Maybe<number[]>
  occuredAfter: Maybe<string>
  occuredBefore: Maybe<string>
}
export type ActivityFeedFilterKeys = keyof ActivityFeedFilters

export type ActivityFeedFilterOptions = {
  activityTypes: ActivityTypeInput[]
  uniqueParticipants: User[]
  participatingOrganizations: Organization[]
  subjectTypes: ActivitySubjectInput[]
  dateRange: [Maybe<Date>, Maybe<Date>]
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

export type ActivityFeedQueryParams = {
  filters: ActivityFeedFilters
  settings: ActivityFeedSettings
}

export type FeedQueryType = 'refetch' | 'fetchMore'

type FeedQueryFetchMoreEvent = {
  type: 'fetchMore'
  fetch: FetchParams
  query: never
}

type FeedQueryRefetchEvent = {
  type: 'refetch'
  query: ActivityFeedQueryVariables
  fetch: never
}

export type FeedQueryEvent = FeedQueryFetchMoreEvent | FeedQueryRefetchEvent

// fancy discriminated union type for ActivityFeedScope
type ScopeOrganization = {
  mode: EventFeedMode.Organization
  organizationId: number
  subject?: never
  userId?: never
}

type ScopeSubject = {
  mode: EventFeedMode.Subject
  subject: SubscribableQueryInput
  organizationId?: never
  userId?: never
}

type ScopeUser = {
  mode: EventFeedMode.User
  userId: number
  organizationId?: never
  subject?: never
}

type ScopeUnscoped = {
  mode: EventFeedMode.Unscoped
  organizationId?: never
  subject?: never
  userId?: never
}

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
