import {
  ActivityInterfaceEdge,
  ActivitySubjectInput,
  ActivityTypeInput,
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
  requestDetails: false,
}

export const feedDefaultFilters: ActivityFeedFilters = {
  organizationId: [],
  userId: [],
  activityType: [],
  subjectType: [],
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
  'ModerateAssertionActivity',
  'ModerateEvidenceItemActivity',
])

//TODO: Remove me, not needed
export const commentOnlyActivityTypes = new Set([
  'CommentActivity',
  'FlagEntityActivity',
  'ResolveFlagActivity',
  'SubmitAssertionActivity',
  'SubmitEvidenceItemActivity',
  'DeprecateComplexMolecularProfileActivity',
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
  bufferSize: 25,
  minIndex: 0,
  startIndex: 0,
  itemSize: 44,
  sizeStrategy: SizeStrategy.Frequent,
  padding: 0.8,
}

export const scrollerDevSettings: DevSettings = {
  // debug: true,
  // immediateLog: true,
  // cacheData: true, // smoother scrolling?
  cacheData: true, // testing
}
