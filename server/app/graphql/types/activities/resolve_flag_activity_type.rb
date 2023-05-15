module Types::Activities
  class ResolveFlagActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false
    field :flag, Types::Entities::FlagType, null: false

    def comment
      Loaders::AssociationLoader.for(ResolveFlagActivity, :linked_comment).load(object)
    end

    def flag
      Loaders::AssociationLoader.for(ResolveFlagActivity, :linked_flag).load(object)
    end
  end
end
