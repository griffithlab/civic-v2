import {
  ActivityFeedFilters,
  ActivityFeedSettings,
} from './activity-feed.types'

export const pageSizeOptions = [5, 10, 25, 50, 100]
export const feedPollInterval = 30000

export const feedDefaultSettings: ActivityFeedSettings = {
  pageSize: 25,
}

export const feedDefaultFilters: ActivityFeedFilters = {
  organizationId: [],
  eventType: [],
  subjectType: [],
  userId: [],
}
