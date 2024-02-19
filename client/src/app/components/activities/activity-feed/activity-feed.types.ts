import {
  EventFeedMode,
  SubscribableQueryInput,
  User,
  Organization,
  ActivitySubjectInput,
  ActivityTypeInput,
} from '@app/generated/civic.apollo'

export type ActivityFeedTagDisplayOption =
  | 'displayAll'
  | 'hideOrg'
  | 'hideSubject'
  | 'hideUser'

export type ActivityFeedSettings = {
  pageSize: number
}

export type ActivityFeedFilters = {
  activityType: ActivityTypeInput[]
  organizationId: number[]
  subjectType: ActivitySubjectInput[]
  userId: number[]
}

export type ActivityFeedFilterAttributes = Partial<ActivityFeedFilters>
export type ActivityFeedFilterKeys = keyof ActivityFeedFilters

export type ActivityFeedFilterOptions = {
  activityTypes: ActivityTypeInput[]
  uniqueParticipants: User[]
  participatingOrganizations: Organization[]
  subjectTypes: ActivitySubjectInput[]
}

export type ActivityFeedCounts = {
  total: number
  unfiltered: number
  page: number
  rows: number
}

export type FetchMoreParams = { first: number; after: string }

export type ActivityFeedQueryParams = {
  filters?: ActivityFeedFilters
  settings?: ActivityFeedSettings
  fetchMore?: FetchMoreParams
}

// fancy discriminated union type for ActivityFeedScope
type ScopeOrganization = {
  scope: EventFeedMode.Organization
  organizationId: number
  subject?: never
  userId?: never
}

type ScopeSubject = {
  scope: EventFeedMode.Subject
  subject: SubscribableQueryInput
  organizationId?: never
  userId?: never
}

type ScopeUser = {
  scope: EventFeedMode.User
  userId: number
  organizationId?: never
  subject?: never
}

type ScopeUnscoped = {
  scope: EventFeedMode.Unscoped
  organizationId?: never
  subject?: never
  userId?: never
}

export type ActivityFeedScope =
  | ScopeOrganization
  | ScopeSubject
  | ScopeUser
  | ScopeUnscoped

export type ActivityFeedModeAttributes = {
  mode: EventFeedMode
  subject?: SubscribableQueryInput
  organizationId?: number
  userId?: number
}
