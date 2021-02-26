module Types
  class MutationType < Types::BaseObject
    field :add_comment, mutation: Mutations::AddComment
    field :suggest_gene_change, mutation: Mutations::SuggestGeneChange
  end
end
