module Types::Activities
  class CommentActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false

    def comment
      Loaders::AssociationLoader.for(CommentActivity, :linked_comment).load(object)
    end
  end
end
