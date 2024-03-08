import {
  ActivityInterfaceEdge,
  ActivitySubjectInput,
  ActivityTypeInput,
  EventFeedMode,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedScope,
  ActivityFeedSettings,
} from './activity-feed.types'
import { DevSettings, Settings } from 'vscroll/dist/typings/interfaces'

export const pageSizeOptions = [5, 10, 25, 50, 100]
export const feedPollInterval = 30000
export const feedDefaultSettings: ActivityFeedSettings = {
  initialPageSize: 75,
  includeAutomatedEvents: false,
}
export const feedDefaultFilters: ActivityFeedFilters = {
  organizationId: [],
  activityType: [],
  subjectType: [],
  userId: [],
}
export const feedDefaultScope: ActivityFeedScope = {
  scope: EventFeedMode.Unscoped,
}

export const feedFilterOptionDefaults: ActivityFeedFilterOptions = {
  uniqueParticipants: [],
  participatingOrganizations: [],
  activityTypes: [],
  subjectTypes: [],
}

// ngx-ui-scroll does not export this enum from vscroll,
// so we have to define it here
enum SizeStrategy {
  Average = 'average',
  Constant = 'constant',
  Frequent = 'frequent',
}
export const scrollerSettings: Settings<ActivityInterfaceEdge> = {
  bufferSize: 25, // # of rows in fetchMore requests
  startIndex: 0, // start row display at 0 index
  minIndex: 0, // no negative rows
  itemSize: 48, // uncomment debug, immediateLog below to get itemSize, use host styles padding-bottom to adjust
  sizeStrategy: SizeStrategy.Frequent, // most items will be the same height, so use frequent rather than average
  padding: 1.25, // load more rows when 1.25 * bufferSize are visible
}

export const scrollerDevSettings: DevSettings = {
  // debug: true,
  // immediateLog: true,
  cacheData: true, // smoother scrolling
}
