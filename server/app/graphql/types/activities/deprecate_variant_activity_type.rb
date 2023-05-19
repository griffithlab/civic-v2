module Types::Activities
  class DeprecateVariantActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :comment, Types::Entities::CommentType, null: false
    field :molecular_profiles, [Types::Entities::MolecularProfileType], null: false

    def comment
      Loaders::AssociationLoader.for(DeprecateVariantActivity, :linked_comment).load(object)
    end

    def flag
      Loaders::AssociationLoader.for(DeprecateVariantActivity, :linked_molecular_profiles).load(object)
    end
  end
end
