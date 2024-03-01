import {
  AcceptRevisionsActivityDetailFragment,
  ActivityFeedItemFragment,
  CommentActivityDetailFragment,
  FlagEntityActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import result from '@app/generated/civic.possible-types'

type ActivityTypeToFragmentMap = {
  CommentActivity: CommentActivityDetailFragment
  FlagEntityActivity: FlagEntityActivityDetailFragment
  AcceptRevisionsActivity: AcceptRevisionsActivityDetailFragment
  // CreateComplexMolecularProfileActivity: CreateComplexMolecularProfileActivityDetailFragment
  // CreateVariantActivity: CreateVariantActivityDetailFragment
  // DeprecateComplexMolecularProfileActivity: DeprecateComplexMolecularProfileActivityDetailFragment
  // DeprecateVariantActivity: DeprecateVariantActivityDetailFragment
  // ModerateAssertionActivity: ModerateAssertionActivityDetailFragment
  // ModerateEvidenceItemActivity: ModerateEvidenceItemActivityDetailFragment
  // RejectRevisionsActivity: RejectRevisionsActivityDetailFragment
  // ResolveFlagActivity: ResolveFlagActivityDetailFragment
  // SubmitAssertionActivity: SubmitAssertionActivityDetailFragment
  // SubmitEvidenceItemActivity: SubmitEvidenceItemActivityDetailFragment
  // SuggestRevisionSetActivity: SuggestRevisionSetActivityDetailFragment
  // SuggestSourceActivity: SuggestSourceActivityDetailFragment
  // UpdateSourceSuggestionStatusActivity: UpdateSourceSuggestionStatusActivityDetailFragment
}

const isAcceptRevisionsActivity: TypeGuard<
  ActivityFeedItemFragment,
  AcceptRevisionsActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is AcceptRevisionsActivityDetailFragment =>
  activity.__typename === 'AcceptRevisionsActivity'

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
  isAcceptRevisionsActivity: isAcceptRevisionsActivity,
  isFlagEntityActivity: isFlagEntityActivity,
}
