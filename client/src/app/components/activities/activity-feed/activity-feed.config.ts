import {
  ActivityInterfaceEdge,
  DateSortColumns,
  EventFeedMode,
  SortDirection,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedScope,
  ActivityFeedSettings,
} from './activity-feed.types'
import { DevSettings, Settings } from 'vscroll/dist/typings/interfaces'
import { SizeStrategy } from 'vscroll'

export const feedPollInterval = 30000

export const feedDefaultSettings: ActivityFeedSettings = {
  first: 50,
  scope: { mode: EventFeedMode.Unscoped },
  includeAutomatedEvents: false,
  showFilters: true,
  showOrganization: true,
  requestDetails: false,
}

export const feedDefaultFilters: ActivityFeedFilters = {
  organizationId: [],
  includeSubgroups: false,
  userId: [],
  activityType: [],
  subjectType: [],
  linkedApprovalId: null,
  occurredAfter: null,
  occurredBefore: null,
  sortByColumn: DateSortColumns.Created,
  sortByDirection: SortDirection.Desc,
}

export const feedDefaultScope: ActivityFeedScope = {
  mode: EventFeedMode.Unscoped,
}

export const simpleActivityTypes = new Set([
  'CreateComplexMolecularProfileActivity',
  'CreateVariantActivity',
  'CreateFeatureActivity',
  'DeleteCommentActivity',
  'ApproveAssertionActivity',
])

//TODO: Remove me, not needed
export const commentOnlyActivityTypes = new Set([
  'CommentActivity',
  'FlagEntityActivity',
  'ResolveFlagActivity',
  'SubmitAssertionActivity',
  'SubmitEvidenceItemActivity',
  'DeprecateComplexMolecularProfileActivity',
  'RevokeApprovalActivity',
  'ModerateAssertionActivity',
  'ModerateEvidenceItemActivity',
])

//TODO: Remove me, not needed
const complexActivityTypes = [
  'AcceptRevisionsActivity',
  'DeprecateVariantActivity',
  'DeprecateFeatureActivity',
  'RejectRevisionsActivity',
  'SuggestRevisionSetActivity',
  'SuggestSourceActivity',
  'UpdateSourceSuggestionStatusActivity',
]

export const feedFilterOptionDefaults: ActivityFeedFilterOptions = {
  uniqueParticipants: [],
  participatingOrganizations: [],
  activityTypes: [],
  subjectTypes: [],
  sortColumns: [DateSortColumns.Created, DateSortColumns.LastModified],
  sortDirections: [SortDirection.Desc, SortDirection.Asc],
}

export const scrollerSettings: Settings<ActivityInterfaceEdge> = {
  bufferSize: 20, // fetchmore minimum rows requested
  minIndex: 0,
  startIndex: 0,
  itemSize: 42,
  sizeStrategy: SizeStrategy.Constant, // seems to provide better performance
  padding: 0.8,
}

export const scrollerDevSettings: DevSettings = {
  // debug: true,
  // immediateLog: true,
  cacheData: true, // testing
}
