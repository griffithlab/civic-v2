import { TagLinkableOrganization } from '@app/components/organizations/organization-tag/organization-tag.component'
import { TagLinkableUser } from '@app/components/users/user-tag/user-tag.component'
import {
  EventAction,
  EventFeedMode,
  SubscribableQueryInput,
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
  eventType: EventAction[]
  organizationId: number[]
  subjectType: SubscribableQueryInput[]
  userId: number[]
}

export type ActivityFeedInfo = {
  loading: boolean
  // pageInfo: PageInfo
  // pageCount: boolean
  actionCount: {
    unfiltered: number
  }
  participants?: TagLinkableUser[]
  organizations?: TagLinkableOrganization[]
  types?: EventAction[]
}
export type FetchMoreParams = { first: number; after: string }

export type ActivityFeedQueryParams = {
  filters?: ActivityFeedFilters
  settings?: ActivityFeedSettings
  fetchMore?: { first?: number; after?: string }
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
