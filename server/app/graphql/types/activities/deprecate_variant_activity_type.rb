module Types::Activities
  class DeprecateVariantActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :molecular_profiles, [Types::Entities::MolecularProfileType], null: false

    def flag
      Loaders::AssociationLoader.for(DeprecateVariantActivity, :linked_molecular_profiles).load(object)
    end
  end
end
