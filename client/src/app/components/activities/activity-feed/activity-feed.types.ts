import { EventType } from '@angular/router'
import { TagLinkableOrganization } from '@app/components/organizations/organization-tag/organization-tag.component'
import { TagLinkableUser } from '@app/components/users/user-tag/user-tag.component'
import {
  EventAction,
  EventFeedMode,
  Maybe,
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

export type CvcActivityFeedInfo = {
  loading: boolean
  // pageInfo: PageInfo
  // pageCount: boolean
  actionCount: {
    unfiltered: number
  }
  participants?: TagLinkableUser[]
  organizations?: TagLinkableOrganization[]
  types?: EventType[]
}
export type FetchMoreParams = { first: number; after: string }

export type CvcActivityFeedQueryParams = {
  filters?: CvcActivityFeedFilters
  prefs?: CvcActivityFeedPrefs
  fetchMore?: { first?: number; after?: string }
}
