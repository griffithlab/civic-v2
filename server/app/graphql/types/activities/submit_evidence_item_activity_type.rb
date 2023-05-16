module Types::Activities
  class SubmitEvidenceItemActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false

    def comment
      Loaders::AssociationLoader.for(SubmitEvidenceItemActivity, :linked_comment).load(object)
    end
  end
end
