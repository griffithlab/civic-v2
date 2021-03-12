module Types
  class MutationType < Types::BaseObject
    #comments
    field :add_comment, mutation: Mutations::AddComment

    #flags
    field :flag_entity, mutation: Mutations::FlagEntity

    #revisions
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :reject_revision, mutation: Mutations::RejectRevision
    field :accept_revision, mutation: Mutations::AcceptRevision

    #subscriptions
    field :subscribe, mutation: Mutations::Subscribe
    field :unsubscribe, mutation: Mutations::Unsubscribe
  end
end
