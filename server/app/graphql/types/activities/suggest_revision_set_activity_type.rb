module Types::Activities
  class SuggestRevisionSetActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false
    field :revisions, [Types::Revisions::RevisionType], null: false
    field :revision_set, Types::Entities::RevisionSetType, null: false

    def comment
      Loaders::AssociationLoader.for(SuggestRevisionSetActivity, :linked_comment).load(object)
    end

    def revisions
      Loaders::AssociationLoader.for(SuggestRevisionSetActivity, :linked_revisions).load(object)
    end

    def revision_set
      Loaders::AssociationLoader.for(SuggestRevisionSetActivity, :linked_revision_set).load(object)
    end
  end
end
