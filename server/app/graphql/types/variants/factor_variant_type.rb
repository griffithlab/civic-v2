module Types::Variants
  class FactorVariantType < Types::BaseObject
    implements Types::Interfaces::VariantInterface

    field :ncit_id, String, null: true
  end
end
