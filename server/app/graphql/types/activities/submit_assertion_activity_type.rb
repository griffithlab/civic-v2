module Types::Activities
  class SubmitAssertionActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false

    def comment
      Loaders::AssociationLoader.for(SubmitAssertionActivity, :linked_comment).load(object)
    end
  end
end
