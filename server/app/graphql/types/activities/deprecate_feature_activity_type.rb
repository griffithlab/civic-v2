module Types::Activities
  class DeprecateFeatureActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :molecular_profiles, [Types::Entities::MolecularProfileType], null: false
    field :variants, [Types::Entities::VariantType], null: false

    def molecular_profiles
      Loaders::AssociationLoader.for(DeprecateFeatureActivity, :linked_molecular_profiles).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(DeprecateFeatureActivity, :linked_variants).load(object)
    end
  end
end
