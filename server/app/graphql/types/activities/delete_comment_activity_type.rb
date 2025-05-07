module Types::Activities
  class DeleteCommentActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false

    def comment
      Loaders::AssociationLoader.for(DeleteCommentActivity, :linked_comment).load(object)
    end
  end
end
