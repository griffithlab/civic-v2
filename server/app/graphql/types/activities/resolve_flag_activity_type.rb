module Types::Activities
  class ResolveFlagActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :flag, Types::Entities::FlagType, null: false

    def flag
      Loaders::AssociationLoader.for(ResolveFlagActivity, :linked_flag).load(object)
    end
  end
end
