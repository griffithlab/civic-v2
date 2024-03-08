import {
  ActivityFeedQueryVariables,
  EventFeedMode,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterAttributes,
  ActivityFeedFilterKeys,
  ActivityFeedFilters,
  ActivityFeedModeAttributes,
  ActivityFeedQueryParams,
  ActivityFeedScope,
  ActivityFeedSettings,
} from './activity-feed.types'

export function filterParamsToQueryAttributes(
  filters: Maybe<ActivityFeedFilters>
): Maybe<ActivityFeedFilterAttributes> {
  if (!filters) return
  let filterAttrs: ActivityFeedFilterAttributes = {}
  const keys = Object.keys(filters) as ActivityFeedFilterKeys[]
  keys.forEach((key) => {
    if (filters[key] && filters[key].length > 0) {
      filterAttrs[key] = filters[key] as any
    } else {
      filterAttrs[key] = undefined
    }
  })
  return filterAttrs
}

export function feedScopeToModeAttributes(
  feedScope?: ActivityFeedScope,
  filters?: Maybe<ActivityFeedFilters>
): Maybe<ActivityFeedModeAttributes> {
  if (!feedScope) return
  let modeAttrs: ActivityFeedModeAttributes = {
    mode: feedScope.scope,
  }
  // assign mode query parameters, appending any filter values
  if (feedScope.scope === EventFeedMode.Subject) {
    modeAttrs.subject = feedScope.subject
  } else if (feedScope.scope === EventFeedMode.User) {
    modeAttrs.userId = [feedScope.userId, ...(filters?.userId ?? [])]
  } else if (feedScope.scope === EventFeedMode.Organization) {
    modeAttrs.organizationId = [
      feedScope.organizationId,
      ...(filters?.organizationId ?? []),
    ]
  }
  return modeAttrs
}

export function queryParamsToVariables(
  params: ActivityFeedQueryParams,
  scope?: ActivityFeedScope,
  showFilters?: boolean,
  requestDetails?: boolean
): ActivityFeedQueryVariables {
  // showFilters is a required query var
  let queryVars: ActivityFeedQueryVariables = {
    showFilters: showFilters ?? true,
    requestDetails: requestDetails ?? false,
  }
  const initialPageSize = params.settings!.initialPageSize
  const filterVars = filterParamsToQueryAttributes(params.filters)
  // NOTE: modeAttrs may merge existing user/organizationId filters, so it's important
  // to call filterParamsToQueryAttributes first, and merge queryVars in the same order
  const modeAttrs = feedScopeToModeAttributes(scope, params.filters)
  queryVars = {
    first: initialPageSize,
    includeAutomatedEvents: params.settings!.includeAutomatedEvents,
    ...queryVars,
    ...filterVars,
    ...modeAttrs,
  }
  return queryVars
}
