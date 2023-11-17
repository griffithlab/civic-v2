module Types::Activities
  class FlagEntityActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :flag, Types::Entities::FlagType, null: false

    def flag
      Loaders::AssociationLoader.for(FlagEntityActivity, :linked_flag).load(object)
    end
  end
end
