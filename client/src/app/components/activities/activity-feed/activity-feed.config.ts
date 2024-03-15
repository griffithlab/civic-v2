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
  activityType: [],
  subjectType: [],
  userId: [],
}
export const feedDefaultScope: ActivityFeedScope = {
  mode: EventFeedMode.Unscoped,
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
  // minIndex: 0, // no negative rows :
  itemSize: 48, // default px height of items. Easiest way to find this value: enable DevSettings.debug & immediateLog and height will be logged to console
  sizeStrategy: SizeStrategy.Frequent, // most items will be the same height, so use frequent rather than average
  padding: 0.5, // load more rows when padding * bufferSize are visible
}

export const scrollerDevSettings: DevSettings = {
  // debug: true,
  // immediateLog: true,
  cacheData: true, // smoother scrolling
}
