module Types::Activities
  class FlagEntityActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false
    field :flag, Types::Entities::FlagType, null: false

    def comment
      Loaders::AssociationLoader.for(FlagEntityActivity, :linked_comment).load(object)
    end

    def flag
      Loaders::AssociationLoader.for(FlagEntityActivity, :linked_flag).load(object)
    end
  end
end
