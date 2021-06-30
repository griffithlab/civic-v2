module Types
  class MutationType < Types::BaseObject
    #comments
    field :add_comment, mutation: Mutations::AddComment

    #revisions
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :suggest_variant_revision, mutation: Mutations::SuggestVariantRevision
    field :reject_revision, mutation: Mutations::RejectRevision
    field :accept_revision, mutation: Mutations::AcceptRevision

    #subscriptions
    field :subscribe, mutation: Mutations::Subscribe
    field :unsubscribe, mutation: Mutations::Unsubscribe
    field :mark_notifications_as_read, mutation: Mutations::MarkNotificationsAsRead

    #flags
    field :flag_entity, mutation: Mutations::FlagEntity
    field :resolve_flag, mutation: Mutations::ResolveFlag

    #sources
    field :add_remote_citation, mutation: Mutations::AddRemoteCitation
  end
end
