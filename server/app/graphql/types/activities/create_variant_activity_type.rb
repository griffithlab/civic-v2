module Types::Activities
  class CreateVariantActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :molecular_profile, Types::Entities::MolecularProfileType, null: false

    def molecular_profile
      Loaders::AssociationLoader.for(CreateVariantActivity, :linked_molecular_profile).load(object)
    end
  end
end
