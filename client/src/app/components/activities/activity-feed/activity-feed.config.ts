import {
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedSettings,
} from './activity-feed.types'

export const pageSizeOptions = [5, 10, 25, 50, 100]
export const feedPollInterval = 30000
export const feedScrollBuffer = 30
export const feedDefaultSettings: ActivityFeedSettings = {
  pageSize: 50,
}

export const feedDefaultFilters: ActivityFeedFilters = {
  organizationId: [],
  activityType: [],
  subjectType: [],
  userId: [],
}

export const feedFilterOptionDefaults: ActivityFeedFilterOptions = {
  uniqueParticipants: [],
  participatingOrganizations: [],
  activityTypes: [],
  subjectTypes: [],
}