import { InjectionToken } from '@angular/core'
import type { ScrollerStateService } from './feed-scroll-service/feed-scroll.service'

/**
 * The feed's scroller state, provided by `CvcActivityFeed` and injected by its
 * descendants (feed items, item details, and a couple of the per-activity detail
 * components).
 *
 * It lives here rather than beside the component that provides it because every
 * descendant needs it: importing it from `activity-feed.component.ts` made each
 * child import its own parent, producing a runtime import cycle
 * (activity-feed -> feed-item -> activity-feed) that defeats tree-shaking.
 *
 * The service type is imported with `import type` so this module has no runtime
 * dependency of its own — `feed-scroll.service.ts` refers back to the component
 * and the item, and a value import here would simply move the cycle rather than
 * remove it.
 */
export const FEED_SCROLL_SERVICE_TOKEN =
  new InjectionToken<ScrollerStateService>('ActivityFeedScrollerState')
