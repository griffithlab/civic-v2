module Types
  class MutationType < Types::BaseObject
    field :add_comment, mutation: Mutations::AddComment
    field :suggest_gene_change, mutation: Mutations::SuggestGeneChange
    field :reject_suggested_change, mutation: Mutations::RejectSuggestedChange
  end
end
