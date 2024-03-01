import {
  ActivityFeedItemFragment,
  CommentActivityDetailFragment,
  FlagEntityActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'

const isCommentActivity: TypeGuard<
  ActivityFeedItemFragment,
  CommentActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is CommentActivityDetailFragment =>
  activity.__typename === 'CommentActivity'

const isFlagEntityActivity: TypeGuard<
  ActivityFeedItemFragment,
  FlagEntityActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is FlagEntityActivityDetailFragment =>
  activity.__typename === 'FlagEntityActivity'

export const activityFeedTypeGuards = {
  isCommentActivity: isCommentActivity,
  isFlagEntityActivity: isFlagEntityActivity,
}
