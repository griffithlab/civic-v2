import {
  AcceptRevisionsActivityDetailFragment,
  ActivityFeedItemFragment,
  CommentActivityDetailFragment,
  CreateComplexMolecularProfileActivityDetailFragment,
  CreateVariantActivityDetailFragment,
  DeprecateComplexMolecularProfileActivityDetailFragment,
  DeprecateVariantActivityDetailFragment,
  FlagEntityActivityDetailFragment,
  ModerateAssertionActivityDetailFragment,
  ModerateEvidenceItemActivityDetailFragment,
  RejectRevisionsActivityDetailFragment,
  ResolveFlagActivityDetailFragment,
  SubmitAssertionActivityDetailFragment,
  SubmitEvidenceItemActivityDetailFragment,
  SuggestRevisionSetActivityDetailFragment,
  SuggestSourceActivityDetailFragment,
  UpdateSourceSuggestionStatusActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'

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

const isCreateComplexMolecularProfileActivity: TypeGuard<
  ActivityFeedItemFragment,
  CreateComplexMolecularProfileActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is CreateComplexMolecularProfileActivityDetailFragment =>
  activity.__typename === 'CreateComplexMolecularProfileActivity'

const isCreateVariantActivity: TypeGuard<
  ActivityFeedItemFragment,
  CreateVariantActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is CreateVariantActivityDetailFragment =>
  activity.__typename === 'CreateVariantActivity'

const isDeprecateComplexMolecularProfileActivity: TypeGuard<
  ActivityFeedItemFragment,
  DeprecateComplexMolecularProfileActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is DeprecateComplexMolecularProfileActivityDetailFragment =>
  activity.__typename === 'DeprecateComplexMolecularProfileActivity'

const isDeprecateVariantActivity: TypeGuard<
  ActivityFeedItemFragment,
  DeprecateVariantActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is DeprecateVariantActivityDetailFragment =>
  activity.__typename === 'DeprecateVariantActivity'

const isModerateAssertionActivity: TypeGuard<
  ActivityFeedItemFragment,
  ModerateAssertionActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is ModerateAssertionActivityDetailFragment =>
  activity.__typename === 'ModerateAssertionActivity'

const isModerateEvidenceItemActivity: TypeGuard<
  ActivityFeedItemFragment,
  ModerateEvidenceItemActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is ModerateEvidenceItemActivityDetailFragment =>
  activity.__typename === 'ModerateEvidenceItemActivity'

const isRejectRevisionsActivity: TypeGuard<
  ActivityFeedItemFragment,
  RejectRevisionsActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is RejectRevisionsActivityDetailFragment =>
  activity.__typename === 'RejectRevisionsActivity'

const isResolveFlagActivity: TypeGuard<
  ActivityFeedItemFragment,
  ResolveFlagActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is ResolveFlagActivityDetailFragment =>
  activity.__typename === 'ResolveFlagActivity'

const isSubmitAssertionActivity: TypeGuard<
  ActivityFeedItemFragment,
  SubmitAssertionActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is SubmitAssertionActivityDetailFragment =>
  activity.__typename === 'SubmitAssertionActivity'

const isSubmitEvidenceItemActivity: TypeGuard<
  ActivityFeedItemFragment,
  SubmitEvidenceItemActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is SubmitEvidenceItemActivityDetailFragment =>
  activity.__typename === 'SubmitEvidenceItemActivity'

const isSuggestRevisionSetActivity: TypeGuard<
  ActivityFeedItemFragment,
  SuggestRevisionSetActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is SuggestRevisionSetActivityDetailFragment =>
  activity.__typename === 'SuggestRevisionSetActivity'

const isSuggestSourceActivity: TypeGuard<
  ActivityFeedItemFragment,
  SuggestSourceActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is SuggestSourceActivityDetailFragment =>
  activity.__typename === 'SuggestSourceActivity'

const isUpdateSourceSuggestionStatusActivity: TypeGuard<
  ActivityFeedItemFragment,
  UpdateSourceSuggestionStatusActivityDetailFragment
> = (
  activity: ActivityFeedItemFragment
): activity is UpdateSourceSuggestionStatusActivityDetailFragment =>
  activity.__typename === 'UpdateSourceSuggestionStatusActivity'

export const activityFeedTypeGuards = {
  isCommentActivity: isCommentActivity,
  isAcceptRevisionsActivity: isAcceptRevisionsActivity,
  isFlagEntityActivity: isFlagEntityActivity,
  isCreateComplexMolecularProfileActivity:
    isCreateComplexMolecularProfileActivity,
  isCreateVariantActivity: isCreateVariantActivity,
  isDeprecateComplexMolecularProfileActivity:
    isDeprecateComplexMolecularProfileActivity,
  isDeprecateVariantActivity: isDeprecateVariantActivity,
  isModerateAssertionActivity: isModerateAssertionActivity,
  isModerateEvidenceActivity: isModerateEvidenceItemActivity,
  isRejectRevisionsActivity: isRejectRevisionsActivity,
  isResolveFlagActivity: isResolveFlagActivity,
  isSubmitAssertionActivity: isSubmitAssertionActivity,
  isSubmitEvidenceItemActivity: isSubmitEvidenceItemActivity,
  isSuggestRevisionSetActivity: isSuggestRevisionSetActivity,
  isSuggestSourceActivity: isSuggestSourceActivity,
  isUpdateSourceSuggestionStatusActivity:
    isUpdateSourceSuggestionStatusActivity,
}
