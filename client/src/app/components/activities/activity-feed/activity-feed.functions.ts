import {
  ActivityFeedQueryVariables,
  EventFeedMode,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterVariables,
  ActivityFeedFilters,
  ActivityFeedSettingsVariables,
  ActivityFeedQueryParams,
  ActivityFeedSettings,
} from './activity-feed.types'

// replace empty arrays with undefined, dates with ISOString
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

// convert scope object to query variables
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

export function queryParamsToQueryVariables(
  params: ActivityFeedQueryParams
): ActivityFeedQueryVariables {
  // NOTE: if scope.mode is User or Organization, settingsToQueryVariables
  // must overwrite any organizationId or userId from filters
  return {
    ...settingsToQueryVariables(params.settings),
    ...filtersToQueryVariables(params.filters),
  }
}