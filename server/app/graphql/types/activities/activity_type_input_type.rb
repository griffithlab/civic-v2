module Types::Activities
  class ActivityTypeInputType < Types::BaseEnum
    value 'FLAG_ENTITY', value: 'FlagEntityActivity'
    value 'RESOLVE_FLAG', value: 'ResolveFlagActivity'
    value 'SUBMIT_EVIDENCE_ITEM', value: 'SubmitEvidenceItemActivity'
    value 'SUBMIT_ASSERTION', value: 'SubmitAssertionActivity'
    value 'MODERATE_ASSERTION', value: 'ModerateAssertionActivity'
    value 'MODERATE_EVIDENCE_ITEM', value: 'ModerateEvidenceItemActivity'
    value 'DEPRECATE_VARIANT', value: 'DeprecateVariantActivity'
    value 'SUGGEST_SOURCE', value: 'SuggestSourceActivity'
    value 'COMMENT', value: 'CommentActivity'
    value 'SUGGEST_REVISION', value: 'SuggestRevisionSetActivity'
    value 'UPDATE_SOURCE_SUGGESTION', value: 'UpdateSourceSuggestionStatusActivity'
    value 'REJECT_REVISIONS', value: 'RejectRevisionsActivity'
    value 'ACCEPT_REVISIONS', value: 'AcceptRevisionsActivity'
    value 'CREATE_VARIANT', value: 'CreateVariantActivity'
    value 'DEPRECATE_COMPLEX_MOLECULAR_PROFILE', value: 'DeprecateComplexMolecularProfileActivity'
    value 'CREATE_COMPLEX_MOLECULAR_PROFILE', value: 'CreateComplexMolecularProfileActivity'
  end
end
