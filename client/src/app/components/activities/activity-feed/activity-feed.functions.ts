import { EventFeedMode, Maybe } from '@app/generated/civic.apollo'
import {
  ActivityFeedFilterAttributes,
  ActivityFeedFilterKeys,
  ActivityFeedFilters,
  ActivityFeedModeAttributes,
  ActivityFeedScope,
} from './activity-feed.types'

export function filterParamsToQueryAttributes(
  filters: Maybe<ActivityFeedFilters>
): Maybe<ActivityFeedFilterAttributes> {
  if (!filters) return
  let filterAttrs: ActivityFeedFilterAttributes = {}
  const keys = Object.keys(filters) as ActivityFeedFilterKeys[]
  keys.forEach((key) => {
    if (filters[key] && filters[key].length > 0) {
      console.log('filter to attr', key, filters[key])
      filterAttrs[key] = filters[key] as any
    } else {
      filterAttrs[key] = undefined
    }
  })
  return filterAttrs
}

export function feedScopeToModeAttributes(
  feedScope: Maybe<ActivityFeedScope>
): Maybe<ActivityFeedModeAttributes> {
  if (!feedScope) return
  let modeAttrs: ActivityFeedModeAttributes = {
    mode: feedScope.scope,
  }
  if (feedScope.scope === EventFeedMode.Subject) {
    modeAttrs.subject = feedScope.subject
  } else if (feedScope.scope === EventFeedMode.User) {
    modeAttrs.userId = feedScope.userId
  } else if (feedScope.scope === EventFeedMode.Organization) {
    modeAttrs.organizationId = feedScope.organizationId
  }
  return modeAttrs
}
