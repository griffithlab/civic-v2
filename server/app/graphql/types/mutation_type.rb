module Types
  class MutationType < Types::BaseObject
    #comments
    field :add_comment, mutation: Mutations::AddComment

    #revisions
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :suggest_variant_revision, mutation: Mutations::SuggestVariantRevision
    field :suggest_evidence_item_revision, mutation: Mutations::SuggestEvidenceItemRevision
    field :suggest_assertion_revision, mutation: Mutations::SuggestAssertionRevision
    field :reject_revisions, mutation: Mutations::RejectRevisions
    field :accept_revisions, mutation: Mutations::AcceptRevisions

    #subscriptions
    field :subscribe, mutation: Mutations::Subscribe
    field :unsubscribe, mutation: Mutations::Unsubscribe
    field :update_notification_status, mutation: Mutations::UpdateNotificationStatus

    #flags
    field :flag_entity, mutation: Mutations::FlagEntity
    field :resolve_flag, mutation: Mutations::ResolveFlag

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

    #moderation
    field :moderate_evidence_item, mutation: Mutations::ModerateEvidenceItem
    field :moderate_assertion, mutation: Mutations::ModerateAssertion
  end
end
