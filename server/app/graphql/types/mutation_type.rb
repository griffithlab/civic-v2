module Types
  class MutationType < Types::BaseObject
    field :add_comment, mutation: Mutations::AddComment
    field :suggest_gene_revision, mutation: Mutations::SuggestGeneRevision
    field :reject_revision, mutation: Mutations::RejectRevision
    field :accept_revision, mutation: Mutations::AcceptRevision
    field :flag_entity, mutation: Mutations::FlagEntity
    field :resolve_flag, mutation: Mutations::ResolveFlag
  end
end
