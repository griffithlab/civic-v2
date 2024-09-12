import {
  ActivityFeedQueryVariables,
  ActivityInterfaceConnection,
  EventFeedMode,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterVariables,
  ActivityFeedFilters,
  ActivityFeedSettingsVariables,
  ActivityFeedQueryParams,
  ActivityFeedSettings,
  ActivityFeedFilterOptions,
  ActivityFeedCounts,
} from './activity-feed.types'

// munge filter values to GQL query variables
// - convert activityType, organizationId, subjectType, and userId to
//   arrays if they have length > 0
// - replace empty arrays with undefined
// - convert dates to ISOStrings
function filtersToQueryVariables(
  filters: ActivityFeedFilters
): ActivityFeedFilterVariables {
  return {
    activityType:
      filters['activityType'].length > 0 ? filters['activityType'] : undefined,
    organizationId:
      filters['organizationId'].length > 0
        ? filters['organizationId']
        : undefined,
    subjectType:
      filters['subjectType'].length > 0 ? filters['subjectType'] : undefined,
    userId: filters['userId'].length > 0 ? filters['userId'] : undefined,
    occurredAfter: filters['occurredAfter']
      ? filters['occurredAfter'].toISOString()
      : undefined,
    occurredBefore: filters['occurredBefore']
      ? filters['occurredBefore'].toISOString()
      : undefined,
  }
}

// convert settings to mode & id query variables
function settingsToQueryVariables(
  settings: ActivityFeedSettings
): ActivityFeedSettingsVariables {
  const { scope, ...nonScope } = settings
  return {
    ...nonScope,
    mode: scope.mode,
    subject: scope.mode === EventFeedMode.Subject ? scope.subject : undefined,
    organizationId:
      scope.mode === EventFeedMode.Organization
        ? [scope.organizationId]
        : undefined,
    userId: scope.mode === EventFeedMode.User ? [scope.userId] : undefined,
  }
}

// convert query params (from settings, filters) to GQL query variables
export function queryParamsToQueryVariables(
  params: ActivityFeedQueryParams
): ActivityFeedQueryVariables {
  // NOTE: scope modes take precedence over any filter values
  // for org / userId or subject, so it is important to call
  // settingsToQueryVariables last, where scope-related values are set
  return {
    ...filtersToQueryVariables(params.filters),
    ...settingsToQueryVariables(params.settings),
  }
}

// pluck filter options from feed connection object
export function connectionToFilterOptions(
  connection: ActivityInterfaceConnection
): ActivityFeedFilterOptions {
  return {
    uniqueParticipants: connection.uniqueParticipants ?? [],
    participatingOrganizations: connection.participatingOrganizations ?? [],
    activityTypes: connection.activityTypes ?? [],
    subjectTypes: connection.subjectTypes ?? [],
  }
}

// pluck/calculate feed counts from feed connection object
export function connectionToFeedCounts(
  connection: ActivityInterfaceConnection
): ActivityFeedCounts {
  return {
    total: connection.totalCount,
    unfiltered: connection.unfilteredCount,
    page: connection.pageCount,
    rows: connection.edges.length,
  }
}

// disable today and past dates for 'After' date picker
function disabledBeforeToday(current: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return current.getTime() >= today.getTime()
}
// disable tomorrow and future dates for 'Before' date picker
function disabledBeforeTomorrow(current: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
  return current.getTime() > tomorrow.getTime()
}

export const disableDates = {
  beforeToday: disabledBeforeToday,
  beforeTomorrow: disabledBeforeTomorrow,
}
