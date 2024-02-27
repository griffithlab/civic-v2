import {
  ActivityFeedItemFragment,
  CommentActivityDetailsFragment,
} from '@app/generated/civic.apollo'
import result from '@app/generated/civic.possible-types'

type ActivityFeedItemDetailFragmentMap = {
  CommentActivityDetail: CommentActivityDetailsFragment
}

export type ActivityFeedItemDetailFragment = CommentActivityDetailsFragment

// type ActivityTypeMap = {
//   AcceptRevisionsActivity: AcceptRevisionsActivity
//   CommentActivity: CommentActivity
//   CreateComplexMolecularProfileActivity: CreateComplexMolecularProfileActivity
//   CreateVariantActivity: CreateVariantActivity
//   DeprecateComplexMolecularProfileActivity: DeprecateComplexMolecularProfileActivity
//   DeprecateVariantActivity: DeprecateVariantActivity
//   FlagEntityActivity: FlagEntityActivity
//   ModerateAssertionActivity: ModerateAssertionActivity
//   ModerateEvidenceItemActivity: ModerateEvidenceItemActivity
//   RejectRevisionsActivity: RejectRevisionsActivity
//   ResolveFlagActivity: ResolveFlagActivity
//   SubmitAssertionActivity: SubmitAssertionActivity
//   SubmitEvidenceItemActivity: SubmitEvidenceItemActivity
//   SuggestRevisionSetActivity: SuggestRevisionSetActivity
//   SuggestSourceActivity: SuggestSourceActivity
//   UpdateSourceSuggestionStatusActivity: UpdateSourceSuggestionStatusActivity
// }

// export interface TypeGuardMap {
//   [key: string]: (
//     item: ActivityFeedItemFragment
//   ) => item is ActivityFeedItemFragment
// }

// function generateTypeGuardMap(): TypeGuardMap {
//   const guards: TypeGuardMap = {}

//   const typeNames = result.possibleTypes.ActivityInterface

//   typeNames.forEach((typeName) => {
//     guards[`is${typeName}`] = (
//       item: ActivityFeedItemFragment
//     ): item is ActivityFeedItemFragment => {
//       return item.__typename === typeName
//     }
//   })

//   return guards
// }

// export const activityFeedItemTypeGuards = generateTypeGuardMap()

// /* EXPORT ActivityInterface TYPE GUARDS
//  * NOTE: activity feed uses ActivityInterface as much as possible to avoid
//  * referring to specific polymorphic types. However, Angular template flow
//  * control functions throw TS errors when narrowing is attempted using
//  * __typename or other distinguishing attributes. Therefore, it appears custom
//  * type guards are necessary, using the TypeGuard pipe.
//  * */

// // map ActivityInterface types to name strings
// // NOTE: tried to find an enum to avoid manually creating this map, didn't find anything
// type ActivityTypeMap = {
//   AcceptRevisionsActivity: AcceptRevisionsActivity
//   CommentActivity: CommentActivity
//   CreateComplexMolecularProfileActivity: CreateComplexMolecularProfileActivity
//   CreateVariantActivity: CreateVariantActivity
//   DeprecateComplexMolecularProfileActivity: DeprecateComplexMolecularProfileActivity
//   DeprecateVariantActivity: DeprecateVariantActivity
//   FlagEntityActivity: FlagEntityActivity
//   ModerateAssertionActivity: ModerateAssertionActivity
//   ModerateEvidenceItemActivity: ModerateEvidenceItemActivity
//   RejectRevisionsActivity: RejectRevisionsActivity
//   ResolveFlagActivity: ResolveFlagActivity
//   SubmitAssertionActivity: SubmitAssertionActivity
//   SubmitEvidenceItemActivity: SubmitEvidenceItemActivity
//   SuggestRevisionSetActivity: SuggestRevisionSetActivity
//   SuggestSourceActivity: SuggestSourceActivity
//   UpdateSourceSuggestionStatusActivity: UpdateSourceSuggestionStatusActivity
// }

// // Augment ActivityInterface with __typename for type guard purposes
// // NOTE: would it make sense to add this to the server-side ActivityInterface?
// type ActivityInterfaceWithTypename = ActivityInterface & {
//   __typename?: string
// }

// // utility type to extract the actual type from the ActivityTypeMap
// type ActivityTypeByName<T extends keyof ActivityTypeMap> = ActivityTypeMap[T]

// // type for exported type guards map
// export type ActivityTypeGuardsMap = {
//   [K in keyof ActivityTypeMap as `is${K}`]?: TypeGuard<
//     ActivityInterfaceWithTypename,
//     ActivityTypeMap[K]
//   >
// }

// export const activityInterfaceGuards: ActivityTypeGuardsMap = {}

// // generate type guards
// result.possibleTypes.ActivityInterface.forEach((activityType) => {
//   const guardName = `is${activityType}`
//   ;(activityInterfaceGuards as any)[guardName] = (
//     option: ActivityInterfaceWithTypename
//   ): option is ActivityTypeByName<typeof activityType> =>
//     option.__typename === activityType
// })
