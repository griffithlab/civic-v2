module Types
  class MutationType < Types::BaseObject
    # comments
    field :add_comment, mutation: Mutations::AddComment
    field :delete_comment, mutation: Mutations::DeleteComment

    # revisions
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :suggest_factor_revision, mutation: Mutations::SuggestFactorRevision
    field :suggest_fusion_revision, mutation: Mutations::SuggestFusionRevision
    field :suggest_region_revision, mutation: Mutations::SuggestRegionRevision
    field :suggest_gene_variant_revision, mutation: Mutations::SuggestGeneVariantRevision
    field :suggest_factor_variant_revision, mutation: Mutations::SuggestFactorVariantRevision
    field :suggest_fusion_variant_revision, mutation: Mutations::SuggestFusionVariantRevision
    field :suggest_region_variant_revision, mutation: Mutations::SuggestRegionVariantRevision
    field :suggest_molecular_profile_revision, mutation: Mutations::SuggestMolecularProfileRevision
    field :suggest_evidence_item_revision, mutation: Mutations::SuggestEvidenceItemRevision
    field :suggest_assertion_revision, mutation: Mutations::SuggestAssertionRevision
    field :suggest_variant_group_revision, mutation: Mutations::SuggestVariantGroupRevision
    field :reject_revisions, mutation: Mutations::RejectRevisions
    field :accept_revisions, mutation: Mutations::AcceptRevisions

    # subscriptions
    field :subscribe, mutation: Mutations::Subscribe
    field :unsubscribe, mutation: Mutations::Unsubscribe
    field :update_notification_status, mutation: Mutations::UpdateNotificationStatus

    # flags
    field :flag_entity, mutation: Mutations::FlagEntity
    field :resolve_flag, mutation: Mutations::ResolveFlag

    # deprecation
    field :deprecate_feature, mutation: Mutations::DeprecateFeature
    field :deprecate_variant, mutation: Mutations::DeprecateVariant
    field :deprecate_complex_molecular_profile, mutation: Mutations::DeprecateComplexMolecularProfile

    # molecular profiles
    field :create_molecular_profile, mutation: Mutations::CreateMolecularProfile

    # sources
    field :add_remote_citation, mutation: Mutations::AddRemoteCitation

    # source suggestions
    field :update_source_suggestion_status, mutation: Mutations::UpdateSourceSuggestionStatus

    # users
    field :edit_user, mutation: Mutations::EditUser
    field :update_coi, mutation: Mutations::UpdateCoi

    # submission
    field :submit_evidence, mutation: Mutations::SubmitEvidenceItem
    field :submit_assertion, mutation: Mutations::SubmitAssertion
    field :suggest_source, mutation: Mutations::SuggestSource
    field :submit_variant_group, mutation: Mutations::SubmitVariantGroup

    # moderation
    field :moderate_evidence_item, mutation: Mutations::ModerateEvidenceItem
    field :moderate_assertion, mutation: Mutations::ModerateAssertion

    # non-moderated entity creation
    field :add_disease, mutation: Mutations::AddDisease
    field :add_therapy, mutation: Mutations::AddTherapy
    field :create_variant, mutation: Mutations::CreateVariant
    field :create_feature, mutation: Mutations::CreateFeature
    field :create_fusion_feature, mutation: Mutations::CreateFusionFeature
    field :create_fusion_variant, mutation: Mutations::CreateFusionVariant
    field :create_region_feature, mutation: Mutations::CreateRegionFeature
    field :create_region_variant, mutation: Mutations::CreateRegionVariant

    # api keys
    field :generate_api_key, mutation: Mutations::GenerateApiKey
    field :revoke_api_key, mutation: Mutations::RevokeApiKey

    # approvals
    field :approve_assertion, mutation: Mutations::ApproveAssertion
    field :revoke_approval, mutation: Mutations::RevokeApproval
  end
end
