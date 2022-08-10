module Types
  class MutationType < Types::BaseObject
    #comments
    field :add_comment, mutation: Mutations::AddComment

    #revisions
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :suggest_variant_revision, mutation: Mutations::SuggestVariantRevision
    field :suggest_molecular_profile_revision, mutation: Mutations::SuggestMolecularProfileRevision
    field :suggest_evidence_item_revision, mutation: Mutations::SuggestEvidenceItemRevision
    field :suggest_assertion_revision, mutation: Mutations::SuggestAssertionRevision
    field :suggest_variant_group_revision, mutation: Mutations::SuggestVariantGroupRevision
    field :reject_revisions, mutation: Mutations::RejectRevisions
    field :accept_revisions, mutation: Mutations::AcceptRevisions

    #subscriptions
    field :subscribe, mutation: Mutations::Subscribe
    field :unsubscribe, mutation: Mutations::Unsubscribe
    field :update_notification_status, mutation: Mutations::UpdateNotificationStatus

    #flags
    field :flag_entity, mutation: Mutations::FlagEntity
    field :resolve_flag, mutation: Mutations::ResolveFlag

    #deprecation
    field :deprecate_variant, mutation: Mutations::DeprecateVariant

    #molecular profiles
    field :create_molecular_profile, mutation: Mutations::CreateMolecularProfile

    #sources
    field :add_remote_citation, mutation: Mutations::AddRemoteCitation

    #source suggestions
    field :update_source_suggestion_status, mutation: Mutations::UpdateSourceSuggestionStatus

    #users
    field :edit_user, mutation: Mutations::EditUser
    field :update_coi, mutation: Mutations::UpdateCoi

    #submission
    field :submit_evidence, mutation: Mutations::SubmitEvidenceItem
    field :submit_assertion, mutation: Mutations::SubmitAssertion
    field :suggest_source, mutation: Mutations::SuggestSource
    field :submit_variant_group, mutation: Mutations::SubmitVariantGroup

    #moderation
    field :moderate_evidence_item, mutation: Mutations::ModerateEvidenceItem
    field :moderate_assertion, mutation: Mutations::ModerateAssertion

    #non-moderated entity creation
    field :add_disease, mutation: Mutations::AddDisease
    field :add_drug, mutation: Mutations::AddDrug
    field :add_variant, mutation: Mutations::AddVariant
  end
end
