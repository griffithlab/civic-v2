import { InjectionToken } from '@angular/core'
import type { ScrollerStateService } from './feed-scroll-service/feed-scroll.service'

/**
 * The feed's scroller state, provided by `CvcActivityFeed` and injected by its
 * descendants. It lives in this leaf module because importing it from the
 * component made each child import its parent, a runtime cycle. The service
 * type is an `import type`: `feed-scroll.service.ts` refers back to the
 * component, so a value import would move the cycle rather than remove it.
 */
export const FEED_SCROLL_SERVICE_TOKEN =
  new InjectionToken<ScrollerStateService>('ActivityFeedScrollerState')
