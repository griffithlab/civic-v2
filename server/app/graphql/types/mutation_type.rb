module Types
  class MutationType < Types::BaseObject
    field :add_comment, mutation: Mutations::AddComment
  end
end
